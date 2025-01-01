// Example of form submission handling for Sign In

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Basic validation (add your own validation rules)
    if (email && password) {
      console.log('Sign In successful!');
      // You can replace this with actual authentication logic
    } else {
      alert('Please fill in both fields');
    }
  });
  
  // Example of form submission handling for Sign Up
  
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;
  
    // Basic validation
    if (signupEmail && signupPassword) {
      console.log('Sign Up successful!');
      // You can replace this with actual sign-up logic
    } else {
      alert('Please fill in both fields');
    }
  });
  