import { cart } from "./cart.js";
import { inputChecked } from "../scripts/loadPage/loadCartDelivery.js";
let newOrder = [];

function generateUniqueId(existingIds) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+";
  let id;

  do {
    id = "";
    for (let i = 0; i < 30; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  } while (existingIds.has(id));

  existingIds.add(id); // Store the newly generated ID to ensure it's unique
  return id;
}

export function makeOrderList(totalPrice) {
  let existingIds = new Set();
  let orderId = generateUniqueId(existingIds);
  console.log(orderId);
  let order = JSON.parse(localStorage.getItem("orderPlace")) || [];
  if (cart) {
    let optionId;

    if (inputChecked()) {
      optionId = JSON.parse(localStorage.getItem("deliveryId"));
    } else {
      optionId = 1;
    }
    let optionDate = "";
    document.querySelectorAll(".date-js").forEach((date) => {
      if (date.getAttribute("data-option-id") == optionId) {
        optionDate = date;
      }
    });
    let optionDateString = optionDate.innerHTML;
    order.push({
      cart,
      orderId,
      optionDateString,
      totalPrice: totalPrice ? totalPrice : "",
    });
    saveOrder(order);
  }
}
export function saveOrder(order) {
  localStorage.setItem("orderPlace", JSON.stringify(order));
}
