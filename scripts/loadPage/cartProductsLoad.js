import { loadProductsFetch } from "../../data/products.js";
import { addToCart, removeFromCart } from "../../data/cart.js";
import { addToFavourite } from "../../data/faovurite.js";
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";
import { saveToCart } from "../../data/cart.js";
import { loadCartPayment } from "./cartPaymentLoad.js";
export async function loadCartProducts() {
  await loadProductsFetch();
  let cartHtml = ``;
  let product;
  cart.forEach((cartItem) => {
    product = getProduct(cartItem.productId);
    cartHtml += `
    <div class="productContainer">
        <div class="product-remove">
          <button class="remove-btn js-remove-button" data-product-id="${
            cartItem.productId
          }">X</button>
        </div>
        <div class="image-container">
          <img
            src="${product.image}"
            alt=""
          />
        </div>
        <div class="product-info-container">
          <div class="product-color">
            <h4>
              ${product.name} - 
              <span>
              ${
                cartItem.productColor.charAt(0).toUpperCase() +
                cartItem.productColor.slice(1)
              }
              </span>
            </h4>
          </div>
           <div class="product-color">
            <h4> Price - <span>$${formatCurrency(
              product.priceCents
            )}</span></h4>
          </div>
          <div class="product-size">
            <h4>Frame Width - <span>${cartItem.productSize.toUpperCase()}</span></h4>
          </div>

          <div class="product-quantity">
            <h4>
              quantity:<span class="cart-quantity-number-js qantity-${
                cartItem.productId
              } quantity-active"> 
              ${cartItem.quantity} 
              </span>
              <input class="quantity-input js-update-input-${
                cartItem.productId
              }" type='number' min="1">
            </h4>
          </div>
          <div class="product-update">
            <button class=
            "update-btn active update-button-${cartItem.productId}" 
            data-product-id="${cartItem.productId}">
              Update
            </button>
            <button class=
            "
              save-btn save-button-${cartItem.productId}
            " 
            data-product-id="${cartItem.productId}">
              Save
            </button>
          </div>
        </div>
      </div>`;
  });
  if (document.querySelector(".cartProducts")) {
    document.querySelector(".cartProducts").innerHTML = cartHtml;
  }

  // update
  document.querySelectorAll(".update-btn").forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.getAttribute("data-product-id");
      button.classList.remove("active");

      document
        .querySelector(`.save-button-${productId}`)
        .classList.add("active");
      document
        .querySelector(`.js-update-input-${productId}`)
        .classList.add("active");

      document
        .querySelector(`.qantity-${productId}`)
        .classList.remove("quantity-active");
    });
  });
  //save
  document.querySelectorAll(".save-btn").forEach((button) => {
    button.addEventListener("click", () => {
      let productId = button.getAttribute("data-product-id");
      button.classList.remove("active");

      document
        .querySelector(`.update-button-${productId}`)
        .classList.add("active");
      document
        .querySelector(`.js-update-input-${productId}`)
        .classList.remove("active");
      let updatedValue = document.querySelector(
        `.js-update-input-${productId}`
      ).value;

      cart.forEach((cartItem) => {
        if (cartItem.productId == productId) {
          cartItem.quantity = Number(updatedValue);
          saveToCart();
        }
      });
      document
        .querySelector(`.qantity-${productId}`)
        .classList.add("quantity-active");
      loadCartProducts();
      loadCartPayment();
    });
  });

  addToFavourite();
  addToCart();
  removeFromCart();
}
