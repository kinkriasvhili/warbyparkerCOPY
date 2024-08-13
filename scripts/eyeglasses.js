import { loadHeader } from "./loadPage/loadheader.js";
import { loadProductsFetch } from "../data/products.js";
import { loadGlassesProducts } from "./loadPage/glassesShopLoad.js";
import { loadFooter } from "./loadPage/loadfooter.js";
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadProductsFetch(loadGlassesProducts("eyeglasses"));
});
