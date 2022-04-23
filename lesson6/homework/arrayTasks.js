/*task1*/

function mapping(arr) {
    const newObj = {}

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        newObj[key] = key.toUpperCase()
    }
    return newObj
}

//console.log(mapping(["p", "s"]) );
//console.log(mapping(["a", "b", "c"]) );
//console.log(mapping(["a", "v", "y", "z"]) );

/*task2*/

function getStudentTopNotes(obj) {
    let topNotes = [];

    obj.forEach(elem => {
        topNotes.push(Math.max.apply(null, elem.notes));

    });
    return topNotes
}
// console.log(getStudentTopNotes([
//     {
//         id: 1,
//         name: "Jacek",
//         notes: [5, 3, 4, 2, 5, 5]
//     },
//     {
//         id: 2,
//         name: "Ewa",
//         notes: [2, 3, 3, 3, 2, 5]
//     },
//     {
//         id: 3,
//         name: "Zygmunt",
//         notes: [2, 2, 4, 4, 3, 3]
//     }
// ]));



/*task3*/

function simpleCompare(arr1, arr2) {
    let arrSort1 = arr1.sort(function (a, b) {
        return a - b;
    });
    let arrSort2 = arr2.sort(function (a, b) {
        return a - b;
    });
    let powArr = [];

    for (let i = 0; i < arrSort1.length; i++) {
        let x = Math.pow(arrSort1[i], 2)
        powArr.push(x)
        for (let j = 0; j < arrSort2.length; j++) {
            if (arrSort2[i] === powArr[i]) {
                return true
            } else {
                return false
            }
        }
    }
    return powArr
}

// console.log(simpleCompare([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));
// console.log(simpleCompare([4, 4], [1, 31]));
// console.log(simpleCompare([2, 2, 3], [9, 4, 4]));






/*task4*/

function makeTitle(str) {
    let x = "";

    for (i = 0; i < str.length; i++) {
        if (str[i - 1] === " " || i === 0) {
            x += str[i].toUpperCase();
        } else {
            x += str[i];
        }
    }
    return x;
}

//console.log(makeTitle("This is a title"));
//console.log(makeTitle("capitalize every word"));
//console.log(makeTitle("I Like Pizza"));
//console.log(makeTitle("PIZZA PIZZA PIZZA"));
























