const navbar = () =>
{
    return `
    <div id="upper_nav">
    <div id="white1_navbar">

    <img id="grocery_shopping" src="https://i.ibb.co/hmSdYf0/Grocery-Store.png" alt="logo">
    </div>
    
    <div id="search-container">

        <input type="text" id="search_input" placeholder="Search for products.." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>

    </div>
    
    <div id=login>
        <a href="#"><img src="" alt="phone"></img>1860 123 1000 </a>
        <a href="#">560004, Bangalore</a>
        <a href="#">Naina</a>
    </div>
    </div>
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" id="shop_button" type="button"
                data-toggle="dropdown"><b>SHOP BY CATEGORY</b>
                <span class="caret"></span></button>
            <ul class="dropdown-menu">
                <li class="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#"> Fruits & Vegetables<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Fresh Vegetables<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Potato,Onion & Tomato</a></li>
                                <li><a href="#">Cucumber & Capsium</a></li>
                                <li><a href="#">Leafy Vegetables</a></li>
                                <li><a href="#">Root Vegetables</a></li>
                                <li><a href="#">Beans,Brinjals & Okra</a></li>
                                <li><a href="#">Cabbage & Cauliflower</a></li>
                                <li><a href="#">Gourd, Pumpkin, Drumstick</a></li>
                                <li><a href="#">Specialty</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Herbs & Seasonings<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Lemon, Ginger & Garlic</a></li>
                                <li><a href="#">Indian & Exotic Herbs</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Fresh Fruits<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Banana, Sapota & Papaya</a></li>
                                <li><a href="#">Kiwi, Melon, Citrus Fruit</a></li>
                                <li><a href="#">Apples & Pomegranate</a></li>
                                <li><a href="#">Seasonal Fruits</a></li>
                                <li><a href="#">Mangoes</a></li>
                                <li><a href="#">Fruit Baskets</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Organic Fruits & Vegetables<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Organic Vegetables</a></li>
                                <li><a href="#">Organic Fruits</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Cuts & Sprouts<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Cut Fruit, Tender Coconut</a></li>
                                <li><a href="#">Cut & Peeled Veggies</a></li>
                                <li><a href="#">Fresh Salads & Sprouts</a></li>
                                <li><a href="#">Recipe Packs</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Exotic Fruits & Veggies<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Exotic Vegetables</a></li>
                                <li><a href="#">Exotic Fruits</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Flower Bouquets, Bunches<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Marigold</a></li>
                                <li><a href="#">Other Flowers</a></li>
                                <li><a href="#">Roses</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#">Foodgrains, Oil & Masala<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Atta, Flours & Sooji<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Atta Whole Wheat</a></li>
                                <li><a href="#">Sooji, Maida & Besan</a></li>
                                <li><a href="#">Rice & Other Flours</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Rice & Rice Products<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Raw Rice</a></li>
                                <li><a href="#">Poha, Sabudana & Murmura</a></li>
                                <li><a href="#">Basmati Rice</a></li>
                                <li><a href="#">Boiled & Steam Rice</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Dals & Pulses<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Toor,Channa & Moong Dal</a></li>
                                <li><a href="#">Cereals & Millets</a></li>
                                <li><a href="#">Urad & Other Dals</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Organic Staples<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Organic Dry Fruits</a></li>
                                <li><a href="#">Organic Dals & Pulses</a></li>
                                <li><a href="#">Organic Millet & Flours</a></li>
                                <li><a href="#">Organic Sugar,Jaggery</a></li>
                                <li><a href="#">Organic Masalas & Spices</a></li>
                                <li><a href="#">Organic Rice,Other Rice</a></li>
                                <li><a href="#">Organic Flours</a></li>
                                <li><a href="#">Organic Edible Oil, Ghee</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Edible Oils & Ghee<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Blended Cooking Oils</a></li>
                                <li><a href="#">Sunflower,Rice Bran Oil</a></li>
                                <li><a href="#">Soya & Mustard Oils</a></li>
                                <li><a href="#">Ghee & Vanaspati</a></li>
                                <li><a href="#">Gingelly Oil</a></li>
                                <li><a href="#">Groundnut Oil</a></li>
                                <li><a href="#">Cooking Coconut Oil</a></li>
                                <li><a href="#">Olive & Canola Oils</a></li>
                                <li><a href="#">Other Edible Oils</a></li>
                                <li><a href="#">Cold Pressed Oil</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Salt, Sugar & Jaggery<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Sugar & Jaggery</a></li>
                                <li><a href="#">Salts</a></li>
                                <li><a href="#">Sugarfree Sweetners</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Masalas & Spices<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Whole Spices</a></li>
                                <li><a href="#">Powdered Spices</a></li>
                                <li><a href="#">Cooking Pastes</a></li>
                                <li><a href="#">Herbs & Seasoning</a></li>
                                <li><a href="#">Blended Masalas</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Dry Fruits<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Almonds</a></li>
                                <li><a href="#">Cashews</a></li>
                                <li><a href="#">Raisins</a></li>
                                <li><a href="#">Mukhwas</a></li>
                                <li><a href="#">Other Dry Fruits</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>


                <li class="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#">Bakery, Cakes & Dairy<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Dairy<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Milk</a></li>
                                <li><a href="#">Curd</a></li>
                                <li><a href="#">Panner,Tofu & Cream</a></li>
                                <li><a href="#">Butter & Margarine</a></li>
                                <li><a href="#">Condensed,Powdered Milk</a></li>
                                <li><a href="#">Cheese</a></li>
                                <li><a href="#">Buttermilk & Lassi</a></li>
                                <li><a href="#">Yogurt & Shrikhand</a></li>
                                <li><a href="#">Flavoured, Soya Milk</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Breads & Buns<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Brown, Wheat & Multigrain</a></li>
                                <li><a href="#">Milk,White & Sandwich</a></li>
                                <li><a href="#">Buns,Pavs & Pizza Base</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Non Dairy<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Dairy Free [Vegan] </a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Gourmet Breads<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Croissants,Bagets</a></li>
                                <li><a href="#">Panini, Focaccia & Pita</a></li>
                                <li><a href="#">Bagels & Bread</a></li>
                                <li><a href="#">Gourmet Bread</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Cookies,Rusk & Khari<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Rusks</a></li>
                                <li><a href="#">Khari & Cream Rolls</a></li>
                                <li><a href="#">Premium Cookies</a></li>
                                <li><a href="#">Bakery,Biscuits,Cookies</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Ice Creams & Desserts<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ice Creams</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Bakery Snacks<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Bread Sticks & Lavash</a></li>
                                <li><a href="#">Cheese & Garlic Bread</a></li>
                                <li><a href="#">Puffs, Patties, Sandwiches</a></li>
                                <li><a href="#">Breadcrumbs & Croutons</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Cakes & Pastries<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Tea Cakes & Slice Cakes</a></li>
                                <li><a href="#">Muffins & Cup Cakes</a></li>
                                <li><a href="#">Pastries & Brownies</a></li>
                                <li><a href="#">Birthday & Party Cakes</a></li>
                                <li><a href="#">Doughnuts & Mousses</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#">Beverages<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Energy & Soft Drinks<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Soda & Cocktail Mix</a></li>
                                <li><a href="#">Cold Drinks</a></li>
                                <li><a href="#">Sports & Energy Drinks</a></li>
                                <li><a href="#">Non Alcoholic Drinks</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Water<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Packaged Water</a></li>
                                <li><a href="#">Spring Water</a></li>
                                <li><a href="#">Flavoured Water</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Health Drink, Supplement<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Kids (5+Yrs) </a></li>
                                <li><a href="#">Children (2-5Yrs) </a></li>
                                <li><a href="#">Men & Women </a></li>
                                <li><a href="#">Diabetic Drinks </a></li>
                                <li><a href="#">Glucose Powder, Tablets</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Tea<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Leaf & Dust Tea</a></li>
                                <li><a href="#">Green Tea</a></li>
                                <li><a href="#">Exotic & Flavoured Tea</a></li>
                                <li><a href="#">Tea Bags</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Coffee<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Ground Coffee</a></li>
                                <li><a href="#">Instant Coffee</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Fruit Juices & Drinks<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Unsweetened, Cold Press</a></li>
                                <li><a href="#">Juices</a></li>
                                <li><a href="#">Syrups & Concentrates </a></li>
                            </ul>
                        </li>

                    </ul>
                </li>


                <li class="dropdown-submenu">
                    <a class="test" tabindex="-1" href="#">Snacks & Branded Foods<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Noodle, Pasta, Vermicelli <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Instant Noodles</a></li>
                                <li><a href="#">Hakka Noodles</a></li>
                                <li><a href="#">Cup Noodles</a></li>
                                <li><a href="#">Vermicelli</a></li>
                                <li><a href="#">Instant Pasta</a></li>
                                <li><a href="#">Pasta & Macaroni</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Breakfast Cereals<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Oats & Porridge</a></li>
                                <li><a href="#">Kids Cereal</a></li>
                                <li><a href="#">Muesli</a></li>
                                <li><a href="#">Flakes</a></li>
                                <li><a href="#">Granola & Cereal Bars</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Frozen Veggies & Snacks<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Frozen Vegetables</a></li>
                                <li><a href="#">Frozen Indian Breads</a></li>
                                <li><a href="#">Frozen Veg Snacks</a></li>
                                <li><a href="#">Frozen Non-Veg Snacks</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Biscuits & Cookies<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Salted Biscuits</a></li>
                                <li><a href="#">Marrie, Health, Digestive</a></li>
                                <li><a href="#">Cream Biscuits & Wafers</a></li>
                                <li><a href="#">Glucose & Milk Biscuits</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Snacks & Namkeen<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Chips & Corn Snacks</a></li>
                                <li><a href="#">Namkeen & Savoury Snacks</a></li>

                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Spreads, Sauces, Ketchup<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Honey</a></li>
                                <li><a href="#">Mayonnaise</a></li>
                                <li><a href="#">Tomato Ketchup & Sauces</a></li>
                                <li><a href="#">Jam, Conserve, Marmalade</a></li>
                                <li><a href="#">Chilli & Soya Sauce</a></li>
                                <li><a href="#">Choco & Nut Spread</a></li>
                                <li><a href="#">Vinegar</a></li>
                            </ul>
                        </li>

                        <li class="dropdown-submenu">
                            <a class="test" href="#">Ready To Cook & Eat<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Breakfast & Snack Mixes</a></li>
                                <li><a href="#">Soups</a></li>
                                <li><a href="#">Home Baking</a></li>
                                <li><a href="#">Papads,Ready To Fry</a></li>

                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="dropdown-submenu">
                    <a class="test" href="#">View All<span class="caret"></span></a>
                </li>
            </ul>
        </div>

        
    </div>
    
`
}

export default navbar;