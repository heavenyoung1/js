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

let yourName = prompt("Введите ваше имя")
switch (yourName) {
    case "Elon":
    case "Homer":
    case "Donald":
    case "Micky":
        alert(`Hi, ${yourName}. You're welcome bro!`);
        break;
    case "Joe Biden":
        alert("Go away man!");
        break;
    default:
        alert(`Sorry, ${yourName}. You're not my friend. Go home!`);
        break;
}