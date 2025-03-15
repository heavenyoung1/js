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

// let myName = "Evgeny";
// let age = "25";
// let yesOrNot = true;
// console.log("Hello, my name is " + myName + " I am " + age + " years " + "and I can code JS: " + yesOrNot);

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

let l = 5;
let k = 6;
let g = 7;
// a += b;
// a /= c;
// c = c % b;
// console.log(a, b ,c);
// console.log("STOP IT!");

// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);

// console.log(a > b);
// console.log(a <= c);

console.log("STOP IT!");

console.log(l < k && k < g);
console.log(l < k || k < g);
console.log(!(l < k));

arr = new Array(10);
arr2 = [10, 11, "lol", null, undefined];

console.log(arr);
console.log(arr2);

const arr3 = ["hi there"];
arr3[0] = "new value";
console.log(arr3[0]);

arr3[0] = ["wefwefeffefwedwdws"];
console.log(arr3);

cars = ["Mercedes", "BMW", "VAG"];
cars[-1] = "Tesla";
console.log(cars[-1]);
console.log(cars);

console.log(cars.length);
lastElement = cars[cars.length - 1];
console.log(lastElement);
cars[10] = "Maybach";
console.log(cars);
console.log(cars.length);

// Практическое задание 3.1
goods= [
    "Milk",
    "Bread",
    "Apples",
];

console.log(goods.length);
goods[1] = "Bananas";
console.log(goods);

favoriteFruits = [
    "grapefruit",
    "orange",
    "lemon",
];

favoriteFruits.push("tangerine");
console.log(favoriteFruits);

let arrOfShapes = [
    "circle",
    "triangle",
    "rectangle",
    "pentagon",
];

arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.pop();

// Метод .pop для удаления последнего элемента
console.log(arr8);

// Метод .shift для удаления первого элемента
arr8.shift();
console.log(arr8);

// Удаление элементов методом .splice
arr8.splice(0, 2);
console.log(arr8);

// Метод .delete()
delete arr8[0];
console.log(arr8);

// Метод find
arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findValue = arr9.find(function(e) {return e === 6});
let findValue2 = arr9.find(e => e === 10);
console.log(findValue, findValue2);

let findIndex = arr9.indexOf(6);
let findIndex2 = arr9.indexOf(10);
console.log(arr9);
console.log(findIndex, findIndex2);
let findIndex3 = arr9.indexOf(3, 2);
console.log(findIndex3);

let animals = ["dog", "cat", "horse", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// Сортировка

let names = ["Alica", "Eugene", "Adam", "Larisa", "Jacob", "Edvard"];
console.log(names.sort());

let ages = [10, 12, 14, 20, 40, 1, 99];
console.log(ages.reverse());

// Практическое занятие 3.2

let buys = [];
console.log(buys);
buys.push("Milk", "Bread", "Apples", "Potato", "Fish", "Apelsine");
buys.splice(1, 1, "Bananas", "Eggs");
console.log(buys);
buys.pop();
console.log(buys);
buys.sort();
let inMilk =  buys.indexOf("Milk");
console.log(inMilk);
buys.splice(2, 0, "Carrots", "Letucce");
console.log(buys);
let buys2 = ["Juice", "Pop"];
let mainBuys = buys.concat(buys2);
let mainBuys2 = mainBuys.concat(buys2);
console.log(mainBuys2);
let lookingForPopForEnd = Number(mainBuys2.length) - Number(buys2.length);
let inPop = mainBuys2.indexOf("Pop", lookingForPopForEnd);
console.log(inPop);

// Многомерные массивы
let someValue1 = [1, 2, 3];
let someValue2 = [4, 5, 6];
let someValue3 = [7, 8, 9];

let arrofArrays = [someValue1, someValue2, someValue3];
console.log(arrofArrays);
let value1 = arrofArrays[0][0];
console.log(value1);

let arrOfArraysOfArrays = [arrofArrays, arrofArrays, arrofArrays];
console.log(arrOfArraysOfArrays);
let middleValue = arrOfArraysOfArrays[1][1][1];
console.log(middleValue);

// Практическое занятие 3.3

let someArr0 = [1, 2, 3];
let someArr = [someArr0, someArr0, someArr0];
console.log(someArr[1][1]);

// Объекты, кажется очень сильно напоминают словари в python
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "Chihuahua",
//     age: 3,
// }

// let dogColor = dog["color"];
// let dogName = dog.dogName;
// console.log(dogName, dogColor);

// dog["color"] = "blue";
// dog.age = 100;
// console.log(dog);
// dog.age = "one hundred";
// console.log(dog);

// let variableAgeOfDogs = "age";
// console.log(dog[variableAgeOfDogs]);
// console.log(dog["breed"]);

// Практическое занятие 3.4
let myCar = {
    made: 2000,
    model: "X",
    name: "Tesla",
    horsePower: 796,
    isElectro: true,
    color: "pink",
}

let color = "color"
myCar.color = "black";
console.log(myCar);

// Работа с объектами и массивами

let company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "improving kids health",
        "manufacturing toys",
    ],
    adress: [{
        street: "2nd streer",
        city: "Miami",
    },
    {
        street: "1st West Avenue",
        city: "Austin",
    }],
    yearOfEstablishment: 1945,
};

