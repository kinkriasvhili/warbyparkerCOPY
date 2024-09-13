import formatCurrency from "../scripts/utils/money.js";
export function getClickedProductId() {
  const links = document.querySelectorAll(".singleProduct-link-js");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.getAttribute("data-productId");
      saveSingleProductId(productId);
      console.log(productId);
    });
  });
}
function saveSingleProductId(productId) {
  localStorage.setItem("singleProductId", JSON.stringify(productId));
}
export function productHtml(product, color, size) {
  let colorSizeHtml = ``;
  if (color && size) {
    colorSizeHtml = `
      <span class="productColor">${
        color.charAt(0).toUpperCase() + color.slice(1)
      }</span> -
      <span class="productSize">${size}</span>
    `;
  }
  let productHtml;
  if (product) {
    productHtml = `<div class="product">
        <div class="product-image">
          <a class="singleProduct-link-js"  data-productId="${
            product.id
          }"  href="../singleproduct.html">
            <img src="${product.image}" alt="" />
          </a>
        </div>
        <div class="product-favourite">
          <button data-productId="${product.id}">
            <i class="fa-regular fa-heart favouriteBtn fav-btn-${
              product.id
            }"></i>
          </button>
        </div>
        
        <div class="added-to-cart js-added-cart-${product.id}">
          <i class="fa-solid fa-plus"></i>
          Added
        </div>

        <div class="product-add-cart">
          <button class="js-cart-btn" data-productId="${product.id}">
            <img class="js-cart-btn-${
              product.id
            }" src="images/icons/cart.svg" alt="" />
          </button>
        </div>
        <div class="product-describtion">
          
          <p class="product-name">${product.name} - ${colorSizeHtml}</p>
          <p class="product-price">$${formatCurrency(product.priceCents)}</p>
        </div>

      </div>`;
  }

  return productHtml;
}
