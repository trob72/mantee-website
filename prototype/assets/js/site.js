const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-site-nav]");
const header = document.querySelector(".site-header");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.getAttribute("data-open") === "true";
    const nextOpen = !isOpen;
    nav.setAttribute("data-open", String(nextOpen));
    toggle.setAttribute("aria-expanded", String(nextOpen));

    if (header) {
      header.setAttribute("data-menu-open", String(nextOpen));
    }
  });
}

if (header) {
  const updateHeaderState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
}
