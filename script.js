// Checkbox toggle logic
document.querySelectorAll(".checkbox").forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("checked");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll-to-top button logic
const scrollBtn = document.getElementById("scrollToTopBtn");

if (scrollBtn) {
  // Show or hide the button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  // Scroll to top when button is clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
