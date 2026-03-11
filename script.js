const honeyType = document.getElementById("honeyType");
const priceSpan = document.getElementById("price");
const honeyImage = document.getElementById("honeyImage");
const orderForm = document.getElementById("orderForm");
const quantityInput = document.getElementById("quantity");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

// Changer l'image et le prix selon le choix
honeyType.addEventListener("change", () => {
    const selectedOption = honeyType.options[honeyType.selectedIndex];
    const price = selectedOption.value;
    const img = selectedOption.dataset.img;

    priceSpan.textContent = price;
    honeyImage.src = img;
    honeyImage.alt = selectedOption.text;
});

// Soumettre le formulaire
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const honeyName = honeyType.options[honeyType.selectedIndex].text;
    const pricePerKg = parseFloat(honeyType.value);
    const quantity = parseFloat(quantityInput.value);
    const name = nameInput.value;
    const phone = phoneInput.value;

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
 


 

