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

let nr1 = 2;
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
