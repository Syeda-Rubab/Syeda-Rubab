"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
Object.defineProperty(exports, "__esModule", { value: true });
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let firstArray = ["Rubab", "Tanzila", "Fazila", "Sahifa", "Alizah"];
let secarray = ["Imama", "Haya", "Kashmala", "Liza", "Pareeshay"];
for (let newUser of secarray) {
    let isUserTaken = false;
    for (let currentUser of firstArray) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`The username ${newUser} is already taken. Please choose a different username.`);
            isUserTaken = true;
            break;
        }
    }
    if (!isUserTaken) {
        console.log(`The username ${newUser} is available.`);
    }
}
