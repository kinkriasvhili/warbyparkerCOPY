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

export function makeOrderList() {
  let existingIds = new Set();
  let orderId = generateUniqueId(existingIds);
  let order = JSON.parse(localStorage.getItem("orderPlace")) || [];
  if (cart) {
    let optionId = JSON.parse(localStorage.getItem("deliveryId")) || 1;
    order.push({ cart, orderId, optionId });
    saveOrder(order);
    console.log(optionId);
  }
}
export function saveOrder(order) {
  localStorage.setItem("orderPlace", JSON.stringify(order));
}
