const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Hardcoded credentials for demonstration purposes only
  const credentials = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  let loginSuccessful = false;
  for (let i = 0; i < credentials.length; i++) {
    if (username === credentials[i].username && password === credentials[i].password) {
      loginSuccessful = true;
      break;
    }
  }

  if (loginSuccessful) {
    // Redirect to main page
    window.location.href = "local connetc.html";
  } else {
    // Show error message
    alert("Incorrect username or password");
  }
});
