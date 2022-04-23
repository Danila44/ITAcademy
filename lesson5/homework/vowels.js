/*task1*/

// forEach

function countingVowels() {
    let userText = prompt(`Введите строку:`)
    const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е',]
    let counterVowels = 0;

    for (let i = 0; i < userText.length; i++) {
        vowels.forEach(element => {
            if (userText[i].toUpperCase() === element.toUpperCase()) {
                ++counterVowels;
            }
        });
    }
    return counterVowels ? counterVowels : `Нет гласных букв`
}

console.log(countingVowels());




//filter

function countingVowels() {
    let userText = prompt(`Введите строку:`)
    const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е',]
    return Array.from(userText.toLowerCase()).filter(letter => vowels.includes(letter)).length;
}
//console.log(countingVowels());




//reduce

function countingVowels() {
    let userText = prompt(`Введите строку:`)
    const vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е',]
    const result = Array.from(userText.toLowerCase()).reduce((sum /*результат после итерации */, val/*текущий элемент, с которым мы работаем */) => {
        if (vowels.indexOf(val) !== -1) { 
            sum++;
        }
        return sum;
    }, 0);
    return result;
}
//console.log(countingVowels());




/*task2*/

var names = ["Max", "Vera", "Joe", "Annette", "Sussan"];
var jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

function combineNameWork(names, jobs) {
    const newObject = {}

    for (let i = 0; i < names.length; i++) {
        let key = names[i]
        let value = jobs[i]
        newObject[key] = value
    }
    return newObject
}
//console.log(combineNameWork(names, jobs));




/*task3*/

function canFind(arr1, arr2) {
    let counter = 0;
    let arrTransfotmStr = arr2.toString();

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arrTransfotmStr.length; j++) {
            for (let k = 0; k < arr1.length; k++) {
                counter = arrTransfotmStr.includes(arr1[i]);
            }
        }
    }

    return counter
}

//console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
//console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));
//console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]));
//console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]));










