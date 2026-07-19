const SCRIPT_URL="https://script.google.com/macros/s/AKfycbxuvCSeENkram7bF3apVtTQBdWaQ8KFCA7BmFxDzUqwtxUxHvroAqfE-9RwzYv9N2aRqQ/exec";

document
.getElementById("orderForm")
.addEventListener("submit",function(e){

e.preventDefault();

const form=e.target;

const data={

name:form.name.value,

email:form.email.value,

phone:form.phone.value,

address:form.address.value,

city:form.city.value,

state:form.state.value,

pincode:form.pincode.value,

quantity:form.quantity.value,

transaction:form.transaction.value

};

fetch(SCRIPT_URL,{

method:"POST",

body:JSON.stringify(data)

})
.then(res=>res.json())
.then(()=>{

window.location="success.html";

});

});
