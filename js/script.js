document.querySelector(".burger").addEventListener("click", function (e) {
  e.preventDefault();
  // this.classList.toggle("burger-line--active")
  if (this.classList.contains("active")) {
    this.classList.remove("active")
    document.querySelector(".nav").classList.remove("nav--active");
    document.querySelector(".header").classList.remove("header--active");
    document.body.style.overflow = 'visible';
  }

  else {
    this.classList.add("active")
    document.querySelector(".nav").classList.add("nav--active");
    document.querySelector(".header").classList.add("header--active");
    document.body.style.overflow = 'hidden';
  }
})
