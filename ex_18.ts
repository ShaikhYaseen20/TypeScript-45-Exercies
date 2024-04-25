/*Assignment Number 18.  Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has
changed. */

let myPlaces: string[] = ["Karachi", "Bahadurabad", "Multan", "Asam", "UAE", "Queta"]
//  console.log(myPlaces);

// Making a copy of an Array
let copyOfArry = myPlaces.slice()
let sortedArry = copyOfArry.sort();
//  console.log(sortedArry);

// Printing Original Array
//  console.log(myPlaces);

// Reversing Original Array
// First we make a copy of Original Array
let copyOfArry2 = myPlaces.slice()
let reverseOriArray = copyOfArry2.reverse()
console.log(reverseOriArray);

// Printing Original Array
 console.log(myPlaces);

//  reverse the order of Original Array
let reverseOriArray2 = myPlaces.reverse()
console.log(reverseOriArray2);

let againReverse = reverseOriArray2.reverse()
console.log(againReverse); // Same as Original Array

// Sorting Original Array
let sortOriArray = myPlaces.sort()
console.log(sortOriArray);

let reversesortedArray = sortOriArray.reverse()
console.log(reversesortedArray);