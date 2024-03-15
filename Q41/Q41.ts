//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_Magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}
const magiciansNames: string[] = ['Rubab', 'Imama', 'Haya'];
show_Magicians(magiciansNames);