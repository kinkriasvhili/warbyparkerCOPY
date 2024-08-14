import { loadProductsFetch } from "../../data/products.js";
import { addToCart, removeFromCart } from "../../data/cart.js";
import { addToFavourite } from "../../data/faovurite.js";
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export async function loadCartProducts() {
  await loadProductsFetch();
  let cartHtml = ``;
  let product;
  cart.forEach((cartItem) => {
    product = getProduct(cartItem.productId);
    cartHtml += `
    <div class="productContainer">
        <div class="product-remove">
          <button class="remove-btn js-remove-button" data-product-id="${cartItem.productId}">X</button>
        </div>
        <div class="image-container">
          <img
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="product-info-container">
          <div class="product-color">
            <h4>${product.name} - <span>cristal</span></h4>
          </div>
          <div class="product-size">
            <h4>Frame Width - <span>medium</span></h4>
          </div>
          <div class="product-quantity">
            <h4>quantity:<span class="cart-quantity-number-js"> ${cartItem.quantity}</span></h4>
          </div>
          <div class="product-update">
            <button class="update-btn active">Update</button>
            <button class="save-btn">Save</button>
          </div>
        </div>
      </div>`;
  });
  if (document.querySelector(".cartProducts")) {
    document.querySelector(".cartProducts").innerHTML = cartHtml;
  }

  addToFavourite();
  addToCart();
  removeFromCart();
}
