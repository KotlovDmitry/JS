'use strict'

let money = prompt('Ваш месячный доход?', 30000),
    income = "Freelanse",
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12,
    expense1 = prompt('Введите обязательную статью расходов'),
    amount1 =+ prompt('Во сколько это обойдется?'),
    expense2 = prompt("Введите обязательную статью расходов №2"),
    amount2 =+ prompt(" А это во сколько это обойдется?");

//console.log(addExpenses.length);
//console.log('Период равен ' + period + ' месяцев');
//console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
//console.log(addExpenses.toLowerCase().split(" "));

function showTypeOf(data) {
    console.log(typeof (data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth(amount1, amount2) {
    console.log(amount1 + amount2);
}
getExpensesMonth(amount1, amount2);

console.log(addExpenses.split(', '));

function getTargetMonth(acccumulatedMonth) {
    let accumulatedMonth = (money - amount1 - amount2);
    let period2 = (mission / accumulatedMonth);
    console.log('С учетом месячных затрат, цели вы достигнете за '+ period2+ " месяца(ев)");
}
getTargetMonth();

function getAccumulatedMonth(money, amount1, amount2) {
    let accumulatedMonth = (money - amount1 - amount2);
    //console.log('accumulatedMonth' + accumulatedMonth);
    let budjetDay = accumulatedMonth / 30
    console.log('budjetDay' + budjetDay + '-ваш бюджет за день');
    
}
getAccumulatedMonth(money, amount1, amount2);



function getStatusIncome(budjetDay) {
    if (budjetDay > 1200){
        return('У вас высокий уровень дохода');
    }else if (600 < budjetDay <= 1200){
        return('У вас средний уровень дохода');
    }else if (budjetDay <= 600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }
}
console.log(getStatusIncome());