document.querySelector("form").addEventListener("submit", function (e) {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    e.preventDefault();
    alert("Please enter a valid email address.");
    return;
  }

  // Feedback
  alert("Thank you for the message!");

  // Backend
});
