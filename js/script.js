// js alert
// alert("This is JavaScript Running from Js file!");
// console.log("This is an external JavaScript file.");

// js time
// let d = new Date();
// alert("Today's date is " + d);
// document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

// /////////////   Variable Declarations in JavaScript ,, var let const
// 1. var example
// var name = "John";
// console.log(name); // John
// var name = "John"; // Reassigned allowed in var variable
// console.log(name);
// var name = "Doe"; // Redeclaration allowed  in var variable
// console.log(name); // Doe

// 2. let example
// let age = 25;
// console.log(age); // 25
// age = 30; // Allowed (can be reassigned)
// console.log(age); // 30
// let age = 35; // ❌ Error: Cannot redeclare 'age'

// 3. const example
// const PI = 3.1416;
// console.log(PI); // 3.1416
// PI = 3.15; // ❌ Error: Assignment to constant variable

// variable Hoisted in JavaScript
// this topic is hold

//  ///////////  Naming Rules for JavaScript Variables
// 1. JavaScript variables are case sensitive.
// 2. JavaScript variable names must start with a letter, underscore (_), or dollar sign ($).
// 3. JavaScript variable names cannot start with a number.
// 4. JavaScript variable names can contain letters, numbers, underscores, and dollar signs.
// 5. JavaScript variable names cannot contain spaces or hyphens (-).
// 6. JavaScript variable names should be descriptive and meaningful.
// 7. JavaScript variable names should be in camelCase.
// 8. JavaScript variable names should not be reserved keywords.

// case sensitive
// var name = "rishi Wieruch";
// var Name = "Dennis Wieruch";
// var NAME = "Thomas Wieruch";
// console.log(name); // "rishi Wieruch"
// console.log(Name); // "Dennis Wieruch"
// console.log(NAME); // "Thomas Wieruch"

// javaScript variable should be self-descriptive
// var value = "rishi"; // bad
// var val = "rishi"; // bad
// var firstName = "rishi"; // good

// JavaScript variables declared with a camelCase variable name with a leading lowercase character:
// var firstname = "rishi"; // bad
// var first_name = "rishi"; // bad
// var FIRSTNAME = "rishi"; // bad
// var FIRST_NAME = "rishi"; // bad
// var firstName = "rishi"; // good
// ///////
// let secoundName = "rishi";
// function getUsername() {
//     return "abhishek";
// }
// console.log(getUsername());
// console.log(secoundName);
///////
// class Person {}
// let user = new Person();
// console.log(user);
///////
// const MAX_LIMIT = 100; // good
// console.log(MAX_LIMIT);
///////
// let count = 10;  // Good
// let c = 10;      // Bad
// console.log(count);

// scope  , block  
// {let r = 2 }
//  console.log(r); // r can not be used here 

// ********========  VARIABLE SCOPE   ============***************** //

// 1. Global Scope
// A variable declared outside any function or block is in the global scope.
// It can be accessed anywhere in the script.

// let globalVar = "I'm global";
// function showGlobal() {
//   console.log(globalVar); // Accessible inside the function
// }
// showGlobal();
// console.log(globalVar); // Accessible outside the function too
// console.log(showGlobal);

// 2. Function scope
// Variables declared inside a function using var, let, or const are only accessible within that function.

// Example 1
// function showLocal() {
//   let localVar = "I'm local";
//   console.log(localVar); // Accessible inside the function
// }
// showLocal();
// console.log(localVar);  // Error: localVar is not defined

// Example 2
// function localScopeExample() {
//   // Local variable declared inside the function
//   let localVar = "I am local";
//   console.log("Inside function:", localVar);
// }
// localScopeExample();
// Trying to access the local variable outside its function
// This will result in a ReferenceError because localVar is not defined outside the function
// console.log("Outside function:", typeof localVar); // 'undefined'

// 3. Block Scope (let and const)
// Variables declared inside a block {} using let or const are only accessible within that block.
// var does not have block scope, it gets hoisted to the nearest function/global scope.

// Example 1
// if (true) {
//   let blockVar = "I'm block-scoped";
//   console.log(blockVar); // Accessible inside the block
// }
// console.log(blockVar);  // Error: blockVar is not defined

// Example 2 
// if (true) {
//   // Block-scoped variable using let
//   let blockLet = "I am block scoped with let";
//   // Block-scoped variable using const
//   const blockConst = "I am block scoped with const";

//   console.log("Inside block:", blockLet);
//   console.log("Inside block:", blockConst);
// }
// Attempting to access block-scoped variables outside the block
// Both of these will result in errors as the variables are not defined in this scope
// console.log("Outside block:", typeof blockLet); // 'undefined'
// console.log("Outside block:", typeof blockConst); // 'undefined'

// 4. Lexical Scope (Closures)
// Inner functions can access variables from their outer functions due to lexical scope.

// Example 1
// function outerFunction() {
//   let outerVar = "i'm outer";

//   function innerFunction() {
//     console.log(outerVar); // Inner function can access outerVar
//     console.log(innerFunction);
//     console.log(outerFunction);
//   }
//   innerFunction();
// }
// outerFunction();
// console.log(innerFunction); // Error:

// Example 2 
// function outerFunction() {
//     let outerVar = "I am outerside!";

//     function innerFunction() {
//         // innerFunction can access outerVar due to lexical scoping
//         console.log("Accessing from inner function:", outerVar);
//     }
//     // Returning the inner function allows it to be used outside, while still keeping access to outerVar
//     return innerFunction;
// }
// const closureFunction = outerFunction();
// closureFunction(); // Logs: "Accessing from inner function: I am outside!"
// console.log(outerVar); // ❌ Error: outerVar is not defined

// Explanation:
// innerFunction() is inside outerFunction(), so it can access outerVar.
// But outerVar is not accessible outside outerFunction().


// ********========  DATA TYPE   ============***************** //

// 1. Preminitive
// let num = 42; // Number
// let str = "Hello, World!"; // String
// let isJavaScriptFun = true; // Boolean
// let notAssigned; // Undefined
// let emptyValue = null; // Null
// let uniqueId = Symbol('id'); // Symbol
// let bigNumber = 1234567890123456789n; // BigInt

// Number data type Example 
// let num1 = 255; // integer
// let num2 = 255.0; // floating-point number with no fractional part
// let num3 = 0xff; // hexadecimal notation
// let num4 = 0b11111111; // binary notation
// let num5 = 0.255e3; // exponential notation
// console.log(num1 === num2); // true
// console.log(num1 === num3); // true
// console.log(num1 === num4); // true
// console.log(num1 === num5); // true

// 2. Non-Primitive
// let person = { name: "rishi", age: 23 }; // Object
// console.log(person.name);
// let numbers = [10, 20, 30, 40]; // Array
// console.log(numbers[0]);
// function sayHello() { 
//     console.log("Hello! Rishi"); 
// } // Function
// console.log(sayHello, typeof sayHello);

// Example: Copying Differences
// Primitive (copying creates a new value)
// let a = 10;
// let b = a; // Copying the value
// b = 20;
// console.log(a, typeof a); // Output: 10

// Non-Primitive (copying references the same object)
// let object1 = { name: "rishi"};
// let object2 = object1; // copying the reference
// object2.name = "Doe";
// console.log(object1.name); // Output: "Doe" (both refer to the same object)

// let object1 = { name: "Rishi", details: { age: 30 } };
// let object2 = Object.assign({}, object1);
// object2.details.age = 31;
// console.log(object1.details.age); // Output: 31

// let object1 = { name: "Rishi", details: { age: 30 } };
// let object2 = JSON.parse(JSON.stringify(object1));
// object2.details.age = 31;
// console.log(object1.details.age); // Output: 30

// ********========  typeof operator    ============***************** //
// console.log(typeof 100);          // "number"
// console.log(typeof "JavaScript"); // "string"
// console.log(typeof true);         // "boolean"
// console.log(typeof undefined);    // "undefined"
// console.log(typeof null);         // "object"
// console.log(typeof {});           // "object"
// console.log(typeof []);           // "object"
// console.log(typeof function(){}); // "function"

// ********========  OBJECT   ============***************** //

// ,, You can create objects in several ways:
// 1. Using Object Literal {}
// const people = {
//   name: "shiva", 
//   age: 23,
//   isStudent: false
// };
// console.log(people.name);

// 2. Using the new Object() Constructor
// const people = new Object();
// people.name ="shiva";
// people.age = 23;
// people.isStudent = false;
// console.log(people.isStudent); 

// 3. Using a Constructor Function
// function People(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const people1 = new People("Rishi", 25);
// const people2 = new People("Abhi", 30);
// console.log(people1.name); // Output: "Rishi"
// console.log(people2.name); // Output: "Abhi"    // use for create multiple objects

// 4. Using Class Syntax (ES6)
// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const people2 = new People("shiva", 24);
// console.log(people2.name);

