// script.js

// Récupérer les éléments HTML
let honeySelect = document.getElementById("honeyType");
let priceDisplay = document.getElementById("price");
let quantitySelect = document.getElementById("quantity");
let orderForm = document.getElementById("orderForm");

// Mettre à jour le prix automatiquement selon le type de miel
honeySelect.addEventListener("change", function() {
    priceDisplay.textContent = honeySelect.value;
});

// Envoyer la commande sur Telegram
orderForm.addEventListener("submit", function(e){
    e.preventDefault(); // Empêche le rechargement de la page

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let quantity = parseFloat(quantitySelect.value); // convertir en nombre
    let honeyTypeText = honeySelect.options[honeySelect.selectedIndex].text;
    let price = parseFloat(honeySelect.value); // convertir en nombre
    let total = quantity * price;

    let message = `Nouvelle commande 🍯\nNom: ${name}\nTel: ${phone}\nType: ${honeyTypeText}\nQuantité: ${quantity} kg\nPrix total: ${total} DH`;

    let token = "TON_BOT_TOKEN";    // ton bot Telegram
    let chat_id = "TON_CHAT_ID";    // ton chat ID
    let url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({chat_id: chat_id, text: message})
    })
    .then(() => alert("Commande envoyée !"))
    .catch(err => alert("Erreur : " + err));
});

 

