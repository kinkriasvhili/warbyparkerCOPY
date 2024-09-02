const inputs = document.querySelectorAll("input");
const pageButtonElement = document.querySelector(".orderPageButton");
pageButtonElement.disabled = true;
pageButtonElement.classList.add("orderPageButtonOff");

pageButtonElement.addEventListener("click", () => {
  let account = {};
  if (inputs.length >= 6) {
    account.name = inputs[0].value;
    account.street = inputs[1].value;
    account.apt = inputs[2].value;
    account.zip = inputs[3].value;
    account.city = inputs[4].value;
    account.state = inputs[5].value;
  }
  localStorage.setItem("account", JSON.stringify(account));
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
