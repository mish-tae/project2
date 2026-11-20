let cartCount = 0;

const cartButton = document.querySelector(".nav-buttons button");
const addButtons = document.querySelectorAll(".product-card button");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartButton.innerHTML = "🛒 Cart (" + cartCount + ")";

        alert("Added to cart!");

    });

});