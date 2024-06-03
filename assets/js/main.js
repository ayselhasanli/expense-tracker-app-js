var expenseType = document.getElementById("type");
var expenseDate = document.getElementById("date");
var expenseName = document.getElementById("name");
var expenseAmount = document.getElementById("amount");
var expenseTable = document.getElementById("expenseTable");
var addBtn = document.getElementById("addBtn");

var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//add to localstorage

const addExpense = () => {
  if (
    expenseType.value !== "chooseOne" &&
    expenseDate.value &&
    expenseName &&
    expenseAmount
  ) {
    expenses.push({
      id: Math.floor(Math.random() * (1000000 - 100000) + 100000),
      type: expenseType.value,
      date: expenseDate.value,
      name: expenseName.value,
      amount: expenseAmount.value,
    });
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
};

addBtn.onclick = addExpense;

//add to UI

expenses.forEach((expense) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <tr>
              <td>${expense.type}</td>
              <td>${expense.name}</td>
              <td>${expense.date}</td>
              <td>${expense.amount}</td>
              <td class="expense-options">
                  <button id=${expense.id} onclick="deleteExpense(this)"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
`;
  expenseTable.appendChild(tr);
});

// delete from storage&UI

const deleteExpense = (element) => {
  const expenseRow = element.parentNode.parentNode;
  expenseRow.remove();

  expenses.forEach((expense) => {
    if (expense.id === +element.id) {
      expenses.splice(expenses.indexOf(expense), 1);
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  });
};

