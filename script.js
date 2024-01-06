const sections = document.querySelectorAll("section");


window.addEventListener('scroll', function() {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("scroll");
    } else {
      sec.classList.remove("scroll");
    }
  });
});

