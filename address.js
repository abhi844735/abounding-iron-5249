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
    window.location.href="payment.html"
}
})

