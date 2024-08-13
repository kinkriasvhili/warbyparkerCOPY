import { loadHeader } from "./utils/loadheader.js";
import { loadProductsFetch, products } from "../data/products.js";
import { loadGlassesProducts } from "./loadPage/glassesShopLoad.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(loadGlassesProducts("sunglasses"));
});
