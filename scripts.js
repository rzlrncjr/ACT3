// scripts.js
// Student Portfolio Interactivity (from JavaScript module concepts)

// Smooth Scroll
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight Active Section in Navbar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 120; // adjust for navbar height

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorBox = document.getElementById("form-error");

  // Check empty fields
  if (!name || !email || !message) {
    errorBox.textContent = "All fields are required!";
    return;
  }

  // Validate email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorBox.textContent = "Please enter a valid email address!";
    return;
  }

  // Clear error and submit
  errorBox.textContent = "";
  alert("Form submitted successfully!");
  this.reset();
});

// Project Modal: show title and description on click
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", function() {
    const title = this.getAttribute("data-title");
    let desc = this.getAttribute("data-desc");

    const hiddenText = this.querySelector(".card-text");
    if (hiddenText) {
      desc = hiddenText.innerText;
    }

    document.getElementById("projectModalLabel").innerText = title;
    document.getElementById("projectModalBody").innerHTML = `<p>${desc}</p>`; // wrap in <p> for justification

    const modal = new bootstrap.Modal(document.getElementById("projectModal"));
    modal.show();
  });
});

// CSS Manipulation Example
document.getElementById("color_button")?.addEventListener("click", function () {
  this.style.backgroundColor = "purple";
  this.style.transform = "scale(1.1)";
});
