import { loadHeader } from "./utils/loadheader.js";
import { loadProductsFetch } from "../data/products.js";
import { loadGlassesProducts } from "./glassesShop.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadProductsFetch(loadGlassesProducts("sunglasses"));
});
