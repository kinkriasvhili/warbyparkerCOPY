import { cart } from "./cart.js";

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
    order.push({ cart, orderId });
    saveOrder(order);
    console.log(order);
  }
}
export function saveOrder(order) {
  localStorage.setItem("orderPlace", JSON.stringify(order));
}
