// let miles = prompt("Input length in miles");
// let kilometers = 1.60934 * miles;
// console.log(`Расстояние ${miles} миль равно ${kilometers} км.`)

// Индекс массы тела

let length = prompt("Введите рост в дюймах")
let weight = prompt("Введите вес в фунтах")
console.log(`Рост: ${length} дюймов. Вес: ${weight} фунтов.`)
let imt = (weight * 0.453592) / ((length * 0.393701) ** 2) 
console.log(`Ваш ИМТ: ${imt}`)

// Управление массивом 

const theList = [
    "Laurence",
    "Svekis",
    true,
    35,
    null,
    undefined,
    {
        test: "one",
        score: 55,
    },
    [
        "one",
        "two",
    ],
];

theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "Hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
theList.splice(4, 3);
console.log(theList);