//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let gueslist: string[] = ["Kaif", "Salaar", "Mahir", "Jihan"];
for (var i = 0; i < gueslist.length; i++) {
    console.log(`Dear ${gueslist[i]}, 
    I would like to invitation for you to join me for dinner.
    Best Regards, 
    [Syeda Rubab]
    `);
}