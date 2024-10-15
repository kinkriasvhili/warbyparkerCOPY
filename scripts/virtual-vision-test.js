import { loadHeader } from "../scripts/loadPage/loadheader.js";
import { loadProductsFetch } from "../data/products.js";

async function virtualVisionTest() {
  await loadProductsFetch();
  return;
}

document.addEventListener("DOMContentLoaded", () => {
  virtualVisionTest();
});
