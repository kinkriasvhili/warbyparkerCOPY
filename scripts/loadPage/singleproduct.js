import { loadFooter } from "../loadPage/loadfooter.js";
import { loadHeader } from "../loadPage/loadHeader.js";
import { saveToCart, cart } from "../../data/cart.js";

import {
  getProduct,
  loadProductsFetch,
  saveProductToStorage,
  products,
} from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";

async function loadSingleProduct() {
  await loadProductsFetch();
  const productId = JSON.parse(localStorage.getItem("singleProductId"));
  const product = getProduct(productId);
  const singleProductCotainer = document.querySelector(
    ".singleProductCotainer"
  );
  let colorHtml = ``;
  product.colors.forEach((color) => {
    if (product.color == color.name) {
      colorHtml += `<div class="colorSelect buttonActive">${color.name}</div>`;
    } else {
      colorHtml += `<div class="colorSelect">${color.name}</div>`;
    }
  });

  singleProductCotainer.innerHTML = `<div class="singleProductImage-container">
          <img
            src="${product.image}"
            width="100%"
            id="mainImg"
            class="singleProductImage"
            alt=""
          />
        </div>
        <div class="singleProductDetails-container">
          <div class="info-container">
            <div>Name: ${product.name}</div>
            <div>Brand: ${product.brand}</div>
            <div>Price: $${formatCurrency(product.priceCents)}</div>
          </div>
          <div class="sizeSelect-container">
            <div class="sizeSelect buttonActive">S</div>
            <div class="sizeSelect">M</div>
            <div class="sizeSelect">L</div>
          </div>
          <div class="colorSelect-container">
            ${colorHtml}
          </div>
          <div class="addButtons">
            <div class="added-to-cart js-added-cart-${product.id}">
              <i class="fa-solid fa-plus"></i>
              Added
            </div>
            <div class="product-add-cart">
              <button class="js-cart-btn" data-productId="${product.id}">
                <img
                  class="js-cart-btn-${product.id}"
                  src="images/icons/cart.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>`;
  const colors = document.querySelectorAll(".colorSelect");
  const sizes = document.querySelectorAll(".sizeSelect");
  const cartButton = document.querySelector(".js-cart-btn");
  sizes.forEach((size) => {
    if (product.size == size.innerHTML) {
      sizes.forEach((s) => {
        s.classList.remove("buttonActive");
      });
      size.classList.add("buttonActive");
    }
  });

  const idProduct = product.id;
  addToSinglePageCart(idProduct, cartButton);
  selectOneBtn(colors, product, "color");
  selectOneBtn(sizes, product, "size");
}
function addToSinglePageCart(productId, button) {
  button.addEventListener("click", () => {
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
  });
}

let newProducts = [];
function selectOneBtn(buttonName, product, detail) {
  buttonName.forEach((colorSize) => {
    colorSize.addEventListener("click", () => {
      buttonName.forEach((c) => {
        if (c.classList.contains("buttonActive")) {
          c.classList.remove("buttonActive");
        }
      });

      colorSize.classList.add("buttonActive");
      if (detail == "size") {
        product.size = colorSize.innerHTML;
      } else if (detail == "color") {
        product.color = colorSize.innerHTML;
      }
      products.forEach((p) => {
        if (p.id == product.id) {
          newProducts.push(product);
        } else {
          newProducts.push(p);
        }
      });
      saveProductToStorage(newProducts);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  loadSingleProduct();
});