let streetFirstName = company.adress[0].street;
console.log(streetFirstName);

// Практическое занятие 3.5
let people = {
    friends: [],
};

friendOne = {
    firstName: "Elon",
    lastName: "Musk",
    ID: 1,
};

friendTwo = {
    firstName: "Homer",
    lastName: "Simpson",
    ID: 2,
};

friendThree = {
    firstName: "Elon",
    lastName: "Musk",
    ID: 1,
};

people.friends.push(friendOne, friendTwo, friendThree);
console.log(people);

//Для самопроверки

let myArr = [1, 3, 5, 6, 8, 9, 15];
myArr.splice(1, 1, 4);
console.log(myArr);

const myArr2 = [];
myArr2[10] = "test";
console.log(myArr2);
console.log(myArr2[2]);

const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
myArr3.sort();
myArr3.length = 0;
console.log(myArr3[0]);

const myArr1 = [1, 3, 5, 6, 8, 9, 15];
console.log(myArr1.indexOf(0));

// Практическое занятие 4.1

let boolX = false;
console.log(boolX);
if (boolX) {
    console.log("Hi, Lol!");
} if (!boolX){
    console.log("Sorry, boyzzz!");
}
else {
    "Good Bye, buddy!";
}

// Практическое занятие 4.2

// let agePerson = prompt("Input your age!");
// let messageOne = String("");
// if (agePerson >= 21) {
//     messageOne = String("Buy Alchhol");
// } else if (agePerson >= 19) {
//     messageOne = String("Enter but no alchohol!");
// } else {
//     messageOne = String("NOT ENTER!");    
// }
// alert(messageOne);

// let age = prompt("Сколько вам лет?")
// let acess = age > 18 ? console.log("YES") : console.log("NO")

// Практическое занятие 4.3
// let ID = prompt("ВВЕДИ ID")
// let message = ID == 5 ? console.log("YES") : console.log("NO")

// Практическое занятие 4.4

// let randNum = Math.floor(Math.random() * 6);
// let userRequest = prompt("Введите вопрос");
// let msgFromRequest = "";
// switch (randNum) {
//     case 0:
//         msgFromRequest = "Answer 0"
//         break;
//     case 1:
//         msgFromRequest = "Answer 1"
//         break;
//     case 2:
//         msgFromRequest = "Answer 2"
//         break;
//     case 3:
//         msgFromRequest = "Answer 3"
//         break;
//     case 4:
//         msgFromRequest = "Answer 4"
//         break;
//     case 5:
//         msgFromRequest = "Answer 5"
//         break;
//     default:
//         msgFromRequest = "sorry bro(("
// }

// console.log(`Ты задал мне вопрос ${userRequest}, получил ответ - ${msgFromRequest}`);

// Практичесное занятие 4.5
// let prize = Number(prompt("Input number from 0 to 10."));
// let answ = "";


// switch (prize) {
//     case 0:
//     case 1:
//     case 2:
//         answ = `ТЫ молодец, выбрал эту цифру ${prize}`;
//         break;
//     case 3:
//     case 4:
//     case 5:
//         answ = `ТЫ  НЕ молодец, выбрал эту цифру ${prize}`;
//         break;
//     default:
//         answ = `Sorry bro, you selected ${prize}`;
//         break;
// }
// alert(answ);

// Вопрос для сампопроверки

let login = false;
let outputHolder = "";
let userOkay = login ? outputHolder = "logout" : outputHolder = "login";
console.log(userOkay);

let a1 = 5;
let b1 = 10;
let c1 = 20;
let d1 = 30;
console.log(a1 > b1 || b1 > a1);
console.log(a1 > b1 && b1 > a1);
console.log(d1 > b1 || b1 > a1);
console.log(d1 > b1 && b1 > a1);

// Практическое занятие 5.1

// let randomNum = Math.floor((Math.random()) * 5);
// let correct = false;

// let usrGuess = -1;

// while (correct == false){
//     usrGuess = prompt(`Введи число`)
//     if (usrGuess != randomNum) {
//         continue;
//     }
//     else if (usrGuess == randomNum) {
//         console.log(`Вы ввели ${usrGuess}. Число ${randomNum}`);
//         alert(`Вы ввели ${usrGuess}. Число ${randomNum}`);
//         correct = true;
//     }
// }

// Практическое занятие 5.2

// let count = 0;
// let step = 2;
// do {
//     count += step;
//     console.log(`Счётчик увеличен до ${count}.`);
// } while (count <= 99);

// Практическое занятие 5.3

