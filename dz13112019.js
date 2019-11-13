
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

for (let i=1; i<2;i++)

{
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let  b = +prompt("Во сколько обойдется", 0);

    if (
    typeof(a) === 'string' 
    && typeof(a) != null 
    && typeof(b) != null
    && a != ''
    && b != ''
    && a.length <50
    )
            {
            console.log("ok");
            appData.expenses[a] = b;
            }
   
    else{
        alert("статья расходов не может быть цифрой, повторите ввод");
        i--;
    }
} 
console.log(appData);