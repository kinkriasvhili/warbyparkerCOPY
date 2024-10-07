import { loadFooter } from "./loadfooter.js";
import { loadHeader } from "./loadHeader.js";
import { loadProductsFetch } from "../../data/products.js";

async function giftCardShopLoad() {
  await loadProductsFetch();
  let shopNowBtn = document.querySelector(".gifty-button");
  console.log("me");

  let giftCardContainer = document.querySelector(".gift-main-container");
  let shopNow = document.querySelector(".shop-now");
  shopNowBtn.addEventListener("click", () => {
    shopNow.classList.add("shop");
    giftCardContainer.classList.add("off-showGiftCard");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  giftCardShopLoad();
});
