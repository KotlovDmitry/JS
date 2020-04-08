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
let amount = 0;
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
            
            for (let i=0; i<2; i++){
                let sum;
                let message = prompt('Введите статью расходов');
                do{
                    sum = +prompt('Во сколько обходится?', '');
                }
                while(!isNumber(sum));
                amount += sum;
                appData.expenses[message] = sum;
            }
            console.log(amount);
            return amount;
    },
    profit : 0,
    budjet : money,
    budjetDay : 0,
    budjetMonth : 0,
    expensesMonth : 0,
    getExpensesMonth : function(){
        for (let i in appData.expenses){
            appData.expensesMonth += +appData.expenses[i]
        }
        return appData.expensesMonth;
    },
    getAccumulatedMonth :function(){
        return money - amount;
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
console.log(appData.expenses);
