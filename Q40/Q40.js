"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "Dark Side of the Moon", 10);
const album3 = make_album("Led Zeppelin", "IV", 8);
console.log(album1);
console.log(album2);
console.log(album3);
