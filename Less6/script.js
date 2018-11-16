let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	itog = "Бюджет составит -"


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.rashod1 = a1+":"+a2;
appData.expenses.rashod2 = a3+":"+a4;

alert("Бюджет -" + appData.budget/30);

console.log(typeof(appData.budget));
console.log(appData.budget);
console.log(appData.expenses.rashod1);
console.log(appData.expenses.rashod2);