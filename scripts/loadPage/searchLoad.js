import { products, loadProductsFetch } from "../../data/products.js";
import { productHtml } from "../../htmlComponents/product.js";
import { addToFavourite } from "../../data/faovurite.js";
import { addToCart } from "../../data/cart.js";

export async function loadFavouriteSearches() {
  await loadProductsFetch();
  let topSearchContainer = document.querySelector(".searched-products");
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.topSearch == true) {
      productsHtml += productHtml(product);
    }
  });
  if (topSearchContainer && productsHtml != ``) {
    topSearchContainer.innerHTML = productsHtml;
    addToFavourite();
    addToCart();
  }
}
