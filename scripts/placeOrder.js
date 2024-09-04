const inputs = document.querySelectorAll(".requiredInput");
const optionalInput = document.querySelector(".optionalInput");

const pageButtonElement = document.querySelector(".orderPageButton");
pageButtonElement.disabled = true;
pageButtonElement.classList.add("orderPageButtonOff");

pageButtonElement.addEventListener("click", () => {
  let account = JSON.parse(localStorage.getItem("account")) || [];
  if (inputs.length >= 5) {
    account.push({
      name: inputs[0].value,
      address: inputs[1].value,
      zipCode: inputs[2].value,
      city: inputs[3].value,
      state: inputs[4].value,
      ...(optionalInput ? { apt: optionalInput.value } : {}),
    });
  }
  saveAccount(account);
  console.log(account);
});

inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    checkAllFilled();
  });
});

function checkAllFilled() {
  let allFilled = true;
  pageButtonElement.disabled = false;
  pageButtonElement.classList.remove("orderPageButtonOff");
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      pageButtonElement.disabled = true;
      pageButtonElement.classList.add("orderPageButtonOff");
      allFilled = false;
    }
  });
}

export function saveAccount(account) {
  localStorage.setItem("account", JSON.stringify(account));
}
