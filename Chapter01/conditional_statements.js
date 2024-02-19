            //   CONDITIONAL STATEMENTS

// 1. IF statement, if true do it if false skip it 


// let color;
// let mode;
// if (mode == "dark-mode"){
//     color = "black" ;
// }


// 2. if-else statements, if one is true execute that otherwise go-to else 

let mode = "Dark-mode";
let colors;
if ( mode == "Dark-mode"){
    colors = "black";
}
else{
    colors = "white";
}

console.log(colors); // this will give us the value black

// Checking even or odd number 

let a = 4 ;
a+=1;

if ( a%2 === 0){
    console.log("Even Number");
}
else{console.log("Odd Number");}

console.log(a); // 5 

// 3. else-if statements 
let Mode;
let Color;
Mode = "Brown"
if ( Mode === "Dark")
{Color= "Black";}
else if( Mode === "Light") 
{ Color = "Light";}
else {Color= "Blue";}

console.log(Color);

