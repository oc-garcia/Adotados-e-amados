const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1.4,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function sendForm() {
  console.log("envia formulário");
}

const menu_btn = document.querySelector(".hamburguer");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
});
