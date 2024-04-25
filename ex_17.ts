/*Assignment Number 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you
have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
have an empty list at the end of your program. */

const myFriends: string[] = ["Mohsin", "Ebad", "Subhan", "Ahsan", "Anas", "Ammar"]
console.log(`Table is not available i can invited Only 2 person\n`)

// remove all four last Elements

let friend1 = myFriends.pop()
console.log(`Sorry Mr. ${friend1} you are not Invited`)
let friend2 = myFriends.pop()
console.log(`Sorry Mr. ${friend2} you are not Invited`)
let friend3 = myFriends.pop()
console.log(`Sorry Mr. ${friend3} you are not Invited`)
let friend4 = myFriends.pop()
console.log(`Sorry Mr. ${friend4} you are not Invited\n`)

for(let i = 0; i < myFriends.length; i++){
    console.log(` Mr. ${myFriends[i]} you are invited to my dinner`);
}
