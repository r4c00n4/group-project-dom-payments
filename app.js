/**
 * The code to fetch the payments data has already been written
 * for you below. To complete this group project, your group
 * will need to write code to make this app do the following:
 *
 * 1. Show the current balance based on the initial balance and
 *    any completed payments. Each completed payment will add to
 *    the balance.
 * 2. Add the payments to the table. Each payment should show
 *    the date of the payment, its status (whether is pending or
 *    complete), the description, the amount, and the balance
 *    after that payment was completed.
 *
 *    Pending payments should appear with a pink background.
 *    This can be applied by adding the `pending` class to the
 *    table row (`<tr>`) for each pending payment.
 * 3. Show what the balance will be after pending payments are
 *    completed.
 * 4. Show the total income of all payments that were received
 *    this month (May, 2019), including pending payments.
 * 5. Show the amount of the most valuable payment that was
 *    received this month (May 2019).
 * 6. For each PENDING payment, add a button that says "cancel"
 *    to the end of that payment's row. When the button is
 *    clicked, the payment should be removed from the account
 *    and the render function should be called again to update
 *    the page.
 */

/**
 * This is the account details that you will use with this
 * exercise.
 *
 * Do not edit this code.
 */
let account = {
  number: 100402153,
  initialBalance: 100,
  payments: []
};
function isItCompleted(payment) {
  if (payment.completed) {
    return true;
  }
  return false;
}
let currentbalance = document.getElementById("balanceAmount");
currentbalance.innerText = "£" + account.initialBalance;

let allAccountPayments = loadPayments();
let completedPayments = allAccountPayments.filter(isItCompleted);

let amounts = completedPayments.map(function(payments) {
  return payments.amount;
});

let initialValue = 0;
for (var i = 0; i < amounts.length; i++) {
  initialValue = initialValue + amounts[i];
}

let allPaymentsTogether = initialValue + account.initialBalance;
currentbalance.innerText = "£" + allPaymentsTogether;

function addRow(row) {
  let tableRow = document.createElement("tr");

  let dateTableData = document.createElement("td");
  dateTableData.innerText = row.date;

  let paymentsList = document.querySelector("#paymentsList");
  paymentsList.appendChild(tableRow);
  tableRow.appendChild(dateTableData);

  let statusTableData = document.createElement("td");
  if (row.completed === true) {
    statusTableData.innerText = "Completed";
  } else if (row.completed === false) {
    tableRow.className = "pending";
    statusTableData.innerText = "Pending";
  }
  tableRow.appendChild(statusTableData);

  let descriptionTableData = document.createElement("td");
  descriptionTableData.innerText = row.description;
  tableRow.appendChild(descriptionTableData);

  let amountTableData = document.createElement("td");
  amountTableData.innerText = "£" + row.amount;
  tableRow.appendChild(amountTableData);
}

for (var i = 0; i < allAccountPayments.length; i++) {
  addRow(allAccountPayments[i]);
}

let allThePayments = allAccountPayments.map(function(payments) {
  return payments.amount;
});

let totalBalance = 0;
for (var i = 0; i < allThePayments.length; i++) {
  totalBalance = totalBalance + allThePayments[i];
}

let totalAmount = account.initialBalance + totalBalance;
balanceAfterPendingPaymentIsCompleted = document.querySelector(
  "#pendingBalance"
);
balanceAfterPendingPaymentIsCompleted.innerText = "£" + totalAmount;

// let balanceAfterPaymentIsCompleted=document.querySelector("#pendingBalance");
// balanceAfterPaymentIsCompleted.innerText=

/* for each item of array, call the the addrow 
// let TableData=document.createElement("td");
// TableData.innerText="";






/**
 * The code below has been written for you. When the "Load"
 * button is clicked, it will get the payments details, assign
 * them to the account variable, and call the render function
 * to update details in the DOM.
 *
 * You may edit this code.
 */
document.querySelector("#loadButton").addEventListener("click", function() {
  const payments = loadPayments();
  account.payments = payments;
  render(account);
});

/**
 * Write a render function below that updates the DOM with the
 * account details.
 *
 * EVERY update to the DOM should be contained in this
 * function so that you can call it over and over again
 * whenever there is an update to the account details.
 *
 * We have completed one of the DOM updates already by
 * entering the account number on the page.
 *
 * @param {Object} account The account details
 */
function render(account) {
  // Display the account number
  document.querySelector("#accountNumber").innerText = account.number;
}

/**
 * Write any additional functions that you need to complete
 * the group project in the space below.
 *
 * For example, you might want to have functions that
 * calculate balances, find completed or pending payments,
 * add up payments, and more.
 */

/**
 * This is the function that loads the payments
 *
 * Do not edit this code.
 */

function loadPayments() {
  return [
    {
      date: "2019-05-30",
      description: "Lorem ipsum dolor sit amet",
      amount: 29.23,
      completed: true
    },
    {
      date: "2019-05-26",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor",
      amount: 19.72,
      completed: true
    },
    {
      date: "2019-05-22",
      description: "Duis aute irure dolor in reprehenderit",
      amount: 4.12,
      completed: true
    },
    {
      date: "2019-05-21",
      description: "Quis nostrud exercitation ullamco laboris nisi",
      amount: 94.21,
      completed: false
    },
    {
      date: "2019-05-15",
      description: "Excepteur sint occaecat cupidatat non proident",
      amount: 12.68,
      completed: true
    },
    {
      date: "2019-05-12",
      description: "Sunt in culpa qui officia deserunt mollit anim",
      amount: 87.93,
      completed: true
    },
    {
      date: "2019-05-04",
      description: "Ut enim ad minim veniam, quis nostrud",
      amount: 45.17,
      completed: true
    },
    {
      date: "2019-05-01",
      description: "Sed do eiusmod tempor incididunt ut labore",
      amount: 23.12,
      completed: true
    },
    {
      date: "2019-04-26",
      description: "Exercitation ullamco laboris nisi ut",
      amount: 102.21,
      completed: true
    },
    {
      date: "2019-04-22",
      description: "Reprehenderit in voluptate velit esse cillum",
      amount: 9.48,
      completed: true
    },
    {
      date: "2019-04-13",
      description: "Tempor incididunt ut labore et dolore",
      amount: 13.73,
      completed: true
    },
    {
      date: "2019-04-07",
      description: "Commodo consequat duis aute irure dolor",
      amount: 56.21,
      completed: true
    }
  ];
}
