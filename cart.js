import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("heading");
nav_div.innerHTML = navbar();

import footer from "./Component/footer.js";
let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();

let empty_cart_btn = document.querySelector(".empty_cart");
let checkout_btn = document.querySelector(".button-57");
let continue_shopping_btn = document.querySelector(".button-86");

// All buttons are selected

let url = "https://63983534044fa481d694c51f.mockapi.io/items?page=1&limit=4";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayCard(data);
  });

let cartData = JSON.parse(localStorage.getItem("cart_items")) || [];

// if(cartData.length>0){
//   descriptionData(cartData);
// }

function displayCard(data) {
  document.getElementById("products_missed").innerHTML="";
   data.forEach((element) => {
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", element.img);
    let title = document.createElement("h3");
    title.innerHTML = element.name;
    let price = document.createElement("h5");
    price.innerHTML = "Price: " + element.price + "/-";
    let btn = document.createElement("button");
    btn.innerHTML = "Add to cart";
    btn.addEventListener("click", function () {
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id == element.id) {
          alert("Product is alredy in cart");
          return;
        }
      }

      cartData.push({ ...element, quantity: 1 });
      localStorage.setItem("cart_items", JSON.stringify(cartData));
      window.location.reload();
    });
    div.append(image, title, price, btn);
    document.getElementById("products_missed").append(div);
  });
}
function descriptionData(cartData){
  cartData.forEach((ele, index) => {
    let div = document.createElement("div");
    let title = document.createElement("div");
    title.innerHTML = ele.name;
    let price = document.createElement("div");
    price.innerHTML = ele.price;
    let div2 = document.createElement("div");
    let decrement = document.createElement("button");
    decrement.innerHTML = "-";
    decrement.addEventListener("click", function () {
      if (ele.quantity <= 1) return;
      cartData[index].quantity--;
      localStorage.setItem("cart_items", JSON.stringify(cartData));
      window.location.reload();
    });
    let span = document.createElement("span");
    span.innerHTML = cartData[index].quantity;
    let increament = document.createElement("button");
    increament.innerHTML = "+";
    increament.addEventListener("click", function () {
      cartData[index].quantity++;
      localStorage.setItem("cart_items", JSON.stringify(cartData));
      window.location.reload();
    });
    let div3=document.createElement("div");
    let deletebtn=document.createElement("button");
    deletebtn.innerHTML="❌";
    deletebtn.addEventListener("click",function(){
      removeCard(ele,index)
    });
    let hr = document.createElement("hr");
    div3.append(deletebtn);
    div2.append(decrement, span, increament);
    div.append(title, price, div2,div3,hr);
    document.getElementById("basket_options_items").append(div);
  
    // document.getElementById("nav_total_item").innerHTML = `${cartData.length}`;
  });
}
descriptionData(cartData);


let totalCost=cartData.reduce((a,b)=>{return a +Number(b.price)*b.quantity},0);

if(totalCost==0){
  document.getElementById("total").append(`${totalCost}/-`);
}else{
  document.getElementById("total").append(`${totalCost+80}/-`);
}

document.getElementById("subtotal").append(`${totalCost}/-`)

let totalItems=cartData.reduce((a,b)=>{return a +b.quantity},0);
document.getElementById("nav_total_item").append(totalItems);

empty_cart_btn.addEventListener("click",function(){
  window.localStorage.removeItem("cart_items");
  window.location.reload();
  
})

checkout_btn.addEventListener("click",function(){
  window.location.href="address.html"
})

continue_shopping_btn.addEventListener("click",function(){
  window.location.href="homepage.html"
})

function removeCard(ele,index){
  cartData.splice(index,1);
  localStorage.setItem("cart_items",JSON.stringify(cartData));
  descriptionData(cartData);
  window.location.reload();
}

// let navBar_btn=s document.getElementById("bask");
// navBar_btn.append(`${totalItems} Items`);