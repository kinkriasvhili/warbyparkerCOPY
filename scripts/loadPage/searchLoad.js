import { products, loadProductsFetch } from "../../data/products.js";
import { productHtml } from "../../htmlComponents/product.js";
import { addToFavourite } from "../../data/faovurite.js";
import { addToCart } from "../../data/cart.js";
import { getClickedProductId } from "../../htmlComponents/product.js";
export async function loadFavouriteSearches() {
  await loadProductsFetch();
  let topSearchContainer = document.querySelector(".most-searched");
  let productsHtml = ``;
  products.forEach((product) => {
    if (product.topSearch == true) {
      productsHtml += productHtml(product);
    }
  });

  if (topSearchContainer && productsHtml != ``) {
    topSearchContainer.innerHTML = productsHtml;
    getClickedProductId();
    addToFavourite();
    addToCart();
  }
}
export function loadSearchedProducts() {
  let searchedProducts = JSON.parse(localStorage.getItem("searchedProducts"));
  if (searchedProducts) {
    let searchProductsContainer = ``;

    searchedProducts.forEach((searchProduct) => {
      searchProductsContainer += productHtml(searchProduct);
    });
    if (searchProductsContainer != ``) {
      document.querySelector(".my-products").innerHTML =
        searchProductsContainer;
      addToFavourite();
      addToCart();
    }
  }
}
