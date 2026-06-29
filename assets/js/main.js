
const navButton = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_links");
const header = document.querySelector(".site_header");

if (navButton && navLinks) {
  navButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

function updateHeaderState() {
  if (!header) return;

  const scrollY = window.scrollY || window.pageYOffset;
  const fullHeight = document.documentElement.scrollHeight - window.innerHeight;

  header.classList.toggle("compact", scrollY > 24);

  if (fullHeight > 900) {
    header.classList.toggle("away", scrollY > fullHeight - 260);
  }
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", updateHeaderState);
updateHeaderState();
