import { loadHeader } from "./utils/loadheader.js";
import { products, loadProductsFetch } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { addToFavourite } from "../data/faovurite.js";

function loadEyeGlaseesProducts() {
  const productsContainerElement = document.querySelector(".products");
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.type == "eyeglasses") {
      productsHtml += `<div class="product">
        <div class="product-image">
          <img src="${product.image}" alt="" />
        </div>
        <div class="product-favourite">
          <button data-productId="${product.id}">
            <i class="fa-regular fa-heart favouriteBtn fav-btn-${
              product.id
            }"></i>
          </button>
        </div>
        <div class="product-add-cart">
          <button><img src="images/icons/cart.svg" alt="" /></button>
        </div>
        <div class="product-describtion">
          <p class="product-name">${product.name}</p>
          <p class="product-price">$${formatCurrency(product.priceCents)}</p>
        </div>
      </div>`;
    }
  });
  productsContainerElement.innerHTML = productsHtml;
  addToFavourite();
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(loadEyeGlaseesProducts);
});
