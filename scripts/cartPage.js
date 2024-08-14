import { loadHeader } from "./loadPage/loadheader.js";
import { loadFooter } from "./loadPage/loadfooter.js";
import { loadCartProducts } from "./loadPage/cartProductsLoad.js";
import { loadCartPayment } from "./loadPage/cartPaymentLoad.js";

document.addEventListener("DOMContentLoaded", () => {
  loadCartProducts();
  loadCartPayment();
  loadHeader();
  loadFooter();
});
