
const navbar = () =>
{
    let cartData=JSON.parse(localStorage.getItem("cart_items"))||[];
    let totalItems=cartData.reduce((a,b)=>{return a +b.quantity},0);
    return `
    <a href="homepage.html"><img src="https://i.ibb.co/hmSdYf0/Grocery-Store.png" alt="logo"></a>
    <div id="heading_main1">
        <p id="login">Login|Sign Up</p>
        <a href="adminlogin.html"><p>ADMIN LOGIN</p></a>
        <p>📍56004, Bangalore</p>
        <p>📞1860 123 1000</p>
    </div>
    <div id="heading_main2">
        <input type="search" id="search_bar" placeholder="Search for Products..">
        <img id="search_img" src="Images/Search_image.png">
        <a href="cart.html" id="lnk">
            <div id="my_basket">
                <img src="Images/shopping-basket.png">
                <span>
                    <p>My Basket</p>
                    <br>
                    <p id="bask">${totalItems} Items</p>
                </span>
            </div>
        </a>
        <div id="dropdown_list">
            <a href="#"><b>SHOP BY CATEGORY</b></a>
            <div id="drop1">
                <a href="#">Fruits and Vegetables</a>
                <a href="#">Food Grains Oils and Masalas</a>
                <a href="#">Bakery, Cakes and Diaries</a>
                <a href="#">Beverages</a>
                <a href="#">Snacks and Branded Foods</a>
                <a href="#">Beauty and Hygiene</a>
                <a href="#">Cleaning and Household</a>
                <a href="#">Kitchen, Garden and Pets</a>
                <a href="#">Eggs, Meat and Fish</a>
                <a href="#">Gourment and World Food</a>
                <a href="#">Baby Care</a>
                <a href="#">View All</a>
            </div>
        </div>
        <div id="offers">
            <p>🏷️ OFFERS</p>
        </div>
    </div>

    
    `
}

export default navbar;
