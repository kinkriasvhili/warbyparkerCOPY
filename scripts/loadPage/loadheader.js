// import { headerStyle } from "../pageStyles/headerStyle.js";
import { headerStyle } from "../pageStyles/headerStyle.js";
import { cart } from "../../data/cart.js";
import { favourite } from "../../data/faovurite.js";

function cartQuantityCounter() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector(".cart-quantity-span").innerHTML = cartQuantity;
}

export async function loadHeader() {
  try {
    const response = await fetch("htmlComponents/header.html");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const headerHtml = await response.text();
    document.getElementById("header-placeholder").innerHTML = headerHtml;
    console.log("me");
    cartQuantityCounter();
    headerStyle();
  } catch (error) {
    console.error("Error loading header:", error);
  }
}

loadHeader();
