"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ["David Copperfield", "Harry Houdini", "Criss Angel"];
function showMagicians(magicians) {
    console.log(magicians.join("\n"));
}
function makeGreat(magicians) {
    return magicians.map((magician) => `${magician} the Great)`);
}
const magiciansCopy = [...magicians];
const greatMagicians = makeGreat(magiciansCopy);
console.log("Original magicians:");
showMagicians(magicians);
console.log("\nGreat magicians:");
showMagicians(greatMagicians);
