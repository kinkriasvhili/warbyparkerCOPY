import { loadHeader } from "./utils/loadheader.js";
import { products, loadProductsFetch } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

function loadEyeGlaseesProducts() {
  const productsContainerElement = document.querySelector(".products");
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.type == "eyeglasses") {
      console.log(product.image);
      productsHtml += `<div class="product">
        <div class="product-image">
          <img src="${product.image}" alt="" />
        </div>
        <div class="product-favourite">
          <button><img src="images/icons/favorite.svg" alt="" /></button>
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
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(loadEyeGlaseesProducts);
});
