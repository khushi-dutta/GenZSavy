const balance = document.getElementById("balance");
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const list = document.getElementById("list");
const incomeForm = document.getElementById("income-form");
const expenseForm = document.getElementById("expense-form");
const incomeText = document.getElementById("income-text");
const incomeAmount = document.getElementById("income-amount");
const incomeDate = document.getElementById("income-date");
const expenseText = document.getElementById("expense-text");
const expenseAmount = document.getElementById("expense-amount");
const expenseDate = document.getElementById("expense-date");
const expenseCategory = document.getElementById("expense-category");

let transactions = [];

function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

function addIncome(e) {
  e.preventDefault();

  const transaction = {
    id: generateID(),
    text: incomeText.value,
    amount: +incomeAmount.value,
    date: incomeDate.value,
  };

  transactions.push(transaction);

  addTransactionDOM(transaction);

  updateValues();

  incomeText.value = "";
  incomeAmount.value = "";
  incomeDate.value = "";
}

function addExpense(e) {
  e.preventDefault();

  const transaction = {
    id: generateID(),
    text: expenseText.value,
    amount: -Math.abs(+expenseAmount.value),
    date: expenseDate.value,
    category: expenseCategory.value,
  };

  transactions.push(transaction);

  addTransactionDOM(transaction);

  updateValues();

  expenseText.value = "";
  expenseAmount.value = "";
  expenseDate.value = "";
  expenseCategory.value = "";
}

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const item = document.createElement("li");
  const sign = transaction.amount < 0 ? "expense" : "income";

  item.innerHTML = `
        <span></span>
        <span>${transaction.text}</span>
        <span>${formatAmount(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${
          transaction.id
        })">x</button>
    `;

  item.querySelector("span").style.backgroundColor =
    sign === "income" ? "green" : "red";

  item.classList.add(sign);

  list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = Math.abs(
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);
  const balanceTotal = (income - expense).toFixed(2);

  balance.innerText = `₹${balanceTotal}`;
  totalIncome.innerText = `+₹${income}`;
  totalExpense.innerText = `-₹${expense}`;
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  init();
}

function formatAmount(amount) {
  return `₹${Math.abs(amount).toFixed(2)}`;
}

incomeForm.addEventListener("submit", addIncome);
expenseForm.addEventListener("submit", addExpense);

init();
