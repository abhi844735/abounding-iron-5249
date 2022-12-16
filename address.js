import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("heading");
nav_div.innerHTML = navbar();

import footer from "./Component/footer.js";
let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();



document.getElementById("set_btn").addEventListener("click",function(){
    
    let data=[];
    let Name1=document.querySelector("#first_name").value;
    let Name2=document.querySelector("#last_name").value;
data.push(Name1+Name2);
let contact=document.querySelector("#contact").value;
data.push(contact);
let area=document.querySelector("#area").value;
data.push(area);

let house=document.querySelector("#house").value;
data.push(house);
let pin=document.querySelector("#pin").value;
data.push(pin);
localStorage.setItem("address",JSON.stringify(data));
if(Name1==""||Name2==""){
  alert("Please fill your name")
}else if(contact==""){
  alert("Please fill your contact number")
}else if(area==""){
    alert("Please fill area detail")
}else if(house==""){
  alert("Please fill your House Number")
}else if(pin==""){
  alert("Please fill your pin code")
}else{
    alert("address is successfully saved")
    //window.location.href="payment.html"
}
})


let cart_data=JSON.parse(localStorage.getItem("cart_items"))||[]
// let total_cost=5000
let total_cost=cart_data.reduce((a,b)=>{
  return a+Number(b.price)*b.quantity
},0)

document.getElementById("Rs1").append(total_cost)

if(total_cost==0){
  document.getElementById("Rs3").append(`${total_cost}`)
  document.getElementById("Rs4").append(`${total_cost/10}`)
}else{
  document.getElementById("Rs3").append(`${total_cost+80}`)
  document.getElementById("Rs4").append(`${total_cost/10}`)

}

document.getElementById("pay_btn").addEventListener("click",function(){
  window.location.href="payment.html"
})
