export async function loadBestSelling() {
  try {
    const response = await fetch("htmlComponents/bestSelling.html");
    const bestSellingHtml = await response.text();
    document.querySelector(".bestSelling-container").innerHTML =
      bestSellingHtml;
  } catch (error) {
    console.log(error);
  }
}
