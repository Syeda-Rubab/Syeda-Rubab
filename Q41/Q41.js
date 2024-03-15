"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_Magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
const magiciansNames = ['Rubab', 'Imama', 'Haya'];
show_Magicians(magiciansNames);
