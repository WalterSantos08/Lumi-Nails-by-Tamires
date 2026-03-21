const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("active");

    const expanded = menu.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", expanded);
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (event) {
    const clickedInsideMenu = menu.contains(event.target);
    const clickedMenuBtn = menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuBtn) {
      menu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < triggerBottom) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);