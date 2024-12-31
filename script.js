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
