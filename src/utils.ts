/*
 * Example:
 * console.log(moveFirstWordToEnd("Grayson Mark"))
 * 
 * Output:
 * Mark Grayson
 */
export function moveLastWordToBeginning(inputString: string): string {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Check if there is at least one word in the array
    if (words.length > 0) {
        // Extract the last word
        const lastWord = words[words.length - 1];

        // Remove the last word from the original array
        words.pop();

        // Prepend the last word to the beginning of the array
        words.unshift(lastWord);

        // Join the array of words into a string
        const resultString = words.join(' ');

        return resultString;
    } else {
        // If there are no words, return the original string
        return inputString;
    }
}

/*
 * Example:
 * console.log(moveFirstWordToEnd("Mark Grayson"))
 * 
 * Output:
 * Grayson Mark
 */
export function moveFirstWordToEnd(inputString: string): string {
    // Split the input string into an array of words
    const words = inputString.split(' ');

    // Check if there is at least one word in the array
    if (words.length > 0) {
        // Extract the first word
        const firstWord = words[0];

        // Append the first word to the end of the string
        return inputString.slice(inputString.indexOf(' ') + 1, inputString.length) + ' ' + firstWord;
    } else {
        // If there are no words, return the original string
        return inputString;
    }
}