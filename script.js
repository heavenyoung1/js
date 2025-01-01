let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

let strToBool = "false";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let strToBool2 = "";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let nr1 = 200;
let nr2 = "2";
console.log(nr1 + nr2);
console.log(nr1 + Number(nr2));

let str1 = "Laurence";
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(
    typeof str1,
    typeof str2,
    typeof val1,
    typeof val2,
    typeof myNum,
);

let myName = "Evgeny";
let age = "25";
let yesOrNot = true;
console.log("Hello, my name is " + myName + " I am " + age + " years " + "and I can code JS: " + yesOrNot);

let result1 = nr1 - Number(nr2);
let result2 = str1 - nr1;
console.log(result1, result2);

let result3 = nr1 * Number(nr2);
let result4 = nr1 * str1;
console.log(result3, result4); 

let result5 = nr1 / Number(nr2);
console.log(result5);

let quadro = nr1 ** Number(nr2);
console.log(quadro);

let x = 10;
let y = 3
let balance = x % y;
console.log(`${x} % ${y} = ${balance}`);


nr1++;
console.log(nr1);
nr1--;
console.log(nr1);

let q1 = 5;
let q2 = 6;
let q3 = 7;
console.log(q1++ + ++q2 * q3++);

// Гипотенуза прямоугольного треугольника

// let a = window.prompt("Please, input cathetus a");
// let b = window.prompt("Please, input cathetus b");
// let cQuadro = a * a + b * b;
// let c = cQuadro ** 0.5;
// console.log(c);
// alert(`Hypotenyse = ${c}`);

let a = 5;
let b = 6;
let c = 7;
a += b;
a /= c;
c = c % b;
console.log(a, b ,c);




