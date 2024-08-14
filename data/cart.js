import { getProduct } from "./products.js";
import { loadCartProducts } from "../scripts/loadPage/cartProductsLoad.js";
import { loadCartPayment } from "../scripts/loadPage/cartPaymentLoad.js";
import { loadHeader } from "../scripts/loadPage/loadheader.js";
import { addToCartAffect } from "../scripts/pageStyles/addToCartAffect.js";

export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function addToCart() {
  let productId;
  let addedMessageTimeouts = {};
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
      loadHeader();
      saveToCart();
      addToCartAffect(productId, addedMessageTimeouts);
    });
  });
}
export function removeFromCart() {
  let newCart = [];

  document.querySelectorAll(".js-remove-button").forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.getAttribute("data-product-id");
      cart.forEach((cartItem) => {
        if (cartItem.productId != productId) {
          newCart.push(cartItem);
        }
      });
      cart = newCart;
      saveToCart();
      loadHeader();
      loadCartProducts();
      loadCartPayment();
    });
  });
}

export function saveToCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
