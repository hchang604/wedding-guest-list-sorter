# Wedding Guest List Sorter

I created this program to help my girlfriend who is a graphic designer.  She received a request from a client to design a guest list for a wedding with the following parameters:

- Names are to be sorted in alphabetical order based on guest last names
- Guest names are to have their assigned table numbers appended to the very end of their names

The client provided an excel document containing table numbers are columnes and had guests under each column.  Unfortunately, the excel sheet did not have the names sorted in alphabetical order, and there was no way that my girlfriend was going to  sort all 279 guest names alphabetically by hand.  

# Instructions

## Setup

To use this program, put an excel sheet in the `./data` directory.  The excel sheet must be in the following format:

![image](https://github.com/alianza-dev/cm-cross-platform/assets/82110542/b85dffc5-a4df-4fbe-9ca7-d2f6318dc959)

## Run

To start the program, run the following command:

`npm start`

## Results

The following output is a text file callted `results.txt` located in the `result` directory.  Inside the text file is an array of names sorted alphabetically with table numbers appended to the very end. 

![image](https://github.com/alianza-dev/cm-cross-platform/assets/82110542/1490de32-0022-4063-ae17-5c6610ec9eb0)
