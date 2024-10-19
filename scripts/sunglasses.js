import { loadHeader } from "./loadPage/loadHeader.js";
import { loadProductsFetch, products } from "../data/products.js";
import { loadGlassesProducts } from "./loadPage/glassesShopLoad.js";
import { loadFooter } from "../scripts/loadPage/loadfooter.js";
import { filter } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadProductsFetch(loadGlassesProducts("sunglasses"));
  filter("sunglasses");
});
