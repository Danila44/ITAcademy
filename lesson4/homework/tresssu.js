/*task1*/

function treeSum(arr) {
    let sum = null;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === `number`) {
            newArr.push(arr[i])
        } else if (typeof arr[i] !== `number`) {
            let arrayFromString = Array.from(arr[i].toString().split(',').join(''))
            for (let k = 0; k < arrayFromString.length; k++) {
                newArr.push(Number(arrayFromString[k]))

            }
        }
    }

    for (let index = 0; index < newArr.length; index++) {
        sum += newArr[index]
    }

    return sum
}

//console.log(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));

/*task2*/

function removeLeadingTrailing(str) {
    let number = parseFloat(str);
    let numberToStr = number.toString();
    return numberToStr
}

//console.log(removeLeadingTrailing("190.000"));
//console.log(removeLeadingTrailing("00803"));
//console.log(removeLeadingTrailing("07.1200"));
//console.log(removeLeadingTrailing("90"));
//console.log(removeLeadingTrailing("0"));
//console.log(removeLeadingTrailing("00,00"));
//console.log(removeLeadingTrailing("07.010200"));
