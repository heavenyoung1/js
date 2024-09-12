
var strInput = "javascript is awesome";
var strOutput = "";
for (var i = 0; i < strInput.length; i++) {
    if  (strInput[i] == "a") {
        strOutput += "4";
    }
    else if  (strInput[i] == "e") {
        strOutput += "3";
    }
    else if  (strInput[i] == "i") {
        strOutput += "1";
    }
    else if  (strInput[i] == "o") {
        strOutput += "0";
    }
    else {
        strOutput += strInput[i];

    }
}
console.log(strOutput);