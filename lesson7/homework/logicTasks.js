/*task1*/

function reorderNums(arr, str) {
    let newArr = [];
    let result = [];

    arr.forEach(element => newArr.push(Array.from(element.toString())));

    switch (str) {
        case "asc":
            newArr.forEach(element => result.push(Number(element.sort((a, b) => a - b).join(''))));
            return result;
        case "desc":
            newArr.forEach(element => result.push(Number(element.sort((a, b) => b - a).join(''))));
            return result;
    };
};

// console.log(reorderNums([515, 341, 98, 44, 211], "asc"));
// console.log(reorderNums([515, 341, 98, 44, 211], "desc"));
// console.log(reorderNums([63251, 78221], "asc"));
// console.log(reorderNums([63251, 78221], "desc"));
// console.log(reorderNums([1, 2, 3, 4], "asc"));
// console.log(reorderNums([1, 2, 3, 4], "desc"));

/*task2*/

function parseCode(str) {
    const arr = str.split('0').filter(element => element !== '');

    return {
        firstName: arr[0],
        lastName: arr[1],
        id: arr[2],
    }
}

// console.log(parseCode("John000Doe000123"));
// console.log(parseCode("michael0smith004331"));
// console.log(parseCode("Thomas00LEE0000043"));

/*version2*/

const parseCode2 = str => (
    {
        firstName: str.slice(0, str.indexOf(0)),
        lastName: str.slice(str.indexOf(0), str.lastIndexOf(0)).replaceAll(0, ''),
        id: str.slice(str.lastIndexOf(0) + 1),
    }
)
//  console.log(parseCode2("John000Doe000123"));
//  console.log(parseCode2("michael0smith004331"));
//  console.log(parseCode2("Thomas00LEE0000043"));


/*task3*/

function isAvgWhole(arr) {
    let result = 0;

    const sumWithInitial = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue, result
    );
    return sumWithInitial % arr.length === 0
}

// console.log(isAvgWhole([1, 3]));
// console.log(isAvgWhole([1, 2, 3, 4]));
// console.log(isAvgWhole([1, 5, 6]));
// console.log(isAvgWhole([1, 1, 1]));
// console.log(isAvgWhole([9, 2, 2, 5]));


/*task4*/

function getOnlyEvens(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && i % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

//   console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
//   console.log(getOnlyEvens([0, 1, 2, 3, 4]) );
//   console.log(getOnlyEvens([1, 2, 3, 4, 5]) );
















