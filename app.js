// Declartions
let income = document.querySelector(".income");
let expense = document.querySelector(".spent");
let mainDiv = document.getElementsByClassName("income-spent");
// Balance Chart

// Balance income/expense
income.addEventListener("click", function () {
  expense.classList.remove("active");
  income.classList.add("active");
});

expense.addEventListener("click", function () {
  income.classList.remove("active");
  expense.classList.add("active");
});
