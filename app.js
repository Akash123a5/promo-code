let subtotal = 100;
let discount = 0;
let appliedPromo = false;

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
    document.getElementById("discount").textContent = discount.toFixed(2);
    document.getElementById("finalTotal").textContent = finalTotal.toFixed(2);
    showMessage("Promo code applied successfully!", "text-success");
    appliedPromo = true;
}

function showMessage(message, className) {
    document.getElementById("promoMessage").innerHTML = `<p class="${className} fw-bold">${message}</p>`;
    let promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
    promoModal.show();
}