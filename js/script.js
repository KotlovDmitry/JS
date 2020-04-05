let money,
    start = function(){
        do {
            money = prompt('Ваш доход за месяц?');
        }
        while (!isNumber(money));
    };

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

start();

let appData = {
    income : {},
    addIncome : [],
    expenses : {},
    addExpenses : [],
    deposit : false,
    mission : 1000000,
    period : 12,
    asking : function(){
        let addExpenses = prompt('Перечислите возможные расходы через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас счет в банке?');
    },
    profit : 0,
    budjet : money,
    budjetDay : 0,
    budjetMonth : 0,
    expensesMonth : 0,
    getExpensesMonth : function(){
        let sum = 0;
        for(let i=0; i<2; i++){
            expenses1 = prompt('Введите статью расходов');
            do{
                profit = +prompt('Во сколько обходится?');
            }
            while(!isNumber(profit));
            sum +=profit;
        }
        return sum;
    },
    getAccumulatedMonth :function(){
        return money - expensesMonth;
    },
    getTargetMonth : function(){
        return appData.mission / accumulatedMonth;
    },
    getStatusIncome : function(budjetDay){
        if (budjetDay > 1200){
            return('У вас высокий уровень дохода');
        } else if (budjetDay<=1200 && budjetDay>=600){
            return('У вас средний уровень дохода');
        } else if (budjetDay < 600){
            return('К сожалению у вас уровень дохода ниже среднего');
        }
    }
};

appData.asking();

let expensesMonth = appData.getExpensesMonth();

console.log('Расходы за месяц: ' + expensesMonth);

let accumulatedMonth = appData.getAccumulatedMonth();

console.log(accumulatedMonth + '-ваш доход с учетом затрат');

if (appData.getTargetMonth() < 0){
    console.log('Цель достигнута не будет');
}else{
    console.log('Вы можете достичь цели примерно за ' + Math.ceil(appData.getTargetMonth()) + 'месяца(ев)');
}

let budjetDay = accumulatedMonth / 30;
console.log(budjetDay + '-ваш бюджет на день');

console.log(appData.getStatusIncome(budjetDay));
