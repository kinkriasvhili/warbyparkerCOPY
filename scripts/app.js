import { loadHeader } from "../scripts/loadPage/loadheader.js";
import { loadProductsFetch } from "../data/products.js";

async function app() {
  await loadProductsFetch();
  return;
}

document.addEventListener("DOMContentLoaded", () => {
  app();
});
