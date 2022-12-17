
import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("heading");
nav_div.innerHTML = navbar();

import footer from "./Component/footer.js";
let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();

let cart_data=JSON.parse(localStorage.getItem("cart_items"))||[];


let account = [];
let obj = {
  card: 123456789101112,
  valid: "12/27",
  cvv: 377,
};
account.push(obj);
localStorage.setItem("ACCOUNT", JSON.stringify(account));

document.querySelector("#pay").addEventListener("click", function () {
  let CARD = document.querySelector("#card_no").value;
  let VALID = document.querySelector("#valid").value;
  let CVV = document.querySelector("#cvv").value;
  let acc = JSON.parse(localStorage.getItem("ACCOUNT"));
  if (acc[0].card == CARD && acc[0].valid == VALID && acc[0].cvv == CVV) {
    alert("Payment Successfull");
    cart_data=[];
    localStorage.setItem("cart_items",JSON.stringify(cart_data));
    window.location.href="index.html"
  } else {
    alert("Invalid card detail");
  }
});