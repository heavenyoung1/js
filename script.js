var headingElement = document.getElementById("main-heading");
console.log(headingElement.innerHTML);
var newHeadingText = prompt("Enter new Header");
headingElement.innerHTML = newHeadingText;

// function areArraySame(arrayA, arrayB) {
//     if (arrayA.length != arrayB.length) {
//         return false;    
//     } else if (arrayA.length === arrayB.length) {
//     for (var i = 0; i < arrayA.length; i++) {
//         for (var j = 0; j < arrayB.length; j++) {
//             console.log(" i " + arrayA[i])                
//             console.log(" j " + arrayB[j])
//             if (arrayA[i] !== arrayB[i]) {

//             }
//         }
//     }
//     }
// }

var arrayOne = ([1, 2, 3], [4, 5, 6]);
var arrayTwo = ([1, 2, 3], [4, 5, 6]);

function multiply(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}

// Короткая запись функции
function double(number) {
    return number * 2;
}

// Длинная запись функции
var doubleTiny = function (number) {
    return number * 2;
}

var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

var randomWords = ["Planet", "Bug", "Choice"];

var generateRandomInput = function () {
    var randomBodyPart = ["глаз", "нос", "череп"];
    var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
    var randomWords = ["муха", "выдра", "дубина", "мартышка", "какашка"];
    var randomString = "У тебя " + pickRandomWord(randomBodyPart) + ", словно " + pickRandomWord(randomWords) + "!!!";
    return randomString;
}

// var double = function (number) {
//     return 2 * number;
// };

// var drawCats = function (howManyTimes) { 
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// }

// var sayHelloTo = function (name) {
//     console.log("Привет, " + name + "!");
// };

// var outFirstFunction = function () {
//     console.log("Hello, World!");
// };

// var words = [
//     "программа",
//     "макака",
//     "прекрасный",
//     "оладушек"
// ]

// words.push("растение")

// var word = words[Math.floor(Math.random()) * words.length]

// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = word.length

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
//     var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
//     if (guess == null) {
//         break;
//     } else if (guess !== 1) {
//         alert("Пожалуйста, введите только одну букву!")
//     }
//     for (var j = 0; j < word.length; j++) {
//         if (word[j] == guess.toLowerCase) {
//             if (word[j] == guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово :" + word)


// var likeCats = confirm("Тебе нравятся кошки?");
// if (likeCats) {
//     console.log("Ты классная кошка");
// } else {
//     console.log("Так нельзя!")
// }

// alert("JavaScript это здорово!")
