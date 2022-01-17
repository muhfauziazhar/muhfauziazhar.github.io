// Scroll Header
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1) {
    $("#navbar, .totop-btn").addClass("scrolled");
  } else {
    $("#navbar, .totop-btn").removeClass("scrolled");
  }
});

// Open menu
$(".open-navbar").on("click", function (el) {
  el.preventDefault();
  $("#navbar .nav").toggleClass("opened");
});

// Navbar scroll function
const offset = 45;
$("[data-nav]").on("click", function (el) {
  el.preventDefault();

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = document
    .getElementById($(this).data("nav"))
    .getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});

// AOS init
AOS.init();
