document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const purpose = document.getElementById("purpose").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "9140876235";
  const text = `Booking Request:%0A
  Name: ${name}%0A
  Contact: ${contact}%0A
  Purpose: ${purpose}%0A
  Date: ${date}%0A
  Details: ${message}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  alert("Your booking request is being sent to WhatsApp!");
if (!/^\d{10}$/.test(contact)) {
  alert("Please enter a valid 10-digit phone number.");
  return;
}

if (!date) {
  alert("Please select a valid event date.");
  return;
}

  window.open(url, "_blank");
});
// Fade-in + zoom effect when gallery images enter viewport
const galleryImages = document.querySelectorAll(".gallery-grid img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear"); // add the CSS class
      observer.unobserve(entry.target); // stop observing once visible
    }
  });
}, {
  threshold: 0.2 // trigger when 20% of image is visible
});

// Attach observer to each image
galleryImages.forEach(img => {
  observer.observe(img);
});
// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
// Testimonials fade-in
const testimonials = document.querySelectorAll(".testimonial");

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      testimonialObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

testimonials.forEach(t => testimonialObserver.observe(t));
// Section fade-in on scroll
const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => sectionObserver.observe(sec));

