import { loadProductsFetch, products } from "../../data/products.js";
import { loadHeader } from "./loadHeader.js";
let productDescribtions = JSON.parse(
  localStorage.getItem("storageProductDescribtion")
);
async function loadQuizProducts() {
  await loadProductsFetch();
  let quizProducts = [];
  let sizeIn;
  let colorIn;
  products.forEach((product, index) => {
    colorIn = product.colors.find(
      (color) => color.name == productDescribtions[4].color
    );
    sizeIn = product.sizes.find(
      (size) => size.name === productDescribtions[2].size
    );

    if (
      productDescribtions[0].gender == product.gender &&
      productDescribtions[1].type == product.type &&
      sizeIn &&
      productDescribtions[3].shape == product.shape &&
      colorIn &&
      productDescribtions[5].material == product.material
    ) {
      console.log(product);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuizProducts();
});
