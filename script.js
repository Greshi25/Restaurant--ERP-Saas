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


let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateBill();
}

function updateBill() {
  let billTable = document.querySelector(".bill-table tbody");
  billTable.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let row = `<tr>
                 <td>${item.name}</td>
                 <td>${item.price}</td>
               </tr>`;
    billTable.innerHTML += row;
    total += item.price;
  });

  document.getElementById("total-amount").value = total;
}

document.querySelector(".complete-btn").addEventListener("click", function() {
  let total = document.getElementById("total-amount").value;
  let method = document.getElementById("payment-method").value;
  let amount = document.getElementById("pay-amount").value;

  if (cart.length === 0) {
    alert("⚠️ No products added to bill!");
    return;
  }

  if (amount != total) {
    alert("⚠️ Payment amount must equal total bill!");
    return;
  }

  alert("Payment of Rs " + total + " completed via " + method.toUpperCase());
});

document.querySelector(".split-btn").addEventListener("click", function() {
  let total = document.getElementById("total-amount").value;

  if (cart.length === 0) {
    alert("No products added to bill!");
    return;
  }

  let half = (total / 2).toFixed(2);
  alert("Split Payment:\nUPI: Rs " + half + "\nCard: Rs " + half);
});
