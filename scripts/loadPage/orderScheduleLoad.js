import { productHtml as productComponent } from "../../htmlComponents/product.js";
import { getProduct } from "../../data/products.js";
import { loadProductsFetch } from "../../data/products.js";

async function loadOrder() {
  await loadProductsFetch();
  let productHtml = ``;
  let orderHtml = ``;
  let orders = JSON.parse(localStorage.getItem("orderPlace")) || [];
  let account = JSON.parse(localStorage.getItem("account")) || [];
  orders.forEach((order, index) => {
    order.cart.forEach((cartItem) => {
      let { productId } = cartItem;
      let product = getProduct(productId);
      productHtml = productComponent(product);
    });
    let accountPlace = account[index];
    orderHtml = `
      <p class="order-info orderId-js">Order ID: ${order.orderId}</p>
      <p class="order-info accountName-js">Name: ${accountPlace.name}</p>
      <p class="order-info address-js">Address: ${accountPlace.address}</p>
      <p class="order-info city-js">City: ${accountPlace.city}</p>
      <p class="order-info state-js">State: ${accountPlace.state}</p>`;

    document.querySelector(".ordersContainer").innerHTML += `
          <div class="order">
            <div class="orders-info-container">
              ${orderHtml}
            </div>
            <!-- product START-->
            <div class="products">
              ${productHtml}
            </div>
            <!-- product END -->
          </div>`;
  });
}
loadOrder();
