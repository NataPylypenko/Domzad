
let money =+prompt("Ваш бюджет на месяц,",0);
let time =prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

let appData ={
    moneyData:money,
    timeData: 0,
    expenses: {

    },
    optionalExpenses:{
        
    },
    income:0,
    savings:0,
};

question1 = prompt("Введите обязательную статью расходов в этом месяце");
question2 = +prompt("Во сколько обойдется", 0);
question1_2 = prompt("Введите обязательную статью расходов в этом месяце");
question2_2 = +prompt("Во сколько обойдется", 0);


appData.expenses.question1=question1;
appData.expenses.question2=question2;
appData.expenses.question1_2=question1_2;
appData.expenses.question2_2=question2_2;


console.log(appData.moneyData/30);
