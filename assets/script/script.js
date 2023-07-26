const menuBtn = document.getElementById("menu_icon");

menuBtn.addEventListener("click", function () {
  navList = document.getElementById("nav_list");
  if (parseFloat(getComputedStyle(navList).top) < 0) {
    navList.style.top = "0";
    navList.style.left = "0";
  } else {
    navList.style.top = "-20em";
    navList.style.left = "100%";
  }
});
