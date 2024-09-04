export function showPaypalButtons() {
  const paypalContainer = document.getElementById("paypal-button-container");
  const paypalCheckbox = document.getElementById("paypal-checkbox");

  // Initially hide PayPal buttons
  paypalContainer.style.display = "none";

  paypalCheckbox.addEventListener("change", function (event) {
    const isChecked = event.target.checked;

    if (isChecked) {
      paypalContainer.style.display = "block";

      // Render the PayPal button
      paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01", // Replace with actual amount
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              // Handle successful transaction here
            });
          },
        })
        .render("#paypal-button-container");
    } else {
      paypalContainer.style.display = "none";
      paypalContainer.innerHTML = ""; // Clear PayPal buttons when unchecked
    }
  });
}
