import { productHtml as productComponent } from "../../htmlComponents/product.js";
import { getProduct } from "../../data/products.js";
import { loadProductsFetch } from "../../data/products.js";
import {
  getDeliveryOption,
  calculateDeliveryDate,
} from "../../data/delivery.js";
import { removeOrder } from "../../data/delivery.js";
function showDetails() {
  const detailsIcons = document.querySelectorAll(".details-active-icon i");
  const detailsInfos = document.querySelectorAll(".details-info");
  detailsIcons.forEach((detailsIcon) => {
    detailsIcon.addEventListener("click", function () {
      // Toggle between the down and up chevron icons
      let orderId = detailsIcon.getAttribute("data-order-id");
      if (detailsIcon.classList.contains("fa-chevron-down")) {
        detailsIcon.classList.remove("fa-chevron-down");
        detailsIcon.classList.add("fa-chevron-up");

        detailsInfos.forEach((detailsInfo) => {
          if (orderId === detailsInfo.getAttribute("data-order-id")) {
            detailsInfo.classList.remove("details-info-off");
            detailsInfo.classList.add("details-info-active");
          }
        });
      } else {
        detailsIcon.classList.remove("fa-chevron-up");
        detailsIcon.classList.add("fa-chevron-down");
        detailsInfos.forEach((detailsInfo) => {
          if (orderId === detailsInfo.getAttribute("data-order-id")) {
            detailsInfo.classList.add("details-info-off");
            detailsInfo.classList.remove("details-info-active");
          }
        });
      }
    });
  });
}

export async function loadOrder() {
  await loadProductsFetch();

  let productHtml = ``;
  let orderHtml = ``;
  let orders = JSON.parse(localStorage.getItem("orderPlace")) || [];
  let account = JSON.parse(localStorage.getItem("account")) || [];
  let quantity = 0;
  orders.forEach((order, index) => {
    if (order.cart.length > 1) {
      order.cart.forEach((cartItem) => {
        let { productId, productColor, productSize } = cartItem;
        let product = getProduct(productId);
        productHtml += productComponent(product, productColor, productSize);
      });
    } else {
      order.cart.forEach((cartItem) => {
        let { productId, productColor, productSize } = cartItem;
        let product = getProduct(productId);
        productHtml += productComponent(product, productColor, productSize);
      });
    }
    let deliveryDate = order.optionDateString;

    order.cart.forEach((cartItem) => {
      quantity += cartItem.quantity;
    });
    let accountPlace = account[index];
    if (accountPlace) {
      orderHtml = `
      <p class="order-info orderId-js">Order ID: ${order.orderId}</p>
      <p class="order-info accountName-js">Name: ${accountPlace.name}</p>
      <p class="order-info address-js">Address: ${accountPlace.address}</p>
      <p class="order-info city-js">City: ${accountPlace.city}</p>
      <p class="order-info state-js">State: ${accountPlace.state}</p>`;
    }

    if (document.querySelector(".ordersContainer")) {
      document.querySelector(".ordersContainer").innerHTML += `
            <div class="order ">
              <div class="orders-info-container">
                ${orderHtml}
              </div>
              <!-- product START-->
              <div class="products">
                ${productHtml}
                
              </div>
              
              <!-- product END -->
              <div class="details-container">
                <div class="details-active-icon">
                  <p>Product Details</p>
                  <i class="fa-solid fa-chevron-down details-off" data-order-id="${order.orderId}"></i>
                </div>
                <div class="details-info details-info-off" data-order-id="${order.orderId}">
                  <div class="product-details ">
                    <p class="price">Total price: $${order.totalPrice}</p>
                    <p class="quantity">Products quantity: ${quantity}</p>
                  </div>
                  <div class="delivery-details">
                    <p class="deliveryDate">Delivery date: <span data-order-id="${order.orderId}">${deliveryDate}</span></p>
                  </div>
                </div>
              </div>
            </div>`;
      productHtml = ``;
    }
    showDetails();
  });
  removeOrder();
}
loadOrder();
