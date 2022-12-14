import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("main_nav");
nav_div.innerHTML = navbar();

$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

let grocery_store = document.getElementById("grocery_shopping");
    grocery_store.onclick=()=>
    {
        window.location.href="index.html";
    }