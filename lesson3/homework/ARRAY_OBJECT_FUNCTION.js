/* task1 */

function sumFive(arr) {
    let sum = null;
    //arr.forEach(element => (element > 5) && (sum += element));
    arr.forEach(element => {
        if (element > 5) {
            sum += element
        }
    });
    return sum;
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));



/* task2 */

function objectToArray(obj) {
    const newArr = [];
    for (const key in obj) {
        newArr.push([key, obj[key]]);
        // console.log(`Ключ`, key);
        // console.log(`Значение `, obj[key]);
    }
    return newArr;
}

console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
}));
console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}));



/*task3*/

function numbersSum(arr) {
    let numSum = null;
    arr.forEach(element => {
        if (typeof element === `number`) {
            numSum += element
        }
    });
    return numSum;
}
console.log(numbersSum([1, 2, "13", "4", "645"]));
console.log(numbersSum([true, false, "123", "75"]));
console.log(numbersSum([1, 2, 3, 4, 5, true]));



/*task4*/

function keysAndValues(obj) {
    const keyArr = [];
    const valuesArr = [];
    for (const key in obj) {
        keyArr.push(key)
        valuesArr.push(obj[key])
    }
    return [keyArr, valuesArr]
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));



//console.log([Object.keys({ a: 1, b: 2, c: 3 }), Object.values({ a: 1, b: 2, c: 3 })]);


