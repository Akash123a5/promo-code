let subtotal = 100;
let discount = localStorage.getItem("discount") ? parseFloat(localStorage.getItem("discount")) : 0;
let appliedPromo = localStorage.getItem("appliedPromo") ? true : false;

function applyPromo() {
    if (appliedPromo) {
        showMessage("Promo code already used!", "text-danger");
        return;
    }

    let promoInput = document.getElementById("promoCode").value.trim();
    if (promoInput === "ostad10") {
        discount = subtotal * 0.10;
    } else if (promoInput === "ostad5") {
        discount = subtotal * 0.05;
    } else {
        showMessage("Invalid promo code!", "text-danger");
        return;
    }

    let finalTotal = subtotal - discount;

    // লোকাল স্টোরেজে সংরক্ষণ
    localStorage.setItem("discount", discount);
    localStorage.setItem("finalTotal", finalTotal);
    localStorage.setItem("appliedPromo", true);

    updateUI();
    showMessage("Promo code applied successfully!", "text-success");
}

function updateUI() {
    let savedDiscount = localStorage.getItem("discount") ? parseFloat(localStorage.getItem("discount")) : 0;
    let savedFinalTotal = localStorage.getItem("finalTotal") ? parseFloat(localStorage.getItem("finalTotal")) : subtotal;

    document.getElementById("discount").textContent = savedDiscount.toFixed(2);
    document.getElementById("finalTotal").textContent = savedFinalTotal.toFixed(2);
}

// পেজ লোড হলে ডিসকাউন্ট দেখানোর জন্য
document.addEventListener("DOMContentLoaded", updateUI);

function showMessage(message, className) {
    document.getElementById("promoMessage").innerHTML = `<p class="${className} fw-bold">${message}</p>`;
    let promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
    promoModal.show();
}
