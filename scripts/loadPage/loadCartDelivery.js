import {
  delivery,
  getDeliveryOption,
  calculateDeliveryDate,
} from "../../data/delivery.js";
import { formatCurrency } from "../utils/money.js";
import { loadCartPayment } from "./cartPaymentLoad.js";

function deliveryComponent(option) {
  return `
  <div class="option">
    <div>
      <p>${calculateDeliveryDate(option.deliveryDays)}</p>
      
    </div>
    <div>
      <input data-option-id="${
        option.optionId
      }" type="checkbox" class="delivery-input-js deliveryCheckBox" />
      <p>${
        option.priceInCents == 0
          ? "free"
          : "$" + formatCurrency(option.priceInCents)
      }</p>
    </div>
  </div>`;
}

export function inputChecked() {
  let optionId = "";
  const inputs = document.querySelectorAll(".deliveryCheckBox");
  inputs.forEach((input) => {
    optionId = input.getAttribute("data-option-id");
    if (optionId == 1) {
      input.checked = true;
    }
    input.addEventListener("click", () => {
      optionId = input.getAttribute("data-option-id");
      inputs.forEach((checkInput) => {
        {
          if (checkInput.getAttribute("data-option-id") == optionId) {
            checkInput.checked = true;
          } else {
            checkInput.checked = false;
          }
        }
      });
      let deliveryOption = getDeliveryOption(optionId);
      loadCartPayment(deliveryOption.priceInCents);
      localStorage.setItem("deliveryId", JSON.stringify(optionId));
    });
  });
}

export function loadCartDelivery() {
  let deliveryHtml = ``;
  delivery.forEach((option) => {
    deliveryHtml += deliveryComponent(option);
  });
  document.querySelector(".delivery-container-js").innerHTML = deliveryHtml;
  inputChecked();
}
