'use strict'

let money = prompt('Ваш месячный доход?');
//let income = "Freelanse";
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 12;
let expense1 = prompt('Введите обязательную статью расходов');
let expense2 = prompt("Введите обязательную статью расходов");
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt("Во сколько это обойдется?");
let budjetMonth = (money - amount2);


//console.log(typeof money);
//console.log(typeof income);
//console.log(typeof deposit);
console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split(" "));
console.log("Цели можно достичь примерно за " + (mission / budjetMonth) + " месяца(ев)");


let budjetDay = budjetMonth / 30
console.log(budjetDay + "-ваш бюджет за день");

if (budjetDay > 1200){
    console.log('У вас высокий уровень дохода');
}else if (600 < budjetDay <= 1200){
    console.log('У вас средний уровень дохода');
}else if (budjetDay <= 600){
    console.log('К сожалению у вас уровень дохода ниже среднего');
}




