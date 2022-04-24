/*task1 */
const numbSort = arr => arr.sort((a, b) => String(a).length - String(b).length);

numbSort([2, 37, 1, 2, 739, 2,]);

/*task2 */

function sortStr(arr, str) {
    let newArr = [];
    arr.forEach(element => element[0] === str[0] && newArr.push(element));
    arr = arr.filter(element => element[0] !== str[0])
    arr.sort((a, b) => String(b).length - String(a).length).forEach(element => newArr.push(element));

    return newArr
}
sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop");
sortStr(["middle", "junior", "senior"], "stnmj");
sortStr(["bike", "car", "motorcycle"], "camrb");

/*task3 */

function revOddWord(str) {
    let newArr = [];
    let symbols = ['.', ',', '-', ':', '!', '?'];

    symbols.forEach(element => str = str.replaceAll(element, ''));
    str.split(' ').forEach(element => element.length % 2 ? newArr.push(element.split('').reverse().join('')) : newArr.push(element));

    return newArr.join(' ');
}

revOddWord("It is! false");
revOddWord("Dear Santa, give! me a new! iPhone");
revOddWord("Egg");