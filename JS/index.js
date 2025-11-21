console.log("HELLO ");  // to print u can use " " or ` ` 
console.log(`Hiiiiiiiiiii   `);  // this will be printed in console
console.log(" THIS IS MY FIRST JS FILE");
  // window.alert("HI FROM AS");  // to give alert popup on screen
// single line comment
/* Multi Line Comment */ 
/* 
---------------------------------------------------------------------------------------------------------------------
JS - frontend runs on browser
Node JS - (USED TO RUN JS IN ANY ENVIRONMENT) js Runtime Environment to handle all the network files on the other server  (backend)
Node.js = a program that runs JavaScript outside the browser.
✔ Node.js cannot work alone.
It ONLY works because it can run JavaScript.
✔ If JavaScript didn’t exist, Node.js would have no purpose.
Node.js = Engine
JavaScript = Fuel
Without fuel, the engine is useless.
----------------------------------------------------------------------------------------------------------------------------------------
What is React.js?
React.js is a FRONTEND JavaScript library used to build user interfaces (UI).
React helps you build:
Websites
Web apps
Dashboards
Single Page Applications (SPA)
It was created by Facebook (Meta).
Or HTML + CSS + React (JS library)*/
document.getElementById("a").textContent = `HELLO THIS IS h1 HEADING LINE`; // CREATE A TAG In HTML and give ID and .textContent give the text what u want.
document.getElementById("b").textContent = `HELLO THIS IS A PARAGRAPH`;
document.getElementById("b"); // this will print the context which is there in the html file in page not in console

console.log("JAVASCRIPT ");   
let x ; //  1.declare
x=100; //   2.assign 
let y = 100; // declare & assign 
let a =100;
let b =90.24;
console.log(a) ;  // printing
console.log(`you are ${a} years old`)  ; // to print using text
console.log(`your marks is ${b} `)  ;  
console.log(typeof a) // prints the datatype
// string datatype
let name= "AS" ; 
console.log(` my name is ${name}`) ;
console.log(typeof name);
// boolean datatype  (true or false)
let onine = true ;  
console.log(` Bro is online ${onine}`) ;
console.log(typeof onine);

console.log("......JAVASCRIPT...... ");  // EXAMPLE  
 let name = "aryan" ;
 let age = 19 ;
 let isStudent = false ;
document.getElementById("a").textContent = ` My Name is   ${name} `;  // adding paragraph and displaying in console
document.getElementById("b").textContent = age ;    //  To print the names use ` ` and for the value/ variable use ${}
document.getElementById("c").textContent =isStudent ; // prints in the main screen. not in console
document.getElementById("d") ;   
// variables ,operators , operand usage od data and specifications
// operands (1,20,33,35) operator + , -, * , / , ** , %
let sa= 30; // to change the values using operator.........
let s=10;
s=s+1;  // addition
s=s-1;   //subtraction
s=s*1 ;  // multiplication
s=s / 1;  // division
s=s**2 // exponents
s=s%2 ;
sa += 2; // or u can directly assign witout taking the name of the variable 
console.log(sa);
 // direct operand
sa += 2;    
sa -= 2;    
sa *= 2;    
sa /= 2;  
  /* EXAMPLE PROBLEMs
let a = 50;
let b = 10;
let c = 2;
let sa = a + b * c - (a / c) ** 2;
// Order of operations:
// Operations are performed in the following order: 
// 1. parenthesis ()
// 2. exponentiation * **
// 3. multiplication and division (from left to right)
// 4. addition and subtraction (from left to right)

console.log(sa);
// Expected output: -555.0
*/


// example of inputs 
//1.
let name ;
name= window.prompt(" ENTER YOUR NAME");
console.log(name);  // goes to dev tools or console
 
//2.
let name ;
document.getElementById("sub").onclick = function(){
    name=document.getElementById("aa").value; // prints in  the main screen focus on where things print either on console or the main screem.
    document.getElementById("d").textContent = ` HELLO  ${name}`;
}
 // take name and print it down

// TYPE CONVERSION (one data type to other data type)
let age ;
age=window.prompt("HOW OLD ARE U??"); // pop up style of taking input
a=Number(age);  // type converting
console.log(`STRING : ${age} `);    // string
console.log( typeof age); // returns string

console.log(`NUMBER : ${a} `);    //Number
console.log(typeof a);   // Returns Number

let age ='';
a=Boolean(age);  // type converting
console.log(a);

// input is always string
// string to num ====== NaN
//string to boolean ===== returns true
// number 0 to boolean is true
// "" returns false if empty

  

/*
let age ;   // not assigned
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //  false
console.log(aa);  //  NaN
console.log(aaa);// undefined
 
  // --------------------------------
let age= 0 ;    assigned number
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //  false
console.log(aa);  //  0
console.log(aaa);// 0
// --------------------------------
  
let age= 1 ;     
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //   true
console.log(aa);  // 1
console.log(aaa);  //  1
 // --------------------------------
let age= "0" ;  // value inside string 
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //   true
console.log(aa);  //  0
console.log(aaa);// 0

// --------------------------------
let age= "apple" ;    // string
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //   true
console.log(aa);  //  NaN
console.log(aaa);// apple
// --------------------------------
 let age=  true ;   // boolean
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //  true 
console.log(aa);  //  1
console.log(aaa);//  true
// --------------------------------
let age=   false ;  // false
a=Boolean(age);     
aa=Number(age);   
aaa=String(age);   
console.log(a);  //   false
console.log(aa);  //  1
console.log(aaa);//  false

*/

// const = variable that cant be changed
// capitalize only for primitive (NUMBER AND BOOLEAN)
const PI = 3.142857;
let PI =3.14 ;   // a.js:9 Uncaught ReferenceError: pi is not defined
let radius;
let circumference;
radius=window.prompt("Enter The Radius");
r =Number(radius);
circumference = 2 * r * pi ;
console.log(circumference);








 



