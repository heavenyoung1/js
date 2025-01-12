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
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "Chihuahua",
    age: 3,
}

let dogColor = dog["color"];
let dogName = dog.dogName;
console.log(dogName, dogColor);

dog["color"] = "blue";
dog.age = 100;
console.log(dog);
dog.age = "one hundred";
console.log(dog);

let variableAgeOfDogs = "age";
console.log(dog[variableAgeOfDogs]);
console.log(dog["breed"]);

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