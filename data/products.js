export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id == productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

class Product {
  id;
  image;
  name;
  priceCents;
  type;
  location;
  favourite;
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
    this.type = productDetails.type;
    this.location = productDetails.location;
    this.favourite = productDetails.favourite;
  }
}
export let products = JSON.parse(localStorage.getItem("glassesproducts")) || [];

export async function loadProductsFetch(fun) {
  try {
    let promise;
    let data;
    promise = await fetch("../API/products.json");
    data = await promise.json();
    products = data.map((productDetails) => {
      return new Product(productDetails);
    });
    if (typeof fun === "function") {
      fun();
    }
    return products;
  } catch (error) {
    console.log(
      `Oops there might be some error in your code try again later ${error}`
    );
  }
}

export function saveProductToStorage() {
  localStorage.setItem("glassesproducts", JSON.stringify(products));
}
