// "use strict"

console.log("hello")

// firstName = 1; 
// this will throw error because we are using module type and we have to use keyword to declare the variable 


// stirng useful methods 
// let firstName = "TusHar   "
// console.log(firstName.length)  // this would even include the spaces in the string 
// firstName = firstName.trim();  // this will remove all the extra spaces in the string and return a new string which you can save in the smae variable or a different one
// console.log(firstName.length)  // this will have only 6 as the output removing all the spaces 


// console.log(firstName.toLocaleLowerCase())
// console.log(firstName.toUpperCase())

// slice(start inddex, end index )  ==> end index is not included 

// console.log(firstName)
// console.log(firstName.slice(0,4))

// let i = 0
// let sum = 0 
// while(i <= 10){
//     sum = sum + i ;
//     i++
// }
// console.log(sum)

// for (let index = 0; index <=10 ; index++) {
 
//     if(index === 4) {
//         continue;
//     }
//     console.log(index)
//     sum = index
// }
// console.log(`the final value of the i is ${sum}`)

// Arrays 

// let arr = ["apple", "banana", "mango", "pear"]
// let [a,b, ...rest] = arr
// console.log(a,b)
// a = "litchi"
// console.log(a)
// console.log(arr)
// console.log(rest)

// arr.push("lemon")
// console.log(arr)

// arr.pop();
// console.log(arr)

// console.log(arr.shift())

// arr.unshift("Tomato")  // adding in front time consuming than push 
// console.log(arr)

// console.log(arr.length)

// for (let index = 0; index < arr.length; index++) {
//    console.log(arr[index])  
// }

// since the typeof arr is object and the typeof object is also object so we have 
// console.log(Array.isArray(arr))  // this will boolean whether array or not

// let obj = {
//     a: "apple",
//     b: "banana",
//     c: "cider"
// }
// console.log(obj)
// console.log(Array.from(obj)) // did not get the elements in the desired order
// console.log(Array.isArray(obj))

// we know that the array gets memory in heap so we get referece to the array 
// in case of pirmitive datatype, the variable get memory in stack and new variable gets created we only get the copy of the older variable and not the actual address 


// HOW CAN WE COPY THE ARRAY THEN IF WE DO  let array2 = array1 then they both are exactly same referring to the same address then how can you make the copy 

// let array1 = [1,2,3,4,5]

// let array2 = [].concat(array1)
// console.log(array1, array2)

// console.log(array1 === array2) // false that means they arrays are different that is what we wanted

// best approaches 
// 1. 
// let array3 = [...array1]  // spread operator 
// console.log(array1, array3)

// console.log(array1 === array3) 

//2,

// let array4 = array1.slice(0) // start index till the very end since we have not specified the end index so 
// console.log(array1)
// console.log(array4)

// console.log(array1 === array4) 

// you can also add some new items on top of making the clone of the array like 
// let array4 = array1.slice(0).concat([6,7,8])
// let array3 = [...array1, "item6", "item7"]
// let array2 = [].concat(array1, ['item8', 'item9])

// for of and for in loop 

const arr = ["apple", "banana", "mango", "pear"];
for (let fruit of arr ){ // for of loop iterates one by one on each element on the array 
    console.log(fruit);
}

for (let fruit in arr ) console.log(arr[fruit]) // for in loop give index 