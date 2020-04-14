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
    amount : 0,
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
                appData.amount += sum;
                appData.expenses[message] = sum;
            }
            console.log(appData.amount);
            return appData.amount;
    },
    profit : 0,
    budjet : money,
    
    getExpensesMonth : function(){
        for (let i in appData.expenses){
            appData.expensesMonth += +appData.expenses[i];
        }
        return appData.expensesMonth;
    },
    budjetMonth : 0,
    budjetDay : 0,
    getBudjet :function(){
        appData.budjetMonth = money - appData.amount;
        appData.budjetDay = appData.budjetMonth / 30;
    },
    time : 0,
    getTargetMonth : function(){
        appData.time = appData.mission / appData.budjetMonth;
        if (appData.time < 0){
            return('Цель достигнута не будет');
        }else{
            return('Вы можете достичь цели примерно за ' + Math.ceil(appData.time) + 'месяца(ев)');
        }
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
appData.getBudjet();
console.log(appData.budjetMonth);
console.log(appData.budjetDay);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome(appData.budjetDay));

console.log('Наша программа включает в себя данные:');
for (let i in appData){
        console.log(i);
}