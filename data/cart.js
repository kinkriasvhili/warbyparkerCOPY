import { getProduct } from "./products.js";

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart(id) {
  let productId;
  document.querySelectorAll(".js-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      productId = button.getAttribute("data-productId");
      let product = getProduct(productId);

      let matchingItem;

      cart.forEach((cartItem) => {
        if (cartItem.productId == productId) {
          matchingItem = true;
          cartItem.quantity++;
        }
      });

      if (!matchingItem) {
        cart.push({
          productId: product.id,
          quantity: 1,
        });
      }
      saveToCart();
    });
  });
}

export function saveToCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
