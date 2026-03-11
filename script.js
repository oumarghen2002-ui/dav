const honeyType = document.getElementById("honeyType");
const priceSpan = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const orderForm = document.getElementById("orderForm");
const honeyImage = document.getElementById("honeyImage");

// Changer le prix et l'image automatiquement selon le type de miel
honeyType.addEventListener("change", function() {
    const price = parseFloat(honeyType.value);
    priceSpan.textContent = price;

    const imgSrc = honeyType.options[honeyType.selectedIndex].dataset.img;
    honeyImage.src = imgSrc;
    honeyImage.alt = honeyType.options[honeyType.selectedIndex].text;
});

// Quand on soumet le formulaire
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const pricePerKg = parseFloat(honeyType.value);
    const quantity = parseFloat(quantityInput.value);

    if(isNaN(quantity) || quantity <= 0){
        alert("الرجاء إدخال كمية صحيحة أكبر من صفر");
        return;
    }

    const total = pricePerKg * quantity;

    alert(`تم استلام طلبك 🍯
الاسم: ${name}
الهاتف: ${phone}
نوع العسل: ${honeyType.options[honeyType.selectedIndex].text}
الكمية: ${quantity} كغ
المجموع: ${total} درهم
الدفع عند الاستلام`);
});
 


 