// Accessing Object Properties     --  You can access properties using dot notation or bracket notation. 
// const car = { brand: "Mahindra", model: "Mahindra Evs-6" };
// console.log(car.brand);     // Dot notation -> "Mahindra"
// console.log(car["model"]);  // Bracket notation -> "Evs-6"

// Adding and Updating Properties
// const userData = { name: "Rishi" };
// userData.age = 23; // Adding a new property
// userData.name = "Rishi Kant"; // Updating an existing property
// console.log(userData); // { name: "Rishi Kant", age: 23 }

// Deleting a Property
// delete userData.age;
// console.log(userData); // { name: "Rishi Kant" }

// Checking If a Property Exists
// console.log("name" in userData); // true 
// console.log("email" in userData); // false

// Looping Through Object Properties
// 1. for...in loop
// const bookDetails = { title: "JS Guide Book", author: "Abhishek Pal", year: 2025, writer: "Rishikant Savita" };
// for (let key in bookDetails) {
//   console.log(`${key}: ${bookDetails[key]}`);
// }
// 2. Object.keys() - Get an array of keys
// console.log(Object.keys(bookDetails)); // ["title", "author", "year", "writer"]
// 3. Object.values() - Get an array of values
// console.log(Object.values(bookDetails)); // ["JS Guide Book", "Abhishek Pal", 2025, "Rishikant Savita"]
// 4. Object.entries() - Get an array of key-value pairs
// console.log(Object.entries(bookDetails)); // [["title", "JS Guide Book"], ["author", "Abhishek Pal"], ["year", 2025], ["writer", "Rishikant Savita"]]


// ********========  BUILT IN OBJECTS   ============***************** //
// 1. Math Object
// console.log(Math.PI);  // 3.141592653589793
// console.log(Math.sqrt(16));  // 4
// console.log(Math.round(4.7));  // 5
// console.log(Math.floor(4.9));  // 4
// console.log(Math.ceil(4.1));  // 5
// console.log(Math.random());  // Random number between 0 and 1
// console.log(Math.pow(2, 3));  // 8 (2^3) // 8 (2³)
// console.log(2 ** 3);  // 8 (2³)  Modern Method 
// console.log(Math.pow(3, 0));   // 1 (कोई भी संख्या की घातांक 0 हो तो परिणाम 1 होता है)
// console.log(Math.pow(7, -2));  // 0.0204 (1 / 7²)
// console.log(Math.floor(Math.random() * 10) + 1);
// let min = 50; let max = 100;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// 2. String Object
// let text = "Hello!, Rishi JavaScript!"
// console.log(text.length); //25 
// console.log(text.toUpperCase()); // HELLO!, RISHI JAVASCRIPT!
// console.log(text.toLowerCase()); // hello!, rishi javascript!
// console.log(text.indexOf("JavaScript")); // 14
// console.log(text.includes("JavaScript")); //  check content is available or not thhen true ya false  
// console.log(text.substring(0, 13)); // Hello!, Rishi  content print length
// console.log(text.replace("JavaScript", "World")); // Hello!, Rishi World! ,, use for replace text 
// console.log(text.lastIndexOf("JavaScript")); // 14 ,, word is not find than print -1 

// 3. Number Object
// let num = 123.456;
// console.log(num.toFixed(2));  // "123.46"  ✔ toFixed(n) किसी संख्या को n दशमलव स्थानों तक सीमित कर देता है। // ✔ अगला अंक 5 या उससे बड़ा होने पर राउंड अप (Round Up) कर देता है। // ✔ अगला अंक 4 या उससे छोटा होने पर राउंड डाउन (Round Down) करता है।
// console.log(num.toPrecision(4));  // "123.5" राउंडिंग अप या डाउन (rounding) भी कर सकता है।
// console.log(Number.isInteger(42));  // true    सिर्फ यह चेक करता है कि वैल्यू एक पूर्णांक है या नहीं।
// console.log(Number.parseInt("10.5px"));  // 10   स्ट्रिंग या फ्लोटिंग-पॉइंट नंबर को पूर्णांक में बदल देता है।
// console.log(Number.parseFloat("10.5px"));  // 10.5
// console.log(Number.parseFloat("5px10"));      // 5   ("px" के बाद वाले नंबर को इग्नोर किया जाता है)
// console.log(Number.parseFloat("abc123"));     // NaN (शुरुआत में कोई नंबर नहीं)
// console.log(Number.parseFloat("  20.99  "));  // 20.99 (स्पेस को इग्नोर किया जाता है)




