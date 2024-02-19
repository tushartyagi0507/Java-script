name = "Tony Stark";
// console.log(name);

// JS is dynamically typed language that means you do not have to define the type of value you are going to
// save in that variable, lets check the below example : we used name to save the string value but check..

name = 25;
console.log(name); // this will give 25 as the output

// Rules for variables
// 1. Variable names are case sensitive
// 2. Only letters, digits, and _ and $ is allowed ( not even space is allowed)
// 3. only a letter, _ or $ should be first character
// 4. Reserved words cannot be variable names

// The best practice which we will follow is first letter small then first letter of the second word capital
//  example

fullName = "Tushar Tyagi";
console.log(fullName);
console.log(typeof fullName); // output > string

// we have three types of declaring the variables :
// 1. var  (we do not use it anymore since you can redeclare the variable again )
// 2. let  (you can only declare the variable once however the scope is not gloabal and local only)
// 3. const ( we use it when we are not going to change the value of the variable, scope isn't global)

// Issue with the var

var a = 25;
var a = 26;
console.log(a);
// I will get 26 but the thing is we can redeclare the variable which should not be allowed

// local(blocked) scope of let and const

let b = 25;
// let b = 26;  this is not possible we can only declare the variable once however we can change the value

{
  b = 26;
  console.log(b);
}

{
  let b = 27;
  console.log(b);
}
// we were able to declare the variable b again since the scope is blocked(local) and not global

// Note: when u r declaring a variable using const you need to give it a value else there will be error
// while you can declare a variable using let and do not assign value to it that would print 'undefined'

// WHAT ARE DATATYPES :

// type 1: Primitive datatypes
//   number, string, undefined, boolean, Null, BigInt, symbol (last two we do not use that much)
// null means absent of an object and if you check its datatype that would be 'object'

/* undefined means a variable has been declared but has not yet been assigned a value 
       null is an assignment value. It can be assigned to a variable as a representation of no value 

Important results  let a = null;
                   console.log(a)   > output is null 
                   console.log(typeof a )  > output is object 

                let b;
                console.log(b)   > output is undefined
                console.log(typeof a )  > output is undefined only              
                
console.log(null === undefined) // false (not the same type)
console.log(null == undefined) // true (but the "same value")        
                */

// type 2: Non-primitive datatypes
//  Object: it is a collection of multiple primitive datatypes
//  we use it in (key: value) pair format
// example:

const student = {
  fullName: "Tushar Tyagi",
  age: 23,
  cgpa: 8.2,
  isPass: true,
};

console.log(student);

// if you want any specific key values ( key is like fullName, age, cgpa) then  you have two options :
// 1. obj.key
// 2. obj["key"] 
    /* very important that you give the key you wish to print or access in "" else there could be two 
    sceanrios :
    If you try to access an object property without using quotes around the key, JavaScript will interpret the key as a variable name instead of a literal string. This leads to two potential outcomes:

1. Reference Error:

If there's no variable named fullName in your code, you'll get a ReferenceError because JavaScript can't 
find a variable with that name.
JavaScript
// Assuming no variable named "fullName" exists:
console.log(student[fullName]); // ReferenceError: fullName is not defined
Use code with caution. Learn more

2. Unexpected Value:
If there is a variable named fullName in your code, JavaScript will use its value as the key to access 
the object property. This can lead to unexpected results if the variable's value doesn't match the actual 
property name.
JavaScript
const fullName = "anotherProperty"; // Variable with a different name
console.log(student[fullName]); // Will try to access student.anotherProperty
Use code with caution. Learn more
Correct Way:

To correctly access object properties, always enclose the key in quotes to ensure it's treated as a 
literal string, even if it doesn't contain spaces or special characters:
JavaScript
console.log(student["fullName"]); // Correct: Accesses student.fullName */


// example of accessing the key of the object using .
console.log(student.age);  // you can also change the value of the key in the object
// example:

student.age = student.age + 1;
console.log(student.age);

/* NOTE: Now we used const to declare the object student but still we are able to make changes it its keys
 that is possible we can the object's key value however if we try to change all the key values of all 
 object then it would throw us the error */


 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Changing existing properties:
  person.firstName = "Jane";
  person.age = 35;
  person["lastName"] = "Dove";
  
  // Adding new properties:
  person.city = "New York";
  person["hobbies"] = ["reading", "coding"];
  
  console.log(person);
  // output > {firstName: 'Jane', lastName: 'Dove', age: 35, city: 'New York', hobbies: Array(2)}
