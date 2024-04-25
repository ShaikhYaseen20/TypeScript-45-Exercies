let myName: string = "S.M Yaseen"
console.log(myName)

// Titlecase Print

console.log(`Titalcase: ${myName.replace(/\b\w/g,c=> c.toUpperCase())}`);

// uppercase Print

console.log(`Uppercase: ${myName.toUpperCase()}`);

//Lowercase Print

console.log(`lowercase: ${myName.toLowerCase()}`);
