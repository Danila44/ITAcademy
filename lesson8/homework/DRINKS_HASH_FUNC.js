function HashStorageFunc() {
    let obj = {}

    this.addValue = function (key, value) {
        obj[key] = value
        return obj[key]
    }
    this.getValue = function (key) {
        return obj[key]
    }
    this.deleteValue = function (key) {
        return delete obj[key]
    }
    this.getKeys = function () {
        return Object.keys(obj)
    }
    this.getObj = function () {
        return obj
    }
}

var drinkStorage = new HashStorageFunc();

let getInputInformation = function () {
    let names, isAlc, structure;
    while (!names) {
        names = prompt("Введите название напитка:").toLowerCase();
    }
    while (!isAlc) {
        isAlc = prompt("Он алкогольный?").toLowerCase();
    }
    while (!structure) {
        structure = prompt("Введите способ приготовления:").toLowerCase();
    }
    let result = `Алкогольный? - "${isAlc}". Способ приготовления: ${structure}`
    let resultInfo = drinkStorage.addValue(names, result)
}

let getInfoDrink = function () {
    let names;
    while (!names) {
        names = prompt('Введите название напитка:').toLowerCase();
    }
    if (drinkStorage.getValue(names)) {
        console.log(`Напитьок:${names}, ${drinkStorage.getValue(names)}`);
    } else {
        console.log('Такого напитка нет:(');
    }
}

let delDrink = function () {
    let names;
    while (!names) {
        names = prompt('Введите название напитка:').toLowerCase();
    }
    if (drinkStorage.deleteValue(names)) {
        console.log(`Напиток удалён!`);
    } else {
        console.log(`Данного напитка нет в базе:()`);
    }
}

let getNameDrink = function () {
    console.log(drinkStorage.getKeys());
}




