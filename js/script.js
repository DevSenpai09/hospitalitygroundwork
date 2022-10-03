let isMobileNav = false;

const setIsMobileNav = () => {
  isMobileNav = !isMobileNav;
  if (isMobileNav) {
    document.querySelector("#cancel").style.display = "flex";
    document.querySelector("#hamburger").style.display = "none";
    document.querySelector(".mobile_nav").classList.add("slide");
  } else {
    document.querySelector("#cancel").style.display = "none";
    document.querySelector("#hamburger").style.display = "flex";
    document.querySelector(".mobile_nav").classList.remove("slide");
  }
};
