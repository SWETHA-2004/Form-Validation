document.getElementById("verificationForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  clearErrors();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  if (fullName.length < 5) {
    setError("nameError", "Name must be at least 5 characters long.");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!emailPattern.test(email)) {
  setError("emailError", "Enter a valid email address (e.g., user@example.com).");
  isValid = false;
}

  if (!/^\d{10}$/.test(phone) || phone === "1234567890") {
    setError("phoneError", "Enter a valid 10-digit phone number.");
    isValid = false;
  }

  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === fullName.toLowerCase()
  ) {
    setError("passwordError", "Password must be strong and at least 8 characters long.");
    isValid = false;
  }

  if (password !== confirmPassword) {
    setError("confirmPasswordError", "Passwords do not match.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("verificationForm").reset();
  }
});

function setError(id, message) {
  document.getElementById(id).textContent = message;
}
function clearErrors() {
  const errorFields = ["nameError", "emailError", "phoneError", "passwordError", "confirmPasswordError"];
  for (let field of errorFields) {
    document.getElementById(field).textContent = "";
  }
}
