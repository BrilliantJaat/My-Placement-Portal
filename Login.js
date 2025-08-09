document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // For now, just printing values (backend will be added later)
    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login successful");
  });
});