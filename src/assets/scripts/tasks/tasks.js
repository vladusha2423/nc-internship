'use strict';

//Сумма по объекту
let sumObject = () => {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    for(let name in salaries){
        sum += salaries[name];
    }
    return sum;
}
//Проверка
console.log('---\nsumObject');
console.log(sumObject());



//Пустой ли объект
let isEmpty = (obj) => Boolean(Object.keys(obj).length);
//Проверка
console.log('---\nisEmpty');
let schedule = {};
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false



//Лесенка
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
        return ladder;
    }
};
//Проверка
console.log('---\nladder');
ladder.up().showStep().down().showStep().up().up().up().up().up().showStep();



//Типа калькулятор
let calculator = {
    op1: Number,
    op2: Number,
    read: function(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
        return this
    },
    sum: function(){
        return this.op1 + this.op2
    },
    mul: function(){
        return this.op1 * this.op2
    }
}
//Проверка
console.log('---\ncalculator')
console.log('1 + 2 = ' + calculator.read(1,2).sum());
console.log('5 * 6 = ' + calculator.read(5,6).mul());


//Максимальная сумма в подмассиве
let getMaxSubSum = (arr) => {
    let max = 0;
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
        if(sum < 0){
            sum = 0;
        }
        else if(sum > max){
            max = sum;
        }
    })
    console.log('[' + arr + ']' + ' = ' + max)
}
//Проверка
console.log('---\ngetMaxSubSum')
getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
getMaxSubSum([2, -8, 5, -1, 2, -3, 2]);


//Кастомный фильтр массива по условию
let filterRangeInPlace = (arr, a, b) => {
    let i = 0;
    while(i < arr.length){
        if(arr[i] >= a && arr[i] <= b)
            i++;
        else
            arr.splice(i, 1);
    }
}
//Проверка
console.log('---\nfilterRangeInPlace')
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log('[5, 3, 8, 1] -> [' + arr + ']');


//Скопировать и отсортировать массив
let copySorted = (arr) => arr.slice().sort();
//Проверка
console.log('---\ncopySorted');
arr = ["HTML", "JavaScript", "CSS"];
console.log('[' + arr + '] -> [' + copySorted(arr) + ']');


//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(u => u.name);
console.log('---\nArrayOfObjects to ArrayOfNames')
console.log(users);
console.log(names); // Вася, Петя, Маша



//Отсортировать пользователей по возрасту
arr = [ vasya, petya, masha ];
function sortByAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}
//Проверка
console.log('---\nSortByAge');
console.log(sortByAge(arr));



//Получить средний возраст
function getAverageAge(arr){
    let sum = arr.map(a => a.age).reduce((x, y) => x + y, 0);
    return sum / arr.length;
}
//Проверка
console.log('---\ngetAverageAge');
console.log(getAverageAge(arr));



//Подсчет кол-ва свойств объекта
let user = {
    name: 'John',
    age: 30
};
function count(obj){
    return Object.getOwnPropertyNames(obj).length;
}
//Проверка
console.log('---\ncountProperties');
console.log(count(user));



//Максимальная зарплата
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log('---\nsalaries');
let name = Object.entries(salaries).sort((a, b) => b[1] - a[1])[0][0];
console.log(salaries);
console.log('Max: ' + name);



//Армия функций
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // функция shooter
            console.log( j ); // должна выводить порядковый номер
        };
        shooters.push(shooter.bind(i));
        i++;
    }

    return shooters;
}

let army = makeArmy();
//Проверка
console.log('---\nmakeArmy')
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10



//








