/*task1 */
function numbSort(arr) {
    let newArr = [];
    let minArr = [];
    let maxArr = [];
    let min = "";
    let max = "";
    arr.forEach(element => newArr.push(element.toString()));
    for (let i = 0; i < newArr.length - 1; i++) {
        if (newArr[i].length > ((newArr[i + 1]).length)) {
            newArr.shift()
        }
    }
    console.log(newArr);

}
//numbSort([2, 37, 1, 2, 739, 2]);

/*task2 */



/*task3 */

function revOddWord(str) {
   
    let newStr = str.split('')
    
   let x = [];
    if (newStr.length % 2 > 0) {
    let y =  newStr.sort(function (a, b) {
        return a - b;
    });   
    console.log(y);
    }
    
    return newStr
}

console.log(revOddWord("Egg") );