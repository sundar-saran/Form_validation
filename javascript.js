function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const errorMsg1 = document.getElementById("errorMsg1");

  errorMsg.textContent = "";
  errorMsg1.textContent = "";
  let valid = true;

  if (email === "" || password === "") {
    if (email === "") errorMsg.textContent = "Please fill in the email field.";
    if (password === "") errorMsg1.textContent = "Please fill in the password field.";
    valid= false
    return valid;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    valid= false
    return valid;
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    errorMsg1.textContent = "Password must be at least 8 characters long, include one uppercase, one lowercase letter, and one number.";
    valid= false
    return valid;
  }

  alert("Login Successful")

  return true;
}
