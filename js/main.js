// toggle the navigation menu when the hamburger menu icon is clicked

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

//expand button

document.querySelectorAll(".expand-button").forEach(function(button) {
  button.addEventListener("click", function() {
  const experienceDescription = this.nextElementSibling;
  experienceDescription.style.display = (experienceDescription.style.display === "none") ? "block" : "none";
  });
  });