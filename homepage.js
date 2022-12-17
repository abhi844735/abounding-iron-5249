import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("heading");
nav_div.innerHTML = navbar();

import footer from "./Component/footer.js";
let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();


var slideIndex = 0;
        carousel();

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > x.length) { slideIndex = 1 }
            x[slideIndex - 1].style.display = "block";
            setTimeout(carousel, 3000);
        }

      function myFunction() {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }

        let read_button = document.getElementById("myBtn");
read_button.addEventListener("click",myFunction);
  

function plusDivs(n) {
  showDivs(slide_Index += n);
}

var slide_Index = 1;
showDivs(slide_Index);


function showDivs(n) {
  console.log("hhh")
    var i;
    var x = document.getElementsByClassName("mySlide");
    if (n > x.length) {slide_Index = 1}
    if (n < 1) {slide_Index = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slide_Index-1].style.display = "block";  
  }

let left_button = document.getElementById("left_buttonn")
left_button.addEventListener("click",()=>{
  plusDivs(-1);
});

let right_button = document.getElementById("right_buttonn")
right_button.addEventListener("click",()=>
{
  plusDivs(1);
});

function cart_direct()
{
  window.location.href="cart.html";
}

let Basket_click = document.getElementById("mybasket");
Basket_click.addEventListener("click",()=>
{
  cart_direct();
})




