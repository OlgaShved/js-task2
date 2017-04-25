function FindPrimeNumbers(start, end){
    if(start > end){
        alert("Начальное значение должно быть меньше или равно конечному значению");
        return;
    }

    if(start < 2){
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
        if(PrimeNumber){
            document.write(i);
        }
    }
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
