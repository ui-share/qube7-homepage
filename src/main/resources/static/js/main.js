document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item.dropdown");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const offcanvas = document.querySelector("#mainNavbar");

  /* -------------------------
   * Navigation (Header)
   * ------------------------- */

  // PC Hover
  function handleDesktopMenu(item) {
    const link = item.querySelector(".nav-link");
    const submenu = item.querySelector(".dropdown-menu");
    if (!submenu) return;

    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 991) {
        submenu.classList.add("is-open");
        link.classList.add("is-active");
        link.setAttribute("aria-expanded", "true");
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991) {
        submenu.classList.remove("is-open");
        link.classList.remove("is-active");
        link.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Mobile Click
  function handleMobileMenu(item) {
    const link = item.querySelector(".nav-link");
    const submenu = item.querySelector(".dropdown-menu");
    if (!submenu) return;

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();

        const isOpen = submenu.classList.contains("is-open");

        if (isOpen) {
          submenu.classList.remove("is-open");
          link.classList.remove("is-active");
          link.setAttribute("aria-expanded", "false");
          return;
        }

        closeAllDropdowns();
        submenu.classList.add("is-open");
        link.classList.add("is-active");
        link.setAttribute("aria-expanded", "true");
      }
    });
  }

  // 모든 드롭다운 닫기
  function closeAllDropdowns() {
    document.querySelectorAll(".nav-item.dropdown .dropdown-menu.is-open").forEach((openMenu) => {
      openMenu.classList.remove("is-open");
    });
    document.querySelectorAll(".nav-item.dropdown .nav-link.is-active").forEach((activeLink) => {
      activeLink.classList.remove("is-active");
      activeLink.setAttribute("aria-expanded", "false");
    });
  }

  // 메뉴 초기화
  function resetMenus() {
    closeAllDropdowns();
    if (offcanvas) {
      offcanvas.classList.remove("is-show");
    }
    document.body.style.overflow = ""; // 항상 스크롤 복원
  }

  // 바인딩
  navItems.forEach((item) => {
    handleDesktopMenu(item);
    handleMobileMenu(item);
  });

  // 리사이즈 시 초기화
  let lastWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (
      (lastWidth > 991 && currentWidth <= 991) ||
      (lastWidth <= 991 && currentWidth > 991)
    ) {
      resetMenus();
    }
    lastWidth = currentWidth;
  });

  // 외부 클릭 → 드롭다운 닫기
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-item.dropdown") &&
      !e.target.closest(".navbar-toggler") &&
      !e.target.closest("#mainNavbar")
    ) {
      closeAllDropdowns();
    }
  });

  // Offcanvas 토글
  if (navbarToggler && offcanvas) {
    navbarToggler.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        offcanvas.classList.toggle("is-show");

        if (offcanvas.classList.contains("is-show")) {
          closeAllDropdowns();
          document.body.style.overflow = "hidden"; //  스크롤 막기
        } else {
          document.body.style.overflow = ""; //  스크롤 복원
        }
      }
    });
  }

  /* -------------------------
   * Swiper (Main Visual)
   * ------------------------- */
  if (document.querySelector(".mainSwiper")) {
    var swiper = new Swiper(".mainSwiper", {
      cssMode: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewheel: true,
      keyboard: true,
    });
    console.log("Swiper initialized:", swiper);
  }
});
