
/* Исправленное задание №2 */

function FindPrimeNumbers(start, end) {

    if(start > end) {
        alert("Начальное значение должно быть меньше или равно конечному значению");
        return;
    }

    if(start < 2) {
        start = 2;
    }

    for (var i = start; i <= end; i++) {
        var PrimeNumber = true;

        for (var j = 2; j < i; j++) {
        //проверяем делится ли число
            if (i % j == 0) {
                PrimeNumber = false;
                break;
            }
        }

        //если число ни на что не делится, то оно простое
        if(PrimeNumber) {
            document.write(i + " ");
        }
    }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var firstNumber = prompt("Введите начальное значение");
if (isNumeric(firstNumber)) {
    var lastNumber = prompt("Введите конечное значение");
    if (isNumeric(lastNumber)) {
        FindPrimeNumbers(firstNumber, lastNumber);
    } else {
        alert('Некорректое значение');
    }

} else {
    alert('Некорректое значение');
}




/* на уроке можно было не определять пустоту, а просто указать maxNamе? */

var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};

var max = 0;
var maxName = "нет сотрудников";
    for(name in salaries){

    //console.log("Зарплата текущего: " +  salaries[name] + " Максимальная" + max);
        if(salaries[name] > max) {
            max = salaries[name];
            maxName = name;
            //console.log("Новое максимальное значение: " + max);
        }
    }
document.write(maxName);


/* ДЗ №3 */
function square(x) { return x * x; } // возведение в квадрат

function map(fn, array) {
    var resultArray = [];
    for(var i=0; i<array.length; i++) {
        resultArray[i] = fn(array[i]);
    }
    return resultArray;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]
