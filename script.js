var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i] + " - прекрасное животное");
    animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals)