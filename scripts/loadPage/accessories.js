import { addToFavourite } from "../../data/faovurite.js";
import { loadGlassesProducts } from "./glassesShopLoad.js";
import { loadProductsFetch, products } from "../../data/products.js";
import { getClickedProductId } from "../../htmlComponents/product.js";
import { loadBestSelling } from "./loadBestProduct.js";

function changeDotToImage() {
  const dots = document.querySelectorAll(".image-dot-js");
  const images = document.querySelectorAll(".product-image-container");
  dots.forEach((dot, index) => {
    dot.classList.remove("dot-active");
    if (index === 0) {
      dot.classList.add("dot-active");
    }
    images.forEach((bImage, bIIndex) => {
      if (bIIndex === 0) {
        bImage.classList.add("image-on");
      }
    });
    dot.addEventListener("click", () => {
      dots.forEach((d) => d.classList.remove("dot-active"));
      dot.classList.add("dot-active");
      images.forEach((bI) => bI.classList.remove("image-on"));
      images.forEach((bestImage, imageIndex) => {
        if (index == imageIndex) {
          bestImage.classList.add("image-on");
        }
      });
    });
  });
}
export async function loadAccessories() {
  await loadProductsFetch();
  await loadBestSelling();
  let shopBestSelling = document.querySelector(".selling-shop");
  const productImagesElement = document.querySelector(".product-images");
  let bestSellingHtml = ``;
  products.forEach((product) => {
    if (product.bestSelling == true && product.type == "accessories") {
      bestSellingHtml += ` 
        <div class="product-image-container image-off" data-product-id="${product.id}">
          <a class="singleProduct-link-js bestSellingProducts" data-productId="${product.id}" href="../../singleproduct.html">
            <img
              src="${product.image}"
              alt=""
            />
          </a> 
        </div>
        `;
    }
  });
  if (productImagesElement) {
    productImagesElement.innerHTML = bestSellingHtml;
    if (document.querySelector(".products")) {
      loadGlassesProducts("accessories");
    }
  }

  shopBestSelling.addEventListener("click", () => {
    document
      .querySelectorAll(".product-image-container")
      .forEach((productLink) => {
        if (productLink.classList.contains("image-on")) {
          let productId = productLink.getAttribute("data-product-id");
          getClickedProductId(productId);
        }
      });
  });

  getClickedProductId();
  changeDotToImage();
}
loadAccessories();
