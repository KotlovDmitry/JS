let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    income = 'freelance',
    addExpenses = prompt('Перечислите возможные расходы через запятую'),
    deposit = confirm('Есть ли у вас счет в банке?'),
    mission = 1000000,
    period = 12,
    profit;
let start = function(){
    do {
        money = prompt('Ваш доход за месяц?');
    }
    while (!isNumber(money));
};
start();

let showTypeOf = function(data){
    console.log(typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//console.log(addExpenses.split(', '));
let sum = 0;
function getExpensesMonth() {
    
    for(let i=0; i<2; i++){
        expenses1 = prompt('Введите статью расходов');
        do{
            profit = +prompt('Во сколько обходится?');
        }
        while(!isNumber(profit));
        sum +=profit;
    }
    return sum;
}

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};
console.log(getAccumulatedMonth() + '-ваш доход с учетом затрат');

let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    return mission / accumulatedMonth;
};
if (getTargetMonth() < 0){
    console.log('Цель достигнута не будет');
}else{
    console.log('Вы можете достичь цели примерно за ' + Math.ceil(getTargetMonth()) + 'месяца(ев)');
}

let budjetDay = accumulatedMonth / 30;
console.log(budjetDay + '-ваш бюджет на день');

let getStatusIncome = function(budjetDay) {
    if (budjetDay > 1200){
        return('У вас высокий уровень дохода');
    } else if (budjetDay<=1200 && budjetDay>=600){
        return('У вас средний уровень дохода');
    } else if (budjetDay < 600){
        return('К сожалению у вас уровень дохода ниже среднего');
    }
};
console.log(getStatusIncome(budjetDay));
