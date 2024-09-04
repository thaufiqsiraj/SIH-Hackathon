const ratings = document.querySelectorAll(".ratings");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied"; // Default rating

// Attaching Event for Rating Selection
ratingsContainer.addEventListener("click", (e) => {
  // Check if clicked element is part of a rating
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive(); // Remove active class from all ratings

    e.target.parentNode.classList.add("active"); // Add active class to selected rating
    selectedRating = e.target.nextElementSibling.innerHTML; // Update selected rating
  }
});

// Attaching Event for Send Button
sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">💖</p>
    <strong>Thank You! </strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>`;

  // Redirect after 3 seconds
  setTimeout(() => {
    window.location.href = 'https://www.example.com'; // Replace with your URL
  }, 3000);
});

// Function to Remove Active Class from Ratings
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
