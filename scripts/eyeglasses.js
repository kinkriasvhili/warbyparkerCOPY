import { loadHeader } from "./utils/loadheader.js";
import { loadProductsFetch } from "../data/products.js";
import { loadGlassesProducts } from "./loadPage/glassesShopLoad.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(loadGlassesProducts("eyeglasses"));
});
