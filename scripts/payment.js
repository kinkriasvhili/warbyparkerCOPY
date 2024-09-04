import { showPaypalButtons } from "./utils/paypal.js";

function isInputChecked() {
  const creditCardCheckbox = document.querySelector(
    ".creditCardChecker .checkboxInput"
  );
  const paypalCheckbox = document.querySelector("#paypal-checkbox");
  const paypalButtonContainer = document.querySelector(
    "#paypal-button-container"
  );
  const reviewButtonElement = document.querySelector(".paymentButton");
  const inputsContainerElement = document.querySelector(".inputsContainer");

  // Set the credit card checkbox to be checked by default
  creditCardCheckbox.checked = true;

  function updatePaypalButtons() {
    if (paypalCheckbox.checked) {
      paypalButtonContainer.style.display = "block";
      inputsContainerElement.classList.add("paypalOnInput");
      reviewButtonElement.classList.add("paypalOnButton");
    } else {
      paypalButtonContainer.style.display = "none";
      paypalButtonContainer.innerHTML = "";
      inputsContainerElement.classList.remove("paypalOnInput");
      reviewButtonElement.classList.remove("paypalOnButton");
    }
  }

  function ensureOneChecked() {
    if (!creditCardCheckbox.checked && !paypalCheckbox.checked) {
      // Default to checking credit card if both are unchecked
      creditCardCheckbox.checked = true;
      updatePaypalButtons();
    }
  }

  updatePaypalButtons();

  creditCardCheckbox.addEventListener("change", () => {
    if (creditCardCheckbox.checked) {
      paypalCheckbox.checked = false;
      updatePaypalButtons();
    }
    ensureOneChecked();
  });

  paypalCheckbox.addEventListener("change", () => {
    if (paypalCheckbox.checked) {
      creditCardCheckbox.checked = false;
    }
    updatePaypalButtons();
    ensureOneChecked();
  });
}

function checkInputFilled() {
  const inputs = document.querySelectorAll(".inputText");
  const pageButtonElement = document.querySelector(".paymentButton");
  pageButtonElement.disabled = true;
  pageButtonElement.classList.add("paymentButtonOff");

  pageButtonElement.addEventListener("click", () => {
    let creditCard = JSON.parse(localStorage.getItem("creditCard")) || [];
    if (inputs.length >= 4) {
      creditCard.push({
        cardNumber: inputs[0].value,
        expiration: inputs[1].value,
        securityCode: inputs[2].value,
        zipCode: inputs[3].value,
      });
    }
    localStorage.setItem("creditCard", JSON.stringify(creditCard));
  });

  inputs.forEach((input) => {
    input.addEventListener("keydown", () => {
      checkAllFilled();
    });
  });

  function checkAllFilled() {
    let allFilled = true;
    pageButtonElement.disabled = false;
    pageButtonElement.classList.remove("paymentButtonOff");
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        pageButtonElement.disabled = true;
        pageButtonElement.classList.add("paymentButtonOff");
        allFilled = false;
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showPaypalButtons();
  isInputChecked();
  checkInputFilled();
});
