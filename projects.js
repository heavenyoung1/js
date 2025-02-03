// let miles = prompt("Input length in miles");
// let kilometers = 1.60934 * miles;
// console.log(`Расстояние ${miles} миль равно ${kilometers} км.`)

// Индекс массы тела

// let length = prompt("Введите рост в дюймах")
// let weight = prompt("Введите вес в фунтах")
// console.log(`Рост: ${length} дюймов. Вес: ${weight} фунтов.`)
// let imt = (weight * 0.453592) / ((length * 0.393701) ** 2) 
// console.log(`Ваш ИМТ: ${imt}`)

// Управление массивом 

// const theList = [
//     "Laurence",
//     "Svekis",
//     true,
//     35,
//     null,
//     undefined,
//     {
//         test: "one",
//         score: 55,
//     },
//     [
//         "one",
//         "two",
//     ],
// ];

// theList.pop();
// theList.shift();
// theList.unshift("FIRST");
// theList[3] = "Hello World";
// theList[2] = "MIDDLE";
// theList.push("LAST");
// theList.splice(4, 3);
// console.log(theList);

// Каталог продукции компании

// let goods = [];

// product1 = {
//     prName: "Apple Lisa",
//     models: "X",
//     cost: 200,
//     count: 10,
// } 
// product2 = {
//     prName: "Tesla Model X",
//     models: "X",
//     cost: 200,
//     count: 10,
// } 
// product3 = {
//     prName: "BMW M5",
//     models: "X",
//     cost: 200,
//     count: 10,
// } 

// goods.push(product1, product2, product3);
// console.log(goods);
// console.log()

// ППРОЕКТЫ ИЗ ГАВЫ 4

// Игра в рулетку

// let usrNum = prompt("Введите число от 1 до 100!");
// let rndNum = Math.floor(Math.random() * 100);
// let msg = "";

// if (usrNum > rndNum) {
//     msg = `Ваше значение ${usrNum} больше, чем ${rndNum}!`;
// } else if (usrNum < rndNum) {
//     msg = `Ваше значение ${usrNum} меньше, чем ${rndNum}!`;
// } else {
//     msg = "Sorry, bro";
// }
// alert(msg);

// Игра "Проверь друга"

// let yourName = prompt("Введите ваше имя")
// switch (yourName) {
//     case "Elon":
//     case "Homer":
//     case "Donald":
//     case "Micky":
//         alert(`Hi, ${yourName}. You're welcome bro!`);
//         break;
//     case "Joe Biden":
//         alert("Go away man!");
//         break;
//     default:
//         alert(`Sorry, ${yourName}. You're not my friend. Go home!`);
//         break;
// }

// Игра " Камень - Ножницы - Бумага "
// Камень > Ножницы and Камень > Бумага
// Ножницы < Камень and Ножницы > Бумага
// Бумага > Камень and Бумага > 

// let elements = ["Бумага", "Ножницы", "Камень"];
// let selPC = Math.floor(Math.random() * 3);
// let mySelect = Math.floor(Math.random() * 3);

// if (selPC != mySelect) {
//     if (selPC == 0 && mySelect == 1) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы выиграли`)
//     }
//     if (selPC == 0 && mySelect == 2) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы проиграли`)
//     }
//     if (selPC == 1 && mySelect == 0) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы проиграли`)
//     }
//     if (selPC == 1 && mySelect == 2) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы выиграли`)
//     }
//     if (selPC == 2 && mySelect == 0) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы выиграли`)
//     }
//     if (selPC == 2 && mySelect == 1) {
//         console.log(`Ваш выбор ${elements[mySelect]}. Выбор компьютера ${elements[selPC]}. Вы проиграли`)
//     }
// }
// else {
//     console.log("Ничья.")
// }

// Проект - Математическая таблица умножения

// let multiplyArray = [];
// const value = 10; // Количество перемножаемых переменных
// for (let i = 0; i < value; i++) {
//     let temp = [];
//     for (let j = 0; j < value; j++) {
//         temp.push(i * j);
//     }
//     multiplyArray.push(temp);
// }

// console.table(multiplyArray);

// function recursiveCounter(n) {
//     const maxN = 10;
//     console.log(n);
//     if (n < maxN) {
//         recursiveCounter(n + 1)
//     }
// }

// recursiveCounter(0);

// Использование функции setTimeOut();

// const arrowOne = () =>  console.log("one");
// const arrowTwo = () =>  console.log("two");

// const arrowThree = () => {
//     console.log("three");
//     arrowOne();
//     arrowTwo();
// }

// const arrowFour = () =>  {
//     console.log("four");
//     setTimeout(arrowOne);
//     setTimeout(arrowThree());
// }

// arrowFour();

// Приложение для контроля сотрудников

// class Employee {
//     constructor (firstName, lastName, yearsAmount) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsAmount = yearsAmount;
//     }
// }

// Employee.prototype.getFullInfo = function() {
//     console.log(`Employee ${this.firstName} ${this.lastName}, working here ${this.yearsAmount} years.`)
// }

// people1 = new Employee("Donald", "Trump", 6);
// people2 = new Employee("Joe", "Biden", 8);

// people1.getFullInfo();
// people2.getFullInfo();

// Расчёт стоимости заказов

// class Menu {
//     #offer1 = 10;
//     #offer2 = 20;
//     constructor (amount1, amount2) {
//         this.amount1 = amount1;
//         this.amount2 = amount2;
//     }

//     callTotal() {
//         return(this.amount1 * this.#offer1 + this.amount2 * this.#offer2);
//     }

//     get totalValueOffer() {
//         return this.callTotal();
//     }
// }

// const val1 = new Menu(2,0);
// const val2 = new Menu(1,3);
// const val3 = new Menu(3,2);

// console.log(val1.totalValueOffer);
// console.log(val2.totalValueOffer);
// console.log(val3.totalValueOffer);

// Скремблер слов

function scrambler(word) {
    const maxIteration = word.length;
    let strToArr = word.split("");
    let tempVar;
    let completeWord = "";
    
    for (let i = 0; i < maxIteration; i++) {
        tempVar = Math.floor(Math.random() * strToArr.length);
        completeWord = completeWord.concat(strToArr[tempVar]);
        strToArr.splice(tempVar, 1)
    }
  return completeWord.toLowerCase();
}

console.log(scrambler("Человек"));

//Таймер обратного отсчёта

const nowDate = new Date();
const finalDate = new Date(2021, 11, 15, 10, 50, 59);

function timerLeft(date1, date2) {
  let time = date1.getTime() - date2.getTime();
  return msToTime(time);
}

function msToTime (ms) {
  let second = Math.floor((ms / 1000) % 60);
  let minute = Math.floor((ms / (1000 * 60)) % 60);
  let hour = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let day = Math.floor(ms / (1000 * 60 * 60 * 24));
  return `${day} дн. ${hour} ч. ${minute} мин. ${second} сек.`;
}

//setTimeout(() => console.log(timerLeft(nowDate, finalDate)), 1000);

// Управление элементами HTML с помощью JavaScript

let classOutput = document.querySelector(".output");
let mainList =  classOutput.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
const eles = document.querySelectorAll("div");
for (let i = 0; i < eles.length; i++) {
  console.log(eles[i].tagName)
}
