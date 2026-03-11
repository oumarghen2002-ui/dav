const honeyType = document.getElementById("honeyType");
const honeyImage = document.getElementById("honeyImage");
const priceSpan = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalSpan = document.getElementById("total");
const orderForm = document.getElementById("orderForm");

// Changer image et prix selon le type de miel
honeyType.addEventListener("change", () => {
    const selectedOption = honeyType.options[honeyType.selectedIndex];
    honeyImage.src = selectedOption.dataset.img;
    honeyImage.alt = selectedOption.text;
    priceSpan.textContent = selectedOption.value;
    calculateTotal();
});

// Calculer le total quand la quantité change
quantityInput.addEventListener("input", calculateTotal);

function calculateTotal() {
    const price = parseFloat(priceSpan.textContent);
    const quantity = parseFloat(quantityInput.value);
    if(!isNaN(quantity) && quantity > 0){
        totalSpan.textContent = (price * quantity).toFixed(2);
    } else {
        totalSpan.textContent = 0;
    }
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

 


 