let myWork = [];
let statusLesson;
let nameLesson;
let lessonAbs = {}

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        nameLesson = `Lesson ${i}`;
        statusLesson = Boolean(Math.floor(Math.random() * 2));
        lessonAbs = {name: nameLesson, status: statusLesson};
        myWork.push(lessonAbs);
    } else {
        nameLesson = `Lesson ${i}`;
        statusLesson = Boolean(Math.floor(Math.random() * 2));
        lessonAbs = {name: nameLesson, status: statusLesson};
        myWork.push(lessonAbs);
    }
}

// for (i = 0; i < myWork.length; i++) {
//     console.log(myWork[i]);
// }

// Практическое занятие 5.4

let myTable = [];
let line = 6;
let column = 6;
let tempArray = [];

for (let i = 0; i < column; i++) {
    tempArray.splice(0, tempArray.length);
    console.log(0);
    myTable.push(tempArray);
    for (let j = 0; j < line; j++) {
        console.log(0);     
        tempArray.push(j); 
    }
}

console.table(myTable);

// Практическое занятие 5.5

let grid = []
let cell = 64;
let counter = 0;
let row = [];

for (let i = 0; i < cell; i++) {
    row.push(counter)
    if ((i + 1) % 8 == 0) {
        if (row.length > 0) {
            grid.push(row);
        }
        row = [];
    }
    counter++;

}
if (row.length > 0) {
    grid.push(row);
}

console.log(grid);

// Практическое занятие 5.6

let emptyArray = [];

for (let i = 0; i < 10; i++) {
    emptyArray.push(i);
}

for (i of emptyArray) {
    console.log(i);
}

// Цикл for in

let car = {
    model: "Golf",
    make: "VAG",
    year: 1999,
    color: "black",
}

for (let prop in car) {
    console.log(car[prop]);
}

for (let prop in car) {
    console.log(prop);
}

// НА ЗАМЕТКУ
// Цикл for in - получает имена свойств (ключи), но не значения.
// Цикл for of - проучаеи значения свойств, но не ключи.

// Практическое занятие 5.7
let city = {
    naming: "Moscow",
    year: 1200,
    state: "Russia",
}

for (value in city) {
    console.log(city[value]);
}

for (key in city) {
    console.log(key);
}

// Цикл из объектов, преобразованных в массивы

// let arrKeys = Object.keys(car)
// console.log(arrKeys);

for (let key of Object.values(car)) {
    console.log(key)
}

let arrKeys = Object.keys(car);
for (let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

let  arrEntires = Object.entries(car);
console.log(arrEntires);

for (const [key, value] of Object.entries(car)) {
    console.log(key, ": ", value);
}

// Практическое занятие 5.8

// Цикл с break (остановка цикла)
let messageOutput = String();
let numberPass = 4;


for (let i = 0; i < 10; i++) {
    if (i == numberPass) {
        break;
    }
    console.log(i);
}

// Использование меток (labels)

let groups = [
    ["Martin", "Maria", "Alisa"],
    ["Anfisa", "Larisa", "Margot"],
    ["Jason", "Donald", "Barbara"]
]

outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith("M")) {
            console.log(`Найден один человек с буквы М: ${member}`);
            break outer;
        }
    }
}

// Практическое занятие 6.1

function concatNum(x, y) {
    console.log(x + y);
}

concatNum(100, 100);

// Практическое занятие 6.2

// function getDesc() {
//     namePerson = prompt("Чел, введи имя!")
//     nameArray = ["Тупой", "Умный", "славный", "Чумной", "Дурацкий"]
//     let indexName = Math.floor(Math.random() * 5);
//     console.log(`Ты - ${nameArray[indexName]}, индекс - ${indexName}`);
// }

// getDesc();

// Практическое занятие 6.3


function nameFunction(x, y, operator) {
    switch (operator) {
        case 0:
            console.log(x + y);
            break;
        case 1:
            console.log(x - y);
            break;
        case 2:
            console.log(x * y);
            break;
        default:
            console.log(x + y);
    }
}

nameFunction(3, 3);

// Функции с параметрами по умолчанию 
 
function addTwoNumbers(x = 2, y = 3) {
    console.log(x + y);
}

addTwoNumbers();

// Стрелочные функции

function doingStuff(x) {
    console.log(x);
}

let doingArrowStuff = x => console.log(x);
doingArrowStuff("Hello World!");

let addTwoNumbersArrow = (x, y) => console.log(x + y);
addTwoNumbersArrow(3, 100);

arrOfShapes.forEach(e => console.log(e));

// Оператор spread

let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

function addTwoNumbersFirst(x, y) {
    console.log(x + y);
}

let arr1 = [5, 9];
addTwoNumbersFirst(...arr1);

// Параметр rest

function someFunction(param1, ...param2) {
    console.log(param1, param2);
}

someFunction("Hi", "there", "How are you?");

// Возврат значений функций

function addTwoNumbersReturn(x, y) {
    return x + y;
}

console.log(addTwoNumbersReturn(4, 5));
let result = addTwoNumbersReturn(18, 44);
console.log(result);

// Практическое занятие 6.4

let arrToAdd = [];
let xFromLoop = 0;
let yFromLoop = 0;

function someFunctionToMultiply(x, y) {
    return (x + y);
}

for (let i = 0; i < 10; i++) {
    xFromLoop = i * 5;
    yFromLoop = i * i;
    someFunctionToMultiply(xFromLoop, yFromLoop);
    arrToAdd.push(someFunctionToMultiply(xFromLoop, yFromLoop));
}

console.log(arrToAdd);

// Возврат результата с помощью стрелочных функций

let addTwoNumberss = (x, y) => x + y;
let result6 = addTwoNumberss(12, 15);
console.log(result6);

// Область видимости переменных в функциях

function testAvilability (xx) {
    console.log(`Avaliable Here: ${xx}`);
}

// testAvilability("Hi");
// console.log(`Not avaliable here: ${xx}`);

// Сравнение переменных let и var

function doingStuff1() {
    if (true) {
        var xxx = "local";
    }
    console.log(xxx);
}

doingStuff1();

// function doingStuff2() {
//     if (true) {
//         let yyy = "local";
//     }
//     console.log(yyy);
// }

// doingStuff2();

function doingStuff3() {
    if (true) {
        console.log(x);
        var x = "local";
    }
}

doingStuff3();

// Область видимость константы такая же как и оператора let

// function doingStuff4() {
//     if (true) {
//         const X = "local";
//     }
//     console.log(X);
// }

// doingStuff4();

// IIFE - Immidiately Inviked Function Expression 
// По типу лямбла функций в питоне?

(function () {
    console.log("IIFE!");
})();

(() => {
    console.log("IIFE Invoked in Arrow");
})();

let iifeX = (function () {
    console.log("IIFE!");
})();

console.log(`This variable - ${iifeX}`);
// Оно к слову не работает

// Практическое занятие 6.5

let variableForIIFE = 1000;

(function() {
    let variableForIIFE = 2000;
    console.log(variableForIIFE);
}) ();

let resultIIFE = (function() {
    let variableForIIFE = 3000;
    console.log(variableForIIFE);
}) ();

let resultIIFE1 = (function(varing) {
    let variableForIIFE = varing
    console.log(`${variableForIIFE}, я вообще правильно понял задание??`)
}) ("Donald Trump");

// Рекурсивная функция

// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }

// getRecursive(3);

// Рекурсивная функция корректная

function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
}

getRecursive(3);

console.log("--------------------------")

// Практическое занятие 6.6 - Взятие факториала

function DoFactorial(amount) {
    if (amount == 0 || amount == 1) {
        return 1;
    }
    return amount * DoFactorial(amount - 1);
}

console.log(DoFactorial(4));

// Вложенные функции

// function DoOuterFunctionStuff(nr) {
//     console.log("Outher Function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }

// DoOuterFunctionStuff(3);

// Функция с ошибкой

// function DoOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log(`Недоступная переменная ${z}`); 
// }

//Переменная определенная во внутренней фукнции не может быть доступна во внешней

// DoOuterFunctionStuff(3);

// function DoOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log(`Недоступная переменная ${z}`); 
// }

// doInnerFunctionStuff(3);
console.log("--------------------------")
// Практическое занятие 6.7

// let start = 10;

// function loop1(val) {
//     console.log(val);
//     if (val < 1) {
//         return loop1(val);
//     }
//     return loop1(val--);
//     }
//     loop1(start);
//     function loop2(val) {
//         console.log(val);
//         if (val > 0) {
//             val--;
//             return loop2(val);
//         }
//     return;
// }

// loop2(start);

// Анонимные функции

function doingStuffAnonimously() {
    console.log("Но не так уж и секретно");
}

let functionVariable = function () {
    console.log("Но не так уж и секретно");
    return `Вызываю анонимную функцию`;
}

functionVariable();
console.log(functionVariable());

// Практическое занятие 6.8

let testVariableAnonymous = function(testVar) {
    return testVar;
}

console.log(testVariableAnonymous("LOL"));

// Функции обратного вызова

function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("Inside doFlexibleStuff function")
}

doFlexibleStuff(functionVariable);
console.log(doFlexibleStuff(functionVariable)); // Вызов выдаёт undefined в консоли

let anotherFunctionVariable = function() {
    console.log("еще одна реализация анонимной функции");
}

doFlexibleStuff(anotherFunctionVariable);

// let youGotThis = function() {
//     console.log("lorem Ipsum");
// }

// setTimeout(youGotThis, 1000);

//setInterval(youGotThis, 1000);

// Глава 7. Классы

class Dog {
    constructor (dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight,
    this.color = color;
    this.breed = breed;
}
}

let dog = new Dog("Jacky", 30, "brown", "labrador");

console.log(dog);

class Person {
    #firstName;
    #lastName;
    constructor (firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    get lastname() {
        return this.#lastName;
}

    set lastname(lastname) {
        this.#lastName = lastName;
    }

    getFullName() {
        console.log(`It's ${this.firstName} ${this.lastName}`);
    }
}

p1 = new Person("Elon", "Musk");
p1.getFullName();


// Проверка работы сеттеров
let p2 = new Person("Jeff", "Bezos");
p2.getFullName(); // It's Jeff Bezos

// Наследование 

class Vehicle {
    constructor (color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log("Движется со скоростью", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor (color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel;
    }

    doWheelie() {
        console.log("Едет на колесе!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "бензин");
console.log(motor.color);
motor.accelerate(50);
console.log(motor.currentSpeed);
motor.move();

// Прототипы

console.log(Person.prototype);

Person.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.firstName}`);
}

Person.prototype.walk = function() {
    console.log(`${this.name} is walking.`);
}

console.log("--------------")

// Практическое занятие 3.7

class Animal {
    constructor(type, sex, location, voice) {
        this.type = type;
        this.sex = sex;
        this.location = location;
        this.voice = voice;
    }
    makeASound() {
        console.log(`${this.type} makes a sound ${this.voice}`)
    }
}

Animal.prototype.catchThePrey = function(cathedAnimal) {
    console.log(`${this.type} catch ${cathedAnimal}`);
};

const leon = new Animal("Leon", "M", "South Africa", "rrr-rrr");
leon.makeASound();
leon.catchThePrey("zebra");

// Встроенные методы JavaScript

let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log(encoded_uri)

// Практическое занятие 8.1

let myEncodedUrl = "How's%20it%20going%3F";
let myDecodedUrl = "How's it going?";

let toEncode = encodeURIComponent(myDecodedUrl);
let toDecode = decodeURIComponent(myEncodedUrl);
console.log(toEncode, toDecode);
console.log(myEncodedUrl, myDecodedUrl);

if (toEncode == myEncodedUrl && toDecode == myDecodedUrl) {
    console.log(`Yes! ${toEncode}  ${toEncode}`);
} else { 
    console.log(`NO! ${toEncode}  ${toEncode}`);
}

// Создание целых чисел с помощью parseInt()

let str_int = "6";  
let int_int = parseInt(str_int);
console.log(`Type of ${int_int} is ${ typeof int_int}`)

// Создание чисел с плавающей точкой с поомщью parseFloat()

let str_float = "7.6.1";
let float_float = parseFloat(str_float);
console.log(`Type of ${float_float} is ${typeof float_float}`);

// Работа с массивами

// target (обязательный): Индекс, куда вы хотите вставить элементы. Если отрицательный, отсчитывается с конца массива.
// start (обязательный): Индекс начала копируемой последовательности. Если отрицательный, отсчитывается с конца массива.
// end (необязательный): Индекс конца копируемой последовательности (не включая этот индекс). Если не указан, копирование идет до конца массива.

let arr22 = ["grepefruite", 1, 2, 3, 4, 5, "lol", 6, 7, false, 5.6];
console.log(arr22);
arr22.copyWithin(0, 8, arr22.length);
console.log(arr22);


// Метод map();
let mapped_arr = arr22.map(x => x + 1);
console.log(mapped_arr);

// lastIndexOf
console.log(arr22.lastIndexOf(5.6));
console.log(arr22.lastIndexOf(true));

function CheckNumber(element, index) {
    return typeof element === "number";
}

let filterArr = arr22.filter(CheckNumber);
console.log(filterArr);


// Практическое занятие 8.2

let arrFrom82 = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

let UniqueNames = names.filter((element, index, array) => {
    console.log(`Checking: ${element}, Current Index: ${index}, First Index: ${array.indexOf(element)}`);
    return array.indexOf(element) === index;
});

console.log(UniqueNames);

// Практическое занятие 8.2

let myArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myArrayNumbers2 = myArrayNumbers.map(x => x * 2);
console.log(myArrayNumbers2);

// Строчные методы

// Объединение строк

let s1 = "Hello ";
let s2 = "World";
let result111 = s1.concat(s2);
console.log(result111);

// Преобразование строки в массив
let arr_result111 = result111.split(" ");
console.log(arr_result111);

let letters = ["a", "b", "c", "d"];
let arrToStr = letters.join("-");
console.log(arrToStr);

// Работа со свойствами index и position

let poem = "Roses are red, violets are blue, 25,  if I can do JS, then you can too!";
let index_re = poem.indexOf("Ro");
console.log(index_re);
// Данный метод учитывает Регистр элемента

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("my");
console.log(pos);

let notFound = searchStr.search("JS");
console.log(notFound);

// charAt. Нахождение символа по индексу
let pos1 = poem.charAt(10);
console.log(pos1);

//Если элемента по индексу нет, возвращается пустая строка...
let pos2 = poem.charAt(1000);
console.log(typeof pos2);

// Создание подстрок

let substr1 = poem.slice(5);
let substr2 = poem.slice(0, 5);
console.log(`This substr1:${substr1}`);
console.log(`This substr2 ${substr2}`);

// Замена строки ЗАМЕНА ПЕРВОГО ЭЛЕМЕНТА
let hi = "Hi buddy, hi, hi";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

// Использование replaceAll ЗАМЕНА ВСЕХ ЭЛЕМЕНТОВ

let s3 = "hello hello hello amm";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3)

let low_bye = "bye bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);

let caps = "HI, HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);

let firstCapital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));
console.log(firstCapital);

// Начало и конец строки

let encouragement = "Ты работаешь великопленл, так держать!";
let bool_start = encouragement.toLowerCase().startsWith("ты");
console.log(bool_start);

let bool_end = encouragement.endsWith("!!")
console.log(bool_end);

// Практическое занятие 8.4

function ToFirstCapitalize(string) {
    string = string.toLowerCase();
    let arrForCapitalize = [];
    let splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
        word = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        arrForCapitalize.push(word);
    }
    let strArr = arrForCapitalize.join(" ");
    return strArr;

}
console.log(ToFirstCapitalize("Ты работаешь великоплено, так держать!"));

// Практическое занятие 8.5

function replaceLet (string) {
    return string
        .replaceAll("a", "4")
        .replaceAll("e", "3")
        .replaceAll("i", "1")
        .replaceAll("o", "0");
}

console.log(replaceLet("I love JavaScript"));

// Проверка на принадлежность числовому типу данных 

let xx = 34;
console.log(isNaN(xx));
console.log(!isNaN(xx));
let str3 = "Hi";
console.log(isNaN(str3));

let str4 = "5";
console.log(isNaN(str4)); //ЗДЕСЬ FALSE. JS видит число в строке

// Проверка на конечность значения
console.log("Checking of isFinite");

let x4 = 4;
let str5 = "finite";
console.log(isFinite(x4));
console.log(isFinite(str5));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));

// Проверка целых чисел

console.log(Number.isInteger(xx));

// Указание количества знаков после запятой
// Метод ОКРУГЛЯЕТ значение, а не просто ОТРЕЗАЕТ данные
let x5 = 1.34941;
let x5Fixed2 = x5.toFixed(2);
let x5Fixed5 = x5.toFixed(5);
console.log(x5Fixed2, x5Fixed5);

// Указание необходимой точности

let newx5 = x5.toPrecision(3)
console.log(newx5);

// МАТЕМАТИЧЕСКИЕ МЕТОДЫ

let hisghest = Math.max(1, 2, 3, 56, 99, 100, -1)
let lowest = Math.min(1, 2, 3, 56, 99, 100, -1);
console.log(hisghest, lowest);

// Результат будет Nan, так как метод не может определить как число второй элемент
let hisghest1 = Math.max(1, 2, "Lol" , 3, 56, 99, 100, -1)
console.log(hisghest1);

let result444 = Math.sqrt(64);
console.log(result444);

let result555 = Math.pow(5, 3); //Основание, степень
console.log(result555); // 5 x 5 x 5

// Преобразование десятичных дробей в целые числа

let m = -7.78;
let n = -5.21;
let m1 = 6.78;
let n1 = 5.34;

console.log(`(ROUND) m: ${m} becomes ${Math.round(m)}`);
console.log(`(ROUND) n: ${n} becomes ${Math.round(n)}`);

console.log(`(ceil) m: ${m} becomes ${Math.ceil(m)}`);
console.log(`(ceil) n: ${n} becomes ${Math.ceil(n)}`);

console.log(`(floor) m: ${m} becomes ${Math.floor(m)}`);
console.log(`(floor) n: ${n} becomes ${Math.floor(n)}`);

console.log(`(trunc) m: ${m1} becomes ${Math.trunc(m1)}`);
console.log(`(trunc) n: ${n1} becomes ${Math.trunc(n1)}`);

let exp = Math.exp(x); // Число Эйлера из математики
console.log(`Exp: ${exp}`);
let log = Math.log(x);
console.log(`Log: ${log}`);

// Практическое занятие 8.6

const PI = Math.PI;
let m2 = 5.7;
let m2Ceil = Math.ceil(m2);
//let m2Ceil = Math.floor(Math.ceil(m2));
console.log(m2Ceil);

const randIntFrom0 = Math.floor(Math.random() * 10);
console.log(randIntFrom0);

const randIntFrom1 = Math.ceil(Math.random() * 10);
console.log(randIntFrom1);

const randIntFrom1To100 = Math.ceil(Math.random() * 100);
console.log(randIntFrom1To100);

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 100; i++) {
    console.log(ranNum(1, 1000));
}

// Методы работы с датами

// Генерирование дат

let cuurentDataTime = new Date();
console.log(cuurentDataTime);

let now = Date.now();
console.log(now);

let miliDate = new Date(1000);
console.log(miliDate);

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

// Методы получения и установки элементов даты

let d = new Date();
console.log(`День недели ${d.getDay()}`);
console.log(`Число месяца ${d.getDate()}`);
console.log(`Месяц ${d.getMonth()}`);
console.log(`Год ${d.getFullYear()}`)
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds()); 
console.log("Time:", d.getTime()); // число миллисекунд, прошедших с 1 января 1970 года

d.setMonth(9);
console.log(d);

d.setDate(10);
console.log(d);

d.setHours(10);
console.log(d);

d.setTime(2722889770682);
console.log(d);

// Парсинг дат

let d2 = Date.parse("January 27, 2025");
console.log(d2)
console.log(d.toDateString());
console.log(d.toLocaleDateString());

// Практическое занятие 8.7
let getMMonth = (array, index) => array[index];

const dateNow = new Date();
console.log(dateNow)

const arrMonth = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

let dateNowDay = dateNow.getDate();
let dateNowYear = dateNow.getFullYear();
let dateNowMonth = dateNow.getMonth();
console.log(dateNowDay, dateNowMonth, dateNowYear);

console.log(`Today - ${dateNowDay} ${getMMonth(arrMonth, dateNowMonth)} ${dateNowYear}`);

// ГЛАВА 9 DOM && BOM

console.dir(window)
console.log(`Ширина ${window.innerWidth} Высота ${window.innerHeight}`);
console.dir(history);
window.history.go(1);
console.log(navigator);
console.log(location.ancestorOrigins.length) //получим значение длины объекта ancestorOrigins, который показывает, со сколькими контекстами просмотра связана наша страница 

// Практическое занятие 9.2

console.log(window.location);
console.log(window.location.protocol);
console.log(window.location.href);

// Практическое занятие 9.3

// let element = document.querySelector(".output");
// element.textContent = "red";
// element.classList.add = "pedro";
// element.id = "tester";
// element.style.backgroundColor = "red";
// let urlList = document.URL;

// Управление динамическими элементами при помощи DOM

// console.dir(document.body);
// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].children.treasure);
// console.dir(document.body.children.forest.children.tree1.parentElement);
// Код выше использовать в консоли браузера!

// Команда для измененения innerText
document.body.children.id1.children.testingH2.innerText = "Hi, I'm WOLF. BUE!";
document.body.children.id1.children.testingH2.innerHTML = "<p>Hi, I'm WOLF. HI!!!!</p>";

// Получение элемента по id
console.log(document.getElementById("greenEl"))

// Получение элемента по названию тега

console.log(document.getElementsByTagName("div"));
// Получение первого элемента в массиве
document.getElementsByTagName("div").item(1);
// Запрос элемента по имени
document.getElementsByTagName("div").namedItem("one");

document.getElementsByTagName("h1");
//
document.querySelector("h1")
document.querySelector(".main")

// Практическое занятие 10.6
let elesClassOne = document.querySelectorAll(".classOne");
// Второй метод описан в книге
let elesClassOneM = document.getElementsByClassName("classOne");

for (let i = 0; i < elesClassOne.length; i++) {
    console.log(elesClassOne[i]);
}

// Обработчик щелчка кнопкой мыши на элементе

function stop(){
    alert("Ouch! Stop it!");
    }

// Работает
document.getElementById("lolik").onclick = function () {
    alert("Auch! Stop!");
    }

// Ключевое слово this и DOM

function reveal(el){
    console.log(el);
    }

// вариаций 100500 разных!!!
function revealOne (el) {
    console.log(el.innerText);
}

// Практическое занятие 10.7

function messageQ (element) {
    console.log(element.innerText)
}

// Управление стилем элемента

function toggleDisplay() {
    let p = document.getElementById("magic");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
    p.style.display = "none";
}
}

// Еще одно управление стилем элементов
function rainbowify () {
    let divsColor = document.getElementsByTagName("div");
    for (let i = 0; i < divsColor.length; i++) {
        divsColor[i].style.backgroundColor = divsColor[i].id;
        console.log(`ID - ${divsColor[i].id}, Color - ${divsColor[i].backgroundColor}`);
    }
}

function getStyleCSS(element) { //Функция для тестирования стилей
    element = document.getElementById(element);
    let styleC = element.style;
        return styleC;
}

// Смена класса
function disappear() {
    document.getElementById("shape").classList.add("hide");
}

// Удаление класса 

function changeClass () {
    document.getElementById("shape").classList.remove("blue");
}

// Переключение классов
function changeVisible () {
    document.getElementById("shape").classList.toggle("hide");
}

// Управление атрибутами

function changeAttr() {
    let el = document.getElementById("shape1");
    el.setAttribute("style", "backgroundColor: red; border:2px black solid");
    el.setAttribute("class", "circle");
}

window.onload = function() {
    document.getElementById("shape2").addEventListener("click", changeColor);
}

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const container = document.getElementById("table-container");

// Практическое занятие 10.8
function build() {
    const nameArray1 =["Elon", "Joe", "Donald", "Vladimir", "Benjamin"];
    let el1 = document.body;
    let html = "<table>\n";
        for (let i = 0; i < nameArray1.length; i++) {
            html += `<tr data-row="${i}" dataname="${nameArray1[i]}" onclick="getData1(this)">
                        <td class="box">${nameArray1[i]}</td>
                    </tr>\n`;
            
        } 
    html += "</table>";
    const container = document.getElementById("table-container");
    container.innerHTML = html;
}

function getData1(el) {
    let attr1 = el.getAttribute("dataname");
    let attr2 = el.getAttribute("data-row");
    let message3 = document.getElementById("message3");
    message3.innerHTML = `${attr1} - ${Number(attr2) + 1} `;
}

// Практическое занятие 10.9

function output(el) {
    console.log(`el.textContent - ${el.textContent}`);
}

// Без передачи анонимной функции в строке 1655 функция вызывается без нажатия
let btns109 = document.querySelectorAll(".btn109");
btns109.forEach((button) => {
    button.addEventListener("click", () => output(button));
});

// Создание новых элементов

function addRandomNumber() {
    let el = document.createElement("h2");
    el.innerText = Math.floor(Math.random() * 100);
    document.body.appendChild(el);
}

// Практическое занятие 10.10

addButton.addEventListener("click", addOne);

function addOne() {
    const inputField = document.getElementById("addItem");
    let inputValue = inputField.value;

    const addButton = document.getElementById("addButton");
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = inputValue;
    list.append(newItem);
}

// Глава 11 Интерактивный контент и прослушиватель событий

document.getElementById("unique").onclick = function() { magic(); }

// Практическое занятие 11.1

// Объявление переменной
var darkMode = Boolean(false);
let bodyElInHTML = document.querySelector("body");
let buttonMode = document.createElement("button");
buttonMode.textContent = "Change Color";
buttonMode.addEventListener("click", changeMode);
bodyElInHTML.appendChild(buttonMode);

function changeMode() {
    if (darkMode === false) {
        darkMode = true;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        darkMode = false;
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

// Практическое занятие 11.2

let div112 = document.getElementById("ex11_2");
let arrColor = ["blue", "pink", "red", "yellow", "brown"]
for (let i = 0; i < arrColor.length; i++) {
    let elDivColor = document.createElement("div");
    elDivColor.setAttribute("id", arrColor[i]);
    //elDivColor.addEventListener("click", changeColorOffEl);

    elDivColor.addEventListener("click", function () {
        changeColorOffEl(elDivColor);
    })

    elDivColor.style.width = "100px";
    elDivColor.style.height = "100px";
    elDivColor.style.margin = "5px";
    elDivColor.style.border = "1px solid black";
    elDivColor.textContent = arrColor[i];

    div112.appendChild(elDivColor);
    console.log(document.querySelector(`#${arrColor[i]}`))
}

function changeColorOffEl(el) {
    el.style.backgroundColor = el.id;
}

console.log()

//Практическое занятие 11.3

function message1(textMsg, objectMsg) {
    console.log(textMsg, objectMsg);
} 

window.onload = function(e) {
    message1("Window Ready", e);
}

document.addEventListener("DOMContentLoaded", function(e) {
    message1("Document Ready", e);
})

// Как только HTML полностью загружен срабатывает DOMContentLoaded
// Когда загружены ВСЕ ресурсы страницы срабатывает window.onload,

// Практическое занятие 11.4

let testMouse = document.createElement("div");
testMouse.textContent = "TESTING MOUSE";
testMouse.style.width = "100px";
testMouse.style.height = "100px";
testMouse.id = "testIdMouse";
testMouse.style.border = "1px solid black";
document.body.appendChild(testMouse)

// Практическое занятие 11.5
let divOutput = document.querySelector(".output");
//let inputField = document.getElementsByName("message[0]");
let inputField = document.querySelector("[name='message']"); // Альтерниативный вариант
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

let logs = [];

function getLog(event) {
    let inputValue = document.querySelector("[name='message']").value;
    let divOutput = document.querySelector(".output");
    divOutput.textContent = inputValue;

    let eventData = {
        text: inputValue,
        eventType: event.type,
        className: event.target.className,
        tagName: event.target.tagName,
    };

    logs.push(eventData);
    divOutput.textContent = "" // Очистка div после записи в log

}

btn1.addEventListener("click", getLog);
btn2.addEventListener("click", getLog);
btn3.addEventListener("click", () => console.log(logs));

function bubble() {
    console.log(this.innerText);
}
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble, true);
}

// Практическое занятие 11.6
let boxes = document.querySelectorAll(".box");
let container1 = document.querySelector(".container_part11");
console.log(boxes);

container1.addEventListener("click", function() {console.log(4)}, false);
container1.addEventListener("click", function() {console.log(1)}, true);

boxes.forEach(box => {
    box.addEventListener("click", function(event) {
        console.log(3);
        console.log(`Click on ${this.textContent}`);
    }, false);
})

boxes.forEach(box => {
    box.addEventListener("click", function(event) {
        console.log(2);
        console.log(`Click on ${this.textContent}`);
    }, true);
})

// Практическое занятие 11.7
let fname = document.querySelector("input[name='first']");
let lname = document.querySelector("input[name='last']");

function logEvent() {
    console.log("Изменилось)")
}

fname.addEventListener("change", logEvent);