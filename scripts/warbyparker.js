import { loadProductsFetch, products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { loadHeader } from "warbyparkerCOPY/scripts/loadPage/loadHeader.js";
import { addToFavourite } from "../data/faovurite.js";
import { loadFooter } from "warbyparkerCOPY/scripts/loadPage/loadHeader.js";
import { addToCart } from "../data/cart.js";
import { productHtml, getClickedProductId } from "../htmlComponents/product.js";
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
      productsHtml += productHtml(product);
    }
  });

  productsContainer.innerHTML = productsHtml;
  getClickedProductId();
  addToFavourite();
  addToCart();
}

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadProductsFetch(renderProductsWarbyparker);
});
