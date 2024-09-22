
var randomWords = ["Planet", "Bug", "Choice"];

var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

var double = function (number) {
    return 2 * number;
};

var drawCats = function (howManyTimes) { 
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
}

var sayHelloTo = function (name) {
    console.log("Привет, " + name + "!");
};

var outFirstFunction = function () {
    console.log("Hello, World!");
};

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
