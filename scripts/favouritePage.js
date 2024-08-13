import { loadHeader } from "./utils/loadheader.js";
import { loadProductsFetch } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { addToFavourite } from "../../data/faovurite.js";
import { favourite } from "../data/faovurite.js";

async function loadFavouriteProducts() {
  await loadProductsFetch();

  const productsContainerElement = document.querySelector(".products");
  let productsHtml = ``;
  favourite.forEach((product) => {
    // eyeglasses
    productsHtml += `<div class="product">
      <div class="product-image">
        <img src="${product.image}" alt="" />
      </div>
      <div class="product-favourite">
        <button data-productId="${product.id}">
          <i class="fa-regular fa-heart favouriteBtn fav-btn-${product.id}"></i>
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
  });
  productsContainerElement.innerHTML = productsHtml;
  addToFavourite();
  loadHeader();
}
loadFavouriteProducts();
