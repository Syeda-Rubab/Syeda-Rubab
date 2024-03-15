//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

var guestlist: string[] = ["Ayesha", "Imama", "Khadija", "Alizay"];
// Ahmed can't join our dinner so remove this
const rglist = guestlist.indexOf("Ayesha");
guestlist.splice(rglist, 2);

// as we found new bigger table
// add guest in beggning of array
guestlist.unshift("Imama");
// add guest in middle of array
guestlist.splice(2, 0, "Durre");
// add new guest at the end of array
guestlist.push("Pareeshay");

for (var m = 0; m < guestlist.length; m++) {
    console.log(`Dear ${guestlist[m]}, 
    I would like to invitation for you to join me for dinner.
     Best Regards, 
     [Syeda Rubab]
    `)
}
