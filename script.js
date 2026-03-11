const honeyType = document.getElementById("honeyType");
const honeyImage = document.getElementById("honeyImage");
const priceSpan = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalSpan = document.getElementById("total");
const orderForm = document.getElementById("orderForm");

// Ton bot Telegram
const token = "8639610296:AAGy5gW7YETL3aK9wi2wtauv8kcjm7IHhyw"; // remplace par ton token
const chat_id = "8526019135"; // ton chat ID

// Mettre à jour l'image et le prix selon le miel sélectionné
honeyType.addEventListener("change", () => {
    const selected = honeyType.options[honeyType.selectedIndex];
    honeyImage.src = selected.dataset.img;
    honeyImage.alt = selected.text;
    priceSpan.textContent = selected.dataset.price;
    calculateTotal();
});

// Calcul du total en fonction de la quantité
quantityInput.addEventListener("input", calculateTotal);

function calculateTotal() {
    const price = parseFloat(priceSpan.textContent);
    const quantity = parseFloat(quantityInput.value);
    totalSpan.textContent = (!isNaN(quantity) && quantity > 0) ? (price * quantity).toFixed(2) : 0;
}

// Soumission du formulaire
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedHoney = honeyType.options[honeyType.selectedIndex].text;
    const pricePerKg = parseFloat(priceSpan.textContent);
    const quantity = parseFloat(quantityInput.value);
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const total = pricePerKg * quantity;

    // Message pour Telegram
    const message = `تم استلام طلبك 🍯\nالاسم: ${name}\nالهاتف: ${phone}\nنوع العسل: ${selectedHoney}\nالكمية: ${quantity} كغ\nالمجموع: ${total} درهم\nالدفع عند الاستلام`;

    // Envoyer la commande sur Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({chat_id: chat_id, text: message})
    })
    .then(() => alert("تم إرسال الطلب على Telegram!"))
    .catch(err => alert("حدث خطأ: " + err));
});
 
 


 

