// Highlight current nav link
const navLinks = document.querySelectorAll("header nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #ff4fa1;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
