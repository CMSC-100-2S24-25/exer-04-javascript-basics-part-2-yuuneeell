// JOYOSA, EUNEL JACOB C. | 2023-00895
// CMSC 100 C-1L
// EXER 3 - JavaScript Basics Part 1

// import necessary packages
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

// generateUniqueID() function that generates UUIDs in the format of: e.g. jdelacruz8CharUID
export function generateUniqueID(firstName, lastName) {
    // check whether there are missing parameters
    if (!firstName || !lastName) {
        console.log("Error: generateUniqueID() called with missing parameters. First and last name must be provided.");
        return false;
    }
    const fNameInitial = firstName.charAt(0).toLowerCase();                 // Gets first letter of fname as initial
    const lNameLower = lastName.toLowerCase().split(' ').join('');          // Converts last name to lower case and removes spaces
    const uniqueString = uuidv4().split('-').join(' ').substring(0, 8);     // Get first 8 characters of random generated UUID (removes hyphens as well)
    return `${fNameInitial}${lNameLower}${uniqueString}`;
}

// addAccount()
export function addAccount([firstName, lastName, email, age]) {
    // check whether there are missing parameters from any of the fields
    if (!firstName || !lastName || !email || !age === undefined) {
        console.log("Error: addAccount() called with missing parameters. All fields are required.");
        return false;
    }

    // check if firstName, lastName, and email are not non-empty strings
    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string' ||
        firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
        console.log("Error: At least one of the required string fields have an empty string.");
        return false;
    }

    // Check if email is valid
    if (!validator.isEmail(email)) {
        console.log("Error: Invalid email format.");
        return false;
    }

    // Check if age is number type
    if (typeof age !== 'number'){
        console.log("Error: Age field must have of type number.");
        return false;
    }

    // Check if age is at least 18
    if (age < 18) {
        console.log("Error: Age must be at least 18 to add an account.");
        return false;
    }

    // Generate unique identifier for account
    const uniqueID = generateUniqueID(firstName, lastName);

    // Prepare data to be saved
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
    

    // Append the data to users.txt
    fs.appendFileSync('users.txt', userData);
    return true;
}