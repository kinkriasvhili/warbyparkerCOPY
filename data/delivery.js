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

export function calculateDeliveryDate(addedDays) {
  const today = dayjs();
  let deliveryDate = today.add(addedDays, "days");
  let dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}
