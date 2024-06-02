var expenseType = document.getElementById("type");
var expenseDate = document.getElementById("date");
var expenseName = document.getElementById("name");
var expenseAmount = document.getElementById("amount");
var expenseTable = document.getElementById("expenseTable");
var addBtn = document.getElementById("addBtn");

var expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//add

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
    console.log("localstorage added")
  }
};

expenses.forEach((expense) => {
  const tr = document.createElement("tr");
  console.log("tr created");
  tr.innerHTML = `
    <tr>
              <td>${expense.type}</td>
              <td>${expense.name}</td>
              <td>${expense.date}</td>
              <td>${expense.amount}</td>
              <td class="expense-options">
                  <button onclick="editExpense()"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button  id=${expense.id} onclick="deleteExpense(this)"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
`;

  expenseTable.appendChild(tr);

  console.log("tr appended")
});

addBtn.onclick = addExpense;

//delete

const deleteExpense = (element) => {
  const expenseRow = element.parentNode.parentNode;
  expenseRow.remove();

  expenses.forEach((expense) => {
    if (expense.id == element.id) {
      const index = expenses.indexOf(expense)
      expenses.splice(index, 1)
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  });
};

//edit

const editExpense = () => {
  console.log("edit");
};
