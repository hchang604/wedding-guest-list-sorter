import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { moveFirstWordToEnd, moveLastWordToBeginning } from './utils';

// Replace 'your-file.xlsx' with the actual file path
const filePath = './data/chart.xlsx';

// Read the Excel file
const workbook = XLSX.readFile(filePath);

// Assume that the data is in the first sheet (index 0)
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Parse the worksheet data into an array of objects
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any[] = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

const keys = Object.keys(data[0])
const tables = Object.values(data[0])
const names: string[] = [];

// Record of table name keys with an array of names for each table
const record: Record<string, string[]> = {}

// set record
for(let i = 1; i < data.length; i++) {
    keys.forEach((key) => {
        const tableName = data[0][key]

        if(data[i][key]) {
            if(record[tableName]) {
                record[tableName].push(data[i][key])
                names.push(data[i][key])
            } else {
                record[tableName] = [data[i][key]]
                names.push(data[i][key])
            }
        }
    })
}

// Remove table headcount
const unsortedfilteredNames = names.filter((name) => typeof name === 'string')

// Append last name to beginning of each name
const lastNameUnsorted = unsortedfilteredNames.map((name) => moveFirstWordToEnd(name))

// Sort alphabetically
lastNameUnsorted.sort((a, b) => a.toString().localeCompare(b))

// Append first name back to beginning of name
const firstNameArr = lastNameUnsorted.map((name) => moveLastWordToBeginning(name))

// Append table number to each name
const appendedNames = firstNameArr.map((name) => {
    for(let i = 0; i < tables.length; i++) {
        const table = tables[i] as string
        const names = record[table] as string[]

        if(names.includes(name)) {
            return name + ' ' +  table.replace("Table ", "")
        }
    }
})

// Write result to text file
fs.writeFileSync('./result/results.txt', JSON.stringify(appendedNames, undefined, 2), 'utf-8');