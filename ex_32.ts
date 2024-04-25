/*Assiggnment Number 32.  Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in
the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message
that the person will need to enter a new username. If a username has not been used, print a message saying that
the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let current_users = ["Aliyan", "Hamza", "YasEen", "admin", "Ali", "Tariq", "Ebad"]

let new_users = ["Abdullah", "Ahmed", "Yaseen", "Admin", "Subhan"]

// we will use for each method
new_users.forEach(new_users =>{
let new_userLower = new_users.toLowerCase();

// we will use some() method
let userNameTaken = current_users.some(current_users => 
    current_users.toLowerCase() === new_userLower);  //true Or false

// Now we will apply conditions

if(userNameTaken){
    console.log(`${new_users} need to choose a new usernames because it's already taken`)
}else{
    console.log(`${new_users} is the new member Added`)
    current_users.push(new_users) // Add new user to current users Array
}

})

console.log(current_users);