import navbar from "./Component/navbar.js";
let nav_div = document.getElementById("heading");
nav_div.innerHTML = navbar();

import footer from "./Component/footer.js";
let footer_div = document.getElementById("footer_div");
footer_div.innerHTML = footer();



let url ="https://63983534044fa481d694c51f.mockapi.io/items?limit=24&page=1"

    let data =[]
    async function getdata(){
      try {
        let res = await fetch(url)
        let out = await res.json();
        data = out
        console.log(out)
        display_products(out)
      } catch (error) {
        console.log(error)
      }
    }
    getdata()
     let cart_data = JSON.parse(localStorage.getItem("cart_items")) || [];
    //display all products

    function display_products(out){
        document.querySelector(".bottom_section").innerHTML = ""

        out.forEach(element => {
            let div = document.createElement("div")
  
            let image = document.createElement("img")
            image.src = element.img
  
            let name = document.createElement("p")
            name.innerText = element.name
  
            let quantity = document.createElement("p")
            quantity.innerText = "1"+"Kg/pc"
  
            let price = document.createElement("p")
              price.innerText = "MRP ₹" + element.price
  
            let button = document.createElement("button")
            button.innerText = "Add"
            button.addEventListener("click", () =>{                
                for(let i=0;i<cart_data.length;i++){
                  if(cart_data[i].id == element.id){
                    alert("items is already added");
                    return;
                  }
                }
                cart_data.push({...element,quantity:1})
                alert("item added successfully")
                window.location.reload()
                localStorage.setItem("cart_items",JSON.stringify(cart_data))
            })
  
            div.append(image,name,quantity,price,button)
  
            document.querySelector(".bottom_section").append(div)
        });
      }

      let sort = document.querySelector("#Price")
    sort.addEventListener("change",sort_by_price)

    function sort_by_price(){
      let sorting = document.querySelector("#Price").value;
      if(sorting == ""){
        display_products(data)
      }else if(sorting == "LTH"){
        data.sort((a,b)=> a.price - b.price)
      }else if(sorting == "HTL"){
        data.sort((a,b)=> b.price - a.price)
      }
      display_products(data)
    }