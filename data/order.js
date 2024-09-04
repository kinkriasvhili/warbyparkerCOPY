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

// Usage

export function makeOrder(cart) {
  let existingIds = new Set();
  let orderId = generateUniqueId(existingIds);

  if (cart) {
    newOrder.push({ cart, orderId });
    saveOrder();
  }
}

export function saveOrder() {
  localStorage.setItem("order", JSON.stringify(newOrder));
}
