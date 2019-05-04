let myAccount = {
    name: 'Artyom Vecherov',
    expenses: 0,
    income: 0
};

function addExpense(account, amount) {
    account.expenses += amount;
}

function addIncome(account, amount) {
    account.income += amount;
}

function resetAccount(account) {
    account.expenses = 0;
    account.income = 0;
}

function getAccountSummary(account) {
    return `Income: ${account.income}, expenses: ${account.expenses}`;
}

addExpense(myAccount, 2.50);
console.log(getAccountSummary(myAccount));