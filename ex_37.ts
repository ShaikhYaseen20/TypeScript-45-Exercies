/*Assignment Number 37.  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a
different message.  */

// Making Large as Default
// function make_shirt(lable: string, size: string = "Large"){

    // MAking Medium as Default
//  function make_shirt(lable: string, size: string = "Medium"){

    // Making shirt of any size
 function make_shirt(lable: string, size: string){
    
    return size + lable
    
}

let myFunction = make_shirt(" Any size"," I Love TypeSccript")
// how to print on console
console.log(myFunction);