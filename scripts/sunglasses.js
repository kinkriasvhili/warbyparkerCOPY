import { loadHeader } from "../scripts/loadPage/loadheader.js";
import { loadProductsFetch, products } from "../data/products.js";
import { loadGlassesProducts } from "./loadPage/glassesShopLoad.js";
import { loadFooter } from "../scripts/loadPage/loadfooter.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadProductsFetch(loadGlassesProducts("sunglasses"));
});
