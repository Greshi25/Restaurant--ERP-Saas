const categoryButtons = document.querySelectorAll(".cat-btn");
const items = document.querySelectorAll("#items-section .item");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", function() {

    categoryButtons.forEach(b => b.classList.remove("active"));
    this.classList.add("active");

    let selectedCategory = this.getAttribute("data-category");

    items.forEach(item => {
      if (selectedCategory === "all" || item.getAttribute("data-category") === selectedCategory) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  items.forEach(item => item.classList.add("show"));
});

document.getElementById("search").addEventListener("keyup", function() {
  let query = this.value.toLowerCase();
  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
});

document.querySelector(".complete-btn").addEventListener("click", function() {
  let total = document.getElementById("total-amount").value;
  let method = document.getElementById("payment-method").value;
  let amount = document.getElementById("pay-amount").value;

  if (total === "" || amount === "" || amount <= 0) {
    alert("⚠️ Please enter valid total and amount!");
    return;
  }

  alert("✅ Payment of Rs " + amount + " completed via " + method.toUpperCase() +
        "\nTotal Bill: Rs " + total);
});

document.querySelector(".split-btn").addEventListener("click", function() {
  let amount = document.getElementById("pay-amount").value;

  if (amount === "" || amount <= 0) {
    alert("⚠️ Please enter a valid amount to split!");
    return;
  }

  let half = (amount / 2).toFixed(2);
  alert("💰 Split Payment: Rs " + half + " + Rs " + half);
});
