import formatCurrency from "../scripts/utils/money.js";

export function productHtml(product) {
  return `<div class="product">
        <div class="product-image">
          <img src="${product.image}" alt="" />
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
          <p class="product-name">${product.name}</p>
          <p class="product-price">$${formatCurrency(product.priceCents)}</p>
        </div>
      </div>`;
}
