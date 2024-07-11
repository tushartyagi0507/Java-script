console.log("Hello 2")



// console.log(x) // the x will be undefined until the assignment happens 
// hello(); // function will work here bcz they get memory even b4 the code is executed 

// var x = 10;
// console.log(y) // in case of let the elements are hoisted(and they are uninitialized) however they are in temproal dead zone until the assignment happens 
// this will throw error referenceError: cannot access the element before initializing the variable 

// let and const are hoisted means they get memory by JS env even before the code execution 
// let y = 20;
// function hello(){
//     console.log("hello")
// }

  
// CLOSURES 

// function x(){
//     let a = 7;
//     function y (){
//         // debugger  this will show you the closure in the scope tab 
//         console.log(a)
//     }
//     // y();
//     return y;
// }
// const z = x();    // x function will return y function 
// debugger

// z();   // once the x is executed it will not longed be in the call stack and it returned y as the funciton however 
// still it will print 7 as the returned funcito keeps its lexical scope even when the x is no longer in the call stack 


// Question 1 after 1 sec then 2 then 3 and so on 

// for(let i = 1;i < 6; i++)
//     {
//         setTimeout(() =>{
//         console.log(i)
//         }, i* 1000)
//     }

// in case of var i = ; it will not work bcx every setTImeout will be referring to same memory space by the time the timer is over the the i values will be 6 as the loop was continuosly working 

// fix with var => mindset => that we have to supply a new copy of i everytime to the setTimeout 

// for (var i = 1; i < 6; i ++){
//     function close (i) {
//     setTimeout(()=>{
//    console.log(i)
//     }, i * 1000)
//     }
//     close(i)
// }

// concept of data hiding using closure we wrapped the entinre coode in one funciton so that variable count cannot be accessed outside the function in the global scope and at the same itme since the return functio forms clorue 
// with the counter function so using the closure we can use count whenever we wish 

// function counter (){

//     var count = 0;
//     return function (){
//         count++; 
//         console.log(count)
//     }
// }
// let count1 = counter();
// count1();



            // Currying is also possibel because of closures only 

// function multiply (a,b,c){
//     return (a*b*c)
// }

// console.log(multiply(2,3,4))

// now we wish to make the funciton using the concept of function currying where we will only calculte the multiplicaiton when we all the three variables with us 

// function multiply(a)
// {
//     
// return function(b){
//         return function (c){
//             return a*b*c;
//         }
//     }
// }
// let result = multiply(2)(3)(4)  // this is calling the function wtih the right order 
// console.log(result) // this funciton call will only work when you supply all the three arguments this is possibel due to closure 

// lets take another example 

// const sendingEmail = (to)=> (subject) => (body)=> console.log(`Sending email to ${to} with the subject: ${subject} and this contains the message: ${body}`)

// const result = sendingEmail("tushartyagi@gmail.com")("New order")("There is a new order information for you with the id and all that")

// console.log(result)


// function name (firstName, lastName ){
// debugger
//  function fullName(){
//  console.log(firstName + " " + lastName)        // NOTE 
//  }
// }
// NOTE: so even before executing the first line of the function as soon as the function gets pushed in the call stck it assigns the argument to the parameters
// so in this case you can see with debugger that firstName = Tushar and lasName = Tyagi 
// name("Tushar", "Tyagi")


function myfunction(power){
return function (number){
    let i = 1
    while(i < (power-1)){
        number*=number
        i++;
    }
return number;
}
}
const cube = myfunction(3)
console.log(cube(4))
console.log(cube(3))