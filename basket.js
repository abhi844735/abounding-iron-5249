let empty_cart_btn = document.querySelector(".empty_cart");
let checkout_btn = document.querySelector(".button-57");
let continue_shopping_btn = document.querySelector(".button-86");
let missed_products_card_btn = document.getElementById(
  "products_missed_child_btn"
);

// All buttons are selected

let url = "https://63983534044fa481d694c51f.mockapi.io/items?page=1&limit=4";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayCard(data);
  });

function displayCard(data) {
  let card = data.map((item) => {
    return `
        <div id="products_missed_child">
            <img
              src="${item.img}"
            />
            <h2>${item.name}</h2>
            <h3>Price-${item.price}/-</h3>
            <button id="products_missed_child_btn">add to cart</button>
          </div>
        `;
  });
  document.getElementById("products_missed").innerHTML = card;
}

missed_products_card_btn.addEventListener("click", AddtoCartFromMissed());
let cartdata = JSON.parse(localStorage.getItem("cart_data")) || [];

function AddtoCartFromMissed(event) {
  console.log("hurray!!!");
  event.preventDefault();
  data.forEach((element) => {
    cartdata.push(element);
    localStorage.setItem("cart_data", JSON.stringify(cartdata));
  });
}
