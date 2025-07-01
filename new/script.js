// Scroll animation
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

// Booking form handler
const form = document.getElementById("bookingForm");
const messageDiv = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  messageDiv.textContent = "Thanks for booking your ride! We'll be in touch.";
  messageDiv.style.color = "green";
  form.reset();
});
// Highlight active nav link
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 60;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
