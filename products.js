let url ="https://63983534044fa481d694c51f.mockapi.io/items"

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
  
            div.append(image,name,quantity,price,button)
  
            document.querySelector(".bottom_section").append(div)
        });
      }