import { loadProductsFetch, products } from "../../data/products.js";
import {
  productHtml as productComponent,
  getClickedProductId,
} from "../../htmlComponents/product.js";
import { loadHeader } from "./loadHeader.js";
import { addToCart } from "../../data/cart.js";
import { addToFavourite } from "../../data/faovurite.js";
let productDescribtions = JSON.parse(
  localStorage.getItem("storageProductDescribtion")
);

function loadQuizProducts(quizProducts) {
  let productsHtml = ``;
  quizProducts.forEach((quizProduct) => {
    let { size, color } = quizProduct;
    productsHtml += productComponent(quizProduct);
  });
  document.querySelector(".quizProducts").innerHTML = productsHtml;
  addToCart();
}

async function findQuizProducts() {
  await loadProductsFetch();
  let quizProducts = [];
  let sizeIn;
  let colorIn;

  products.forEach((product, index) => {
    if (productDescribtions[4]) {
      colorIn = product.colors.find(
        (color) => color.name == productDescribtions[4].color
      );
    }
    if (productDescribtions[2]) {
      sizeIn = product.sizes.find(
        (size) => size.name === productDescribtions[2].size
      );
    }
    if (
      (productDescribtions[0] == null ||
        productDescribtions[0].gender == product.gender) &&
      (productDescribtions[1] == null ||
        productDescribtions[1].type == product.type) &&
      (sizeIn || productDescribtions[2] == null) &&
      (productDescribtions[3] == null ||
        productDescribtions[3].shape == product.shape) &&
      (colorIn || productDescribtions[4] == null) &&
      (productDescribtions[5] == null ||
        productDescribtions[5].material == product.material) &&
      product.type != "accessories"
    ) {
      quizProducts.push(product);
    }
  });
  loadQuizProducts(quizProducts);
  addToFavourite();
  getClickedProductId();
}

document.addEventListener("DOMContentLoaded", () => {
  findQuizProducts();
});
