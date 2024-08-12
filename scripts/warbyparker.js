import { headerStyle } from "./pageStyles/headerStyle.js";
import { loadProductsFetch, products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

import { loadHeader } from "./utils/loadheader.js";

function renderProductsWarbyparker() {
  const productsContainer = document.querySelector(".products");
  const glassesTypeButtons = document.querySelectorAll(".btn-choose-glasses");
  let glassesType;
  [...glassesTypeButtons].forEach((button) => {
    if (button.classList.contains("active")) {
      glassesType = button.innerText.toLowerCase();
    }
    button.addEventListener("click", () => {
      renderProductsWarbyparker();
    });
  });
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.type == glassesType && product.location === "warbyparker") {
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
  productsContainer.innerHTML = productsHtml;
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(renderProductsWarbyparker);
});
