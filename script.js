const orderButtons = document.querySelectorAll(".orderBtn");
const orderFormContainer = document.getElementById("orderFormContainer");
const honeyImage = document.getElementById("honeyImage");
const priceSpan = document.getElementById("price");
const orderForm = document.getElementById("orderForm");
const quantityInput = document.getElementById("quantity");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

// Quand on clique sur "طلب" sur un miel
orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = button.dataset.price;
        const name = button.dataset.name;
        const img = button.dataset.img;

        honeyImage.src = img;
        honeyImage.alt = name;
        priceSpan.textContent = price;

        // Réinitialiser le formulaire
        quantityInput.value = "";
        nameInput.value = "";
        phoneInput.value = "";

        // Afficher le formulaire
        orderFormContainer.classList.remove("hidden");
        orderFormContainer.scrollIntoView({ behavior: "smooth" });
    });
});

// Soumettre le formulaire
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const quantity = parseFloat(quantityInput.value);
    const name = nameInput.value;
    const phone = phoneInput.value;
    const pricePerKg = parseFloat(priceSpan.textContent);
    const honeyName = honeyImage.alt;

    if(isNaN(quantity) || quantity <= 0){
        alert("الرجاء إدخال كمية صحيحة أكبر من صفر");
        return;
    }

    const total = pricePerKg * quantity;

    alert(`تم استلام طلبك 🍯
الاسم: ${name}
الهاتف: ${phone}
نوع العسل: ${honeyName}
الكمية: ${quantity} كغ
المجموع: ${total} درهم
الدفع عند الاستلام`);
});
 


 

