// Changer le prix automatiquement selon le type de miel
let honeySelect = document.getElementById("honeyType");
let priceDisplay = document.getElementById("price");

honeySelect.addEventListener("change", function() {
    priceDisplay.textContent = honeySelect.value;
});

// Envoyer la commande sur Telegram
document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let quantity = document.getElementById("quantity").value;
    let honeyTypeText = honeySelect.options[honeySelect.selectedIndex].text;
    let price = honeySelect.value;

    let total = quantity * price;

    let message = `Nouvelle commande 🍯\nNom: ${name}\nTel: ${phone}\nType: ${honeyTypeText}\nQuantité: ${quantity}\nPrix total: ${total} DH`;

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
