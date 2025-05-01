[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/TP0ZkiLb)

# Exercise 04 - JavaScript Basics 2

## Student Description

**Name:** Eunel Jacob C. Joyosa

**Degree Program:** BS Computer Science

**Section:** C-1L

## Things you did in your code
These are the functions that I have implemented in my code:
### **generateUniqueID()**
- Firstly, it checks whether there are missing parameters when `generateUniqueID()` function is invoked.
- Then, after passing the check it does the following:
    - Gets the first name initial and converts its to lower case.
    - Convert last name to lower case and removes spaces (if there are any).
    - Gets the first 8 characters of the randomly generated alphanumeric UUID (hyphens removed). This uses the [uuid NPM package](https://www.npmjs.com/package/uuid).
- After all of that it returns a string of the generated UID that follows this example's format: *jdelacruze0d2eb45*

### **addAccount()**
- First off, it checks whether there are missing parameters from any of the fields of the function
- Then, after passing that check, it does the following:
    - Check if the first name, last name, and email fields are non-empty strings.
    - Check whether the email is valid using [validator NPM package](https://www.npmjs.com/package/validator).
    - Check if age is of type number and at least 18 years of age.
- Next, after passing all those conditions, the uniqueID is created by invoking the `generateUniqueID()` function.
- Following that, it saves the data into a new line of file called `users.txt` in the following format:
    - *firstname,lastname,email,age,uniqueID*
- Finally, it returns `true` whether the user was successfully saved. Else, it returns `false`.

## Key Takeaways from the Exercise
Creating this exercise was very fun and it thought me how to use essential NPM packages such as the uuid and validator packages. Now with this newly acquired knowledge on how to implement password and information validation, it would really help me in the near future with other following exercises in JavaScript and in Web Programming.

## References
- https://nodejs.org/api/fs.html#fsappendfilesyncpath-data-options
- https://www.npmjs.com/package/uuid
- https://www.npmjs.com/package/validator
- https://www.w3schools.com/jsref/jsref_replace.asp
- https://stackoverflow.com/questions/31725745/how-to-shorten-uuid-v4-without-making-it-non-unique-guessable 