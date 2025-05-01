// import index.js
import { generateUniqueID, addAccount } from './index.js';

// test generateUniqueID()
const uniqueID = generateUniqueID("Alan", "Turing");
console.log(`TEST: Generated Unique ID with inputs (Alan, Turing): ${uniqueID}\n`);

// test addAccount()
const account1 = ["Alan", "Turing", "aturing@w3c.com", 58];
const account2 = ["Tim", "Berners-Lee", "tbernerslee@cern.com", 69];
const account3 = ["Ted", "Nelson", "ted.n@w3c.com", 43];
const account4 = [" ", "Dela Cruz", "jdelacruz01@gmail.com", 30];   // Invalid: empty first name
const account5 = ["Peter", "Hickman", "peterhickman.net", 37];      // Invalid: invalid email
const account6 = ["Bob", "Bobby", "xboxgamerpro@gmail.com", 12];    // Invalid: age less than 18

console.log("Adding account1:", addAccount(account1), "\n"); // Should return true
console.log("Adding account2:", addAccount(account2), "\n"); // Should return true
console.log("Adding account3:", addAccount(account3), "\n"); // Should return true
console.log("Adding account4:", addAccount(account4), "\n"); // Should return false
console.log("Adding account5:", addAccount(account5), "\n"); // Should return false
console.log("Adding account6:", addAccount(account6), "\n"); // Should return false