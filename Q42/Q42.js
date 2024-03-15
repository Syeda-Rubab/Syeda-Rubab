"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    console.log(magicians);
}
const magicians = ['Naeem', 'Hussain', 'Faheem', 'Shahmeer', 'Shehzad', 'Irfan'];
make_great(magicians);
show_magicians(magicians);
