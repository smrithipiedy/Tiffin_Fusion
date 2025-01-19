// Display cart items in the checkout table
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Get cart items from localStorage
    const tableBody = document.getElementById('cart-items-table-body'); // Get the table body where items will be listed

    // Clear the table before re-rendering
    tableBody.innerHTML = '';

    // Loop through each item in the cart and create a table row
    cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>${item.quantity}</td>
            <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Remove item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Get the current cart items
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cartItems', JSON.stringify(cart)); // Update the cart in localStorage
    displayCartItems(); // Re-render the table
}

// Clear the entire cart
function clearCart() {
    localStorage.removeItem('cartItems'); // Remove cart items from localStorage
    displayCartItems(); // Re-render the empty table
}

// Proceed to checkout (just for demonstration)
function checkout() {
    const cart = JSON.parse(localStorage.getItem('cartItems')) || []; // Get the current cart items
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // You can redirect the user to a payment page or handle checkout logic here
    }
}

// Display cart items when the page loads
window.onload = displayCartItems;
