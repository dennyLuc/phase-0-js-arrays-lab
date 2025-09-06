// Write your code here
const products = [];
products.push("Laptop", "Phone", "Headphones", "Monitor");

function logFirstProduct() {
  console.log(products[0])
}

function addProduct(productName) {
  products.push(productName)
}

function updateProductName(productPosition, newName) {
  products[productPosition] = newName;
}

function removeLastProduct() {
  products.pop()
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
