//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestlist: string[] = ["Kaif", "Kashmala", "Haya", "Jihan"];
// Ahmed can't join our dinner so remove this
const rglist = guestlist.indexOf("Ahmed");
guestlist.splice(rglist, 2);
// Add new guest in our list
guestlist.push("Ayesha");

for (var k = 0; k < guestlist.length; k++) {
    console.log(`Dear ${guestlist[k]},
     I would like to invitation for you to join me for dinner.
     Best Regards, 
     [Syeda Rubab]
    ` )
}