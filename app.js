function showQuote() {
  const quotes = [
    "You are capable of amazing things!",
    "Believe in yourself and all that you are.",
    "The future depends on what you do today.",
    "Keep pushing forward, no matter what!"
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  alert(quotes[randomIndex]);
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
