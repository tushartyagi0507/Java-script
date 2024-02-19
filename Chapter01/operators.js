// we have four airthmetic operators : +, -, /, * 

let a= 5;
let b= 6;
let c = a+b;
// however I think this is not a good way to print the sum as here c would take its own space in the memory

console.log("a + b = ", c);
// better apporach
console.log("a + b = ", a+b);

/* Other operators are : % ( this gives the remainder ), exponentiation ( n times *) ( depeniding on how
many times you want to exponent the base) and then we have two unary operators ( that means they only need 
one operand ) like increment and decrement which are ++, --     */

console.log("Increment on a = ", ++a);
// this will give us 5+1 = 6

// a++ > this is post increment that means first the value will be printed and then increment will happen
// ++a > this is pre increment that means first the increment will happend and then new value will be printed


//  ASSIGNMENT OPERATORS *****
// first we have seen "=" already it helps us to give the value of right to the left a = 5
// second is "+=" which is say a +=4 ( a = a+4)

// Imp: all the operators can be used with the combination of = and this would be similar to += 

    // COMPARISON OPERTATORS 

    // 1. == ( to compare the two values and the result of this operator would be Boolean either true or false)
    // 2. != ( this is not equal to so say 5 !=2, try to print it again it would be Boolean as true)
    // 3. === ( this not only checks the value but also checks the datatype so this very strict comparison)
    //  example:

    let x =5;
    let y = "5";  // now we know this is string but still if we try to compare it like below 
console.log("x==y", x == y);
//  we got true why bcz JS would convert this string to number first and then compare which is true
// if we do not want that to happen then we can use our third operator which is === ( strict comparison)
// which means it will try to match the value as well as the type of the variable then gives either true or flase


console.log("x===y", x===y);

// 4. These are common as in Maths like >,<, >=, <= 

    // LOGICAL OPERATORS > this again gives a Boolean result eitther  True or False 
    //  1. Logical AND > && (for this to be true all the expression/values should be true)
    //  2. Logical OR > || ( for this to be true any of given expressions/values should be true)
    //  3. Logical NOT > ! ( changes the true value to false and vice-versa)


        //   TERNARY OPERATORS

        //  conditon ? true output : false output 

        let age = 19;
        let result = age>= 18 ? "can Vote" : "CANNOT vote";
        console.log(result);

    console.log(null == 0);


/*NOTES : == and != perform type conversion before comparison, while === and !== compare values and 
    types strictly. */
