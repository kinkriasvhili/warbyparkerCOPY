import { loadGlassesProducts } from "./glassesShopLoad.js";
import { loadProductsFetch } from "../../data/products.js";
import { getClickedProductId } from "../../htmlComponents/product.js";

async function loadContact() {
  await loadProductsFetch();
  if (document.querySelector(".products")) {
    loadGlassesProducts("contact-lenes");
    getClickedProductId();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadContact();
});
