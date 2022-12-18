function login() {
    // Get the values of the username and password inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username and password are correct
    if (username === "admin" && password === "password") {
      // If the username and password are correct, redirect the user to the next page
      window.location.href = "nextpage.html";
    } else {
      // If the username and password are incorrect, display an error message
      alert("Invalid username or password");
    }
  }
  //This will redirect the user to the "nextpage.html" page if the entered username and password are correct. You can customize this code to fit your specific needs and requirements. For example, you can use a server-side language to check the user's credentials against a database, or you can add additional form validation to ensure that the entered username and password are valid.
  
  
  
  
  