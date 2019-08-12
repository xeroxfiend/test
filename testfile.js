//number adder

console.log("number adder\n")

function addNumbers(a,b) {
    return a+b; 
}

console.log(addNumbers(1,2));
console.log(addNumbers(10,20));
console.log(addNumbers(74,120));

//loops

console.log("\nloops\n")

let myArray = []

for(let b = 0; b < 11; b++) {
    myArray.push(b)
}

//myArray.fill(1,0,11)

console.log("Array = ", myArray)

let newArray = myArray.slice(6,11)

console.log(myArray, newArray)

