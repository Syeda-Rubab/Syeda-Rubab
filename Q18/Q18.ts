//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places:string[] = ["Italy", "Austria", "Newyork","turkey"];
// orginal order
 console.log("Original Order: " , places);
// Alphabatical order without modifying its orginal order:
let alphaplaces = places.sort();
console.log("Alphabatical Order: " ,alphaplaces );
//show that array is still on its orginal order:
alphaplaces.sort();
console.log("Still on its orginal order: ", places);
//print array in reserver alphabatic 
let resplaces = places.slice().sort().reverse();
console.log("Reverse Aphabatically Array: ", resplaces);
//show that array is still on its orginal places 
console.log("Array is still on its orginal: ", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed Order: ", places);

// Reverse the order of the list again
places.reverse();
console.log("Original Order: ", places);

// Sort the array in alphabetical order
places.sort();
console.log("Alphabetical Order: ", places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Reverse Alphabetical Order: ", places);