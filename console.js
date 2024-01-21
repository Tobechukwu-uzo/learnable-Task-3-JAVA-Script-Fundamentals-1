
const products = [
    { id: 1, name: "BELT", price: 10_000 },
    { id: 2, name: "SHIRT", price: 20_000 },
    { id: 3, name: "SHOE", price: 30_000 },
    { id: 4, name: "LAPTOP", price: 360_000},
  ];
  
  let cart = [];
  
  function displayProducts() {
    console.log("Available products:");
    products.forEach((product) => {
      console.log(`${product.id}. ${product.name} - N${product.price}`);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    if (product) {
      cart.push(product);
      console.log(`${product.name} added to cart.`);
    } else {
      console.log("Product not found.");
    }
  }
  
  function displayCart() {
    console.log("Cart items:");
    cart.forEach((product) => {
      console.log(`${product.id}. ${product.name} - N${product.price}`);
    });
  }
  
  function calculateTotal() {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });
    console.log(`Total: N${total}`);
  }
  
  // Example usage
  displayProducts();
  addToCart(1);
  addToCart(3);
  displayCart();
  calculateTotal();





