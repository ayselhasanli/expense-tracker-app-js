var expenseType = document.getElementById("type");
var expenseDate = document.getElementById("date");
var expenseName = document.getElementById("name");
var expenseAmount = document.getElementById("amount");

var expenseTable = document.getElementById("expenseTable");

var btn = document.getElementById("addBtn");

var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const setArraytoLocal = () => {
  expenses.push({
    type: expenseType.value,
    date: expenseDate.value,
    name: expenseName.value,
    amount: expenseAmount.value,
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));
};

btn.onclick = setArraytoLocal;

console.log(expenses)

expenses.forEach((expense) => {
  expenseTable.innerHTML = `
    <tr>
              <td>${expense.type}</td>
              <td>${expense.name}</td>
              <td>${expense.date}</td>
              <td>${expense.amount}</td>
            </tr>
`;
});


