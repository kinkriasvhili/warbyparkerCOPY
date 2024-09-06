import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const delivery = [
  {
    optionId: "1",
    deliveryDays: "7",
    priceInCents: 0,
  },
  {
    optionId: "2",
    deliveryDays: "4",
    priceInCents: 599,
  },
  {
    optionId: "3",
    deliveryDays: "1",
    priceInCents: 999,
  },
];
export function getDeliveryOption(deliveryOptionId) {
  let matchingDelivery;
  delivery.forEach((option) => {
    if (option.optionId == deliveryOptionId) {
      matchingDelivery = option;
    }
  });
  return matchingDelivery;
}
export function removeOrder() {
  let orders = JSON.parse(localStorage.getItem("orderPlace"));
  let today = dayjs();
  let ordersContainer = document.querySelectorAll(
    ".order .delivery-details span"
  );
  let newOrder;
  ordersContainer.forEach((orderTime) => {
    // Assuming the year should be the current year
    let orderDate = dayjs(
      orderTime.innerHTML + `, ${today.year()}`,
      "dddd, MMMM D, YYYY"
    );

    let orderId;
    if (today.isAfter(orderDate)) {
      newOrder = [];

      orderId = orderTime.getAttribute("data-order-id");
      orders.forEach((order) => {
        if (order.orderId == orderId) {
          //
        } else {
          newOrder.push(order);
        }
      });
    } else {
      console.log(false);
    }
  });

  localStorage.setItem(
    "orderPlace",
    JSON.stringify(newOrder ? newOrder : orders)
  );
  setInterval(() => {}, 1000);
}

export function calculateDeliveryDate(addedDays) {
  let today = dayjs();
  let deliveryDate = today.add(addedDays, "days");
  let dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}
