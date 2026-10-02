(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Placeholder connect links: stay on page, don't jump to top
  document.querySelectorAll('.link-card[href="#"]').forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
})();
