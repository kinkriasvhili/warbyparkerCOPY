export function getProduct(productId) {
  let matchingProduct;

  if (JSON.parse(localStorage.getItem("glassesproducts"))) {
    let jsonProducts = JSON.parse(localStorage.getItem("glassesproducts"));
    jsonProducts.forEach((product) => {
      if (product.id == productId) {
        matchingProduct = product;
      }
    });
  } else {
    products.forEach((product) => {
      if (product.id == productId) {
        matchingProduct = product;
      }
    });
  }

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
  bestSelling;
  color;
  size;
  colors;
  ratings;
  gender;
  sizes;
  topSearch;
  constructor(productDetails) {
    this.gender = productDetails.gender;
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.priceCents = productDetails.priceCents;
    this.type = productDetails.type;
    this.location = productDetails.location;
    this.favourite = productDetails.favourite;
    this.bestSelling = productDetails.bestSelling
      ? productDetails.bestSelling
      : false;
    this.brand = productDetails.brand;
    this.color = productDetails.color;
    this.size = productDetails.size;
    this.colors = productDetails.colors;
    this.ratings = productDetails.ratings;
    this.sizes = productDetails.sizes;
    this.topSearch = productDetails.topSearch;
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
    console.log(`Oops there might be some error in your code. ${error}`);
  }
}

export function saveProductToStorage(products) {
  if (products) {
    localStorage.setItem("glassesproducts", JSON.stringify(products));
  }
}
