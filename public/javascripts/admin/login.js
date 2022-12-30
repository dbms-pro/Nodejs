const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Create a virtual DOM with a form element
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
  <body>
    <form id="login-form">
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username"><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password"><br><br>
      <button type="submit">Login</button>
    </form> 
  </body>
  </html>
`);

// Get a reference to the virtual document object
const document = dom.window.document;

// Get a reference to the form element
const form = document.getElementById('login-form');

// Get a reference to the username and password input elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Validate the form
const validateForm = (form, usernameInput, passwordInput) => {
  const correctUsername = "admin";
  const correctPassword = "password";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === correctUsername && password === correctPassword) {
      form.submit();
    } else {
      alert("Incorrect username or password");
    }
  });
};

validateForm(form, usernameInput, passwordInput);
