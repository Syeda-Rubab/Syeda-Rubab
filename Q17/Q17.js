"use strict";
//hrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestlist = ["Ayesha", "Imama", "Alizay", "Haya"];
console.log("Orgional list of guest: " + guestlist);
console.log("\nSorry, only two guest are invited:");
// guest remove at a time from array
while (guestlist.length > 2) {
    let guestRemove = guestlist.pop();
    console.log("\nSorry, " + guestRemove + "you can't be invited: ");
}
// invited list
for (var j = 0; j < guestlist.length; j++) {
    console.log("\nYou are still invited " + guestlist[j]);
}
