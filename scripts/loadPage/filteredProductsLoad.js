import { productHtml } from "../../htmlComponents/product.js";
import { products } from "../../data/products.js";
import { loadProductsFetch } from "../../data/products.js";
export async function loadFilteredProducts(type) {
  await loadProductsFetch();
  let filterList = [];
  const filterParagraphs = document.querySelectorAll(".filterUl div p");
  const productsContainerElement = document.querySelector(".products");
  let productsHtml = ``;

  filterParagraphs.forEach((paragraph) => {
    let productJson;
    if (paragraph.classList.contains("activeFilter")) {
      productJson = paragraph.getAttribute("productJson");
      filterList.push({
        [productJson]: paragraph.innerHTML.toLowerCase(),
      });
    }
  });
  let topSearch = "";
  let bestSelling = "";
  let shape = "";
  let sizes = "";
  let colors = "";
  let gender = "";
  let material = "";
  let priceCents = "";

  filterList.forEach((filter) => {
    if (filter.topSearch) topSearch = true;
    if (filter.bestSelling) bestSelling = true;
    if (filter.shape) shape = filter.shape;
    if (filter.sizes) sizes = filter.sizes;
    if (filter.colors) colors = filter.colors;
    if (filter.gender) gender = filter.gender;
    if (filter.material) material = filter.material;
    if (filter.priceCents) {
      priceCents = parseInt(filter.priceCents.replace("$", ""), 10) * 100;
    }
  });
  products.forEach((product) => {
    console.log();

    if (
      (topSearch === "" || product.topSearch === topSearch) &&
      (bestSelling === "" || product.bestSelling === bestSelling) &&
      (shape === "" || product.shape === shape) &&
      (sizes === "" ||
        product.sizes.some(
          (size) => size.name.toUpperCase() == sizes.toUpperCase()
        )) &&
      (colors === "" ||
        product.colors.some(
          (color) => color.name.toUpperCase() == colors.toUpperCase()
        )) &&
      (gender === "" || product.gender === gender) &&
      (material === "" || product.material === material) &&
      (priceCents === "" || product.priceCents === priceCents) &&
      product.type == type
    ) {
      // console.log(type);
      productsHtml += productHtml(product);
    }
  });
  productsContainerElement.innerHTML = productsHtml;
}
// if (filterId == p.parentElement.parentElement.getAttribute("filterId")) {
//   p.classList.remove("activeFilter");
// }
