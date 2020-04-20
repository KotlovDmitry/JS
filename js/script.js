'use strict';

let start = document.getElementById('start');
let btnPlus = document.getElementsByTagName('button');
let incomePlus = btnPlus[0];
let expensesPlus = btnPlus[1];
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let depositCheck = document.querySelector('#deposit-check');
let budjetDayValue = document.getElementsByClassName('budjet_day-value')[0];
let budjetMonthValue = document.getElementsByClassName('budjet_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelectorAll('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpenses = document.querySelectorAll('.additional-expenses');
let periodSelect = document.querySelector('.period-select');

let money;
start = function(){
    do {
        money = prompt('Ваш доход за месяц?', 30000);
    }
    while (isNaN(money) || money==='' || money===null);
};

start();
let appData = {
    budjet: money,
    budjetMonth : 0,
    budjetDay : 0,
    income : {},
    addIncome : [],
    expenses : {},
    addExpenses : [],
    expensesMonth: 0,
    deposit : false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission : 1000000,
    period : 12,
    asking : function(){
        if (confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой?', 'Фриланс');
            let cashIncome;
            do{
                cashIncome = prompt('Сколько зарабатываете?',10000 );
            }
            while(isNaN(cashIncome) || cashIncome==='' || cashIncome===null);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            
            for (let i=0; i<2; i++){
                let itemExpenses = prompt('Введите статью расходов');
                let sum;
                do{
                    sum = prompt('Во сколько обходится?');
                }
                while(isNaN(sum) || sum==='' || sum===null);
                appData.expenses[itemExpenses] = +sum;
            }
            let newAddExpenses = '';
            for (let i = 0; i < addExpenses.length; i++) {
                newAddExpenses += (addExpenses[i - 1] == ' ') ? addExpenses[i].toUpperCase() : addExpenses[i];
            }
            console.log(newAddExpenses);
    },
    
    getInfoDeposit : function(){
        appData.deposit = confirm('Есть ли у вас счет в банке?');
        if (appData.deposit){
            appData.percentDeposit = prompt('Каков годовой процент?', '10');
            do{
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit==='' || appData.moneyDeposit===null);
        }
    },

    getExpensesMonth : function(){
        for (let i in appData.expenses){
            appData.expensesMonth += +appData.expenses[i];
        }
    },
    
    getBudjet :function(){
        appData.budjetMonth = appData.budjet - appData.expensesMonth;
        appData.budjetDay = Math.floor(appData.budjetMonth / 30);
    },

    getTargetMonth : function(){
        return appData.mission / appData.budjetMonth;
    },

    getStatusIncome : function(){
        if (appData.budjetDay > 1200){
            return('У вас высокий уровень дохода');
        } else if (appData.budjetDay<=1200 && appData.budjetDay>=600){
            return('У вас средний уровень дохода');
        } else if (appData.budjetDay < 600){
            return('К сожалению ваш уровень дохода ниже среднего');
        } else {
            return 'Пожалуйста, перепроверьте введенные числа';
        }
    },
   
    calcSavedMoney : function(){
        return appData.budjetMonth * appData.period;
    },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudjet();
//console.log(appData.budjetMonth);
//console.log(appData.budjetDay);
console.log('Расходы за месяц:' + appData.expensesMonth);

if (appData.time < 0){
    console.log('Цель достигнута не будет');
}else{
    console.log('Вы можете достичь цели примерно за ' + Math.ceil(appData.getTargetMonth()) + 'месяца(ев)');
}
console.log(appData.getStatusIncome());

for (let key in appData){
    console.log('Наша программа включает в себя данные:' + key + ' ' + appData[key]);
}
appData.getInfoDeposit();