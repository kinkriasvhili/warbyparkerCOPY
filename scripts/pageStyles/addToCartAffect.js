export function addToCartAffect(productId, addedMessageTimeouts) {
  const addedToCartElement = document.querySelector(
    `.js-added-cart-${productId}`
  );
  if (addedToCartElement) {
    addedToCartElement.classList.add("showAddedToCartElement");

    const previousTimeoutId = addedMessageTimeouts[productId];
    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }
    const timeoutId = setTimeout(() => {
      addedToCartElement.classList.remove("showAddedToCartElement");
    }, 2000);
    addedMessageTimeouts[productId] = timeoutId;
  }
}
let addedMessageTimeoutsLoad = {};
