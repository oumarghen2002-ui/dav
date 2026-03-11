const honeyType = document.getElementById("honeyType")
const honeyImage = document.getElementById("honeyImage")
const priceSpan = document.getElementById("price")
const quantityInput = document.getElementById("quantity")
const totalSpan = document.getElementById("total")
const orderForm = document.getElementById("orderForm")

const token="8639610296:AAGy5gW7YETL3aK9wi2wtauv8kcjm7IHhyw"
const chat_id="8526019135"

function updateHoney(){

const selected=honeyType.options[honeyType.selectedIndex]

honeyImage.src=selected.dataset.img
priceSpan.textContent=selected.dataset.price

}

honeyType.addEventListener("change",updateHoney)

updateHoney()

quantityInput.addEventListener("input",()=>{

const price=parseFloat(priceSpan.textContent)
const q=parseFloat(quantityInput.value)

if(!isNaN(q))
totalSpan.textContent=(price*q).toFixed(2)

})

orderForm.addEventListener("submit",(e)=>{

e.preventDefault()

const name=document.getElementById("name").value
const phone=document.getElementById("phone").value
const honey=honeyType.options[honeyType.selectedIndex].text
const quantity=quantityInput.value
const total=totalSpan.textContent

const message=`طلب عسل جديد 🍯
الاسم: ${name}
الهاتف: ${phone}
النوع: ${honey}
الكمية: ${quantity} كغ
المجموع: ${total} درهم
الدفع عند الاستلام`

fetch(`https://api.telegram.org/bot${token}/sendMessage`,{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({

chat_id:chat_id,
text:message

})

})

alert("تم إرسال الطلب بنجاح")

})
 


 

