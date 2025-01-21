let cartCount = 0;
// Function to add item to cart (localStorage)
function addToCart(itemName, price) {
  // Update cart count
  cartCount++;
  document.getElementById("cart-count").textContent = `(${cartCount})`;

  let cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Get existing cart items or initialize as empty array

  const item = {
    name: itemName,
    price: price,
    quantity: 1 // Initially set quantity to 1
  };

  cart.push(item); // Add the new item to the cart array
  localStorage.setItem('cartItems', JSON.stringify(cart)); // Store the updated cart array in localStorage

  console.log(item);
}
