// Récupérer les éléments HTML
const honeyType = document.getElementById("honeyType");
const priceSpan = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const orderForm = document.getElementById("orderForm");

// Mettre à jour le prix automatiquement selon le type de miel
honeyType.addEventListener("change", function() {
    priceSpan.textContent = honeyType.value;
});

// Quand on soumet le formulaire
orderForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pricePerKg = parseFloat(honeyType.value);
    const quantity = parseFloat(quantityInput.value);

    if(isNaN(quantity) || quantity <= 0){
        alert("الرجاء إدخال كمية صحيحة أكبر من صفر");
        return;
    }

    const total = pricePerKg * quantity;

    alert(`تم استلام طلبك 🍯\nالاسم: ${name}\nالهاتف: ${phone}\nنوع العسل: ${honeyType.options[honeyType.selectedIndex].text}\nالكمية: ${quantity} كغ\nالمجموع: ${total} درهم`);

    // Ici tu peux ajouter le code pour envoyer sur Telegram si tu veux
});

 

