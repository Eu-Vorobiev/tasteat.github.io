document.addEventListener("DOMContentLoaded", function () {
  let anchors = document.querySelectorAll(".scroll-link a[href*='#']");
  let bookingBtn = document.querySelector(".scroll-link");
  bookingBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = bookingBtn.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  // scroll spy
  let section = document.querySelectorAll(".spy-section");
  let navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", (e) => {
    section.forEach(sec => {

      let top = window.scrollY;
      let secHeight = sec.offsetHeight;
      let offset = sec.offsetTop - 100;
      let secId = sec.getAttribute("id");

      if (top >= offset && top < offset + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove("text-accent");
          document.querySelector(".nav a[href*=" + secId + "]").classList.add("text-accent");
        })
      }
    });
  })

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".mobile-menu");
  let overlay = document.querySelector(".backdrop");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  let menuItem = document.querySelectorAll(".mobile-menu a");
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function () {
      this.closest(".mobile-menu").classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  };

  let sliderReviews = document.querySelector(".reviews-slider");
  if (sliderReviews) {
    const swiper = new Swiper(sliderReviews, {
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
      },
    });
  }
});