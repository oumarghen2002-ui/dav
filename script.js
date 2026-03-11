const honeyType = document.getElementById("honeyType");
const honeyImage = document.getElementById("honeyImage");
const priceSpan = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalSpan = document.getElementById("total");
const orderForm = document.getElementById("orderForm");

// Mettre à jour l'image et le prix
honeyType.addEventListener("change", () => {
    const selectedOption = honeyType.options[honeyType.selectedIndex];
    honeyImage.src = selectedOption.dataset.img;
    honeyImage.alt = selectedOption.text;
    priceSpan.textContent = selectedOption.dataset.price;
    calculateTotal();
});

// Calculer le total
quantityInput.addEventListener("input", calculateTotal);

function calculateTotal() {
    const price = parseFloat(priceSpan.textContent);
    const quantity = parseFloat(quantityInput.value);
    totalSpan.textContent = (!isNaN(quantity) && quantity > 0) ? (price * quantity).toFixed(2) : 0;
}

// Soumettre le formulaire
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const honeyName = honeyType.options[honeyType.selectedIndex].text;
    const pricePerKg = parseFloat(priceSpan.textContent);
    const quantity = parseFloat(quantityInput.value);
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const total = pricePerKg * quantity;

    alert(`تم استلام طلبك 🍯
الاسم: ${name}
الهاتف: ${phone}
نوع العسل: ${honeyName}
الكمية: ${quantity} كغ
المجموع: ${total} درهم
الدفع عند الاستلام`);
});
 


 

