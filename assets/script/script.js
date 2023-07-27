document.getElementById("this_year").innerHTML = new Date().getFullYear();

const menuBtn = document.getElementById("menu_icon");

menuBtn.addEventListener("click", function () {
  const navList = document.getElementById("nav_list");
  if (parseFloat(getComputedStyle(navList).top) < 0) {
    navList.style.top = "0";
    navList.style.left = "0";
  } else {
    navList.style.top = "-20em";
    navList.style.left = "100%";
  }
});

const technologies = document.getElementById("technologies");

const progressBars = technologies.querySelectorAll(".progress .bar");

function technologiesUpInView() {
  if (technologies.getBoundingClientRect().top <= window.innerHeight) {
    for (const bar of progressBars) {
      bar.style.width = bar.dataset.width;
    }
    document.removeEventListener("scroll", technologiesUpInView);
  }
}

document.addEventListener("scroll", technologiesUpInView);
