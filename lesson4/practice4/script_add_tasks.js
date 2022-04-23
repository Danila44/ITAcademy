//1. Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ повторяется один раз.

// doubleElement("String") ➞ "SSttrriinngg"

// doubleElement("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleElement("1234!_ ") ➞ "11223344!!__  "


// Все тестовые примеры содержат допустимые строки. Пробелы, специальные символы или цифры также учитываем.

function doubleElement(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
        newArr.push(str[i] + str[i])
    }
    return newArr.join('')
}
//console.log(doubleElement("String"));
//console.log(doubleElement("Hello World!"));
//console.log(doubleElement("1234!_ "));





//2. Напишите функцию, которая перемещает все заглавные буквы в начало слова.

// capToFront("hApPy") ➞ "APhpy"

// capToFront("moveMENT") ➞ "MENTmove"

// capToFront("shOrtCAKE") ➞ "OCAKEshrt"



//Сохраняйте исходный относительный порядок букв верхнего и нижнего регистра одинаковым.


function capToFront(str) {
    let arrStr = str.split('');
    let strUpper = '';
    let strLower = '';
    
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === arrStr[i].toUpperCase()) {
            strUpper += arrStr[i];
        } else if (arrStr[i] === arrStr[i].toLowerCase())
            strLower += arrStr[i];
    }
    return strUpper + strLower;

}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));











//3. Напишите функцию для замены всех экземпляров символа s1 на символ s2 и наоборот.


// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&") ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9") ➞ "129 985 556 799 888"







//4. Напишите функцию, которая возвращает массив строк, отсортированных по длине в порядке возрастания.


// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []


//Строки будут иметь уникальную длину, поэтому не беспокойтесь о сравнении двух строк одинаковой длины.
//Вернуть пустой массив, если входной массив пуст
