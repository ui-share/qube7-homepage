document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item.dropdown");
  const toggler = document.querySelector(".navbar-toggler");
  const offcanvas = document.getElementById("mainNavbar");

  // 👉 햄버거 버튼 클릭 시 offcanvas 열고 닫기
  if (toggler && offcanvas) {
    toggler.addEventListener("click", () => {
      offcanvas.classList.toggle("is-show");
    });
  }

  // ✅ PC에서는 hover로 드롭다운 보이기
  function handleDesktopMenu(item) {
    const link = item.querySelector(".nav-link");
    const submenu = item.querySelector("ul");

    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 991 && submenu) {
        submenu.style.display = "block";
        link.classList.add("open");
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991 && submenu) {
        submenu.style.display = "none";
        link.classList.remove("open");
      }
    });
  }

  // ✅ 모바일에서는 클릭으로 토글
  function handleMobileMenu(item) {
    const link = item.querySelector(".nav-link");
    const submenu = item.querySelector(".dropdown-menu");

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 991 && submenu) {
        e.preventDefault(); // 링크 이동 방지
        submenu.classList.toggle("is-open");
      }
    });
  }

  navItems.forEach((item) => {
    handleDesktopMenu(item);
    handleMobileMenu(item);
  });

  // ✅ 화면 크기 바뀔 때 드롭다운/오프캔버스 초기화
  window.addEventListener("resize", () => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (window.innerWidth > 991) {
        menu.style.display = "none"; // PC 전환 시 초기화
        menu.classList.remove("is-open");
      } else {
        menu.style.display = ""; // 모바일에서는 기본값 복원
      }
    });

    // PC 전환 시 offcanvas 닫기
    if (window.innerWidth > 768 && offcanvas) {
      offcanvas.classList.remove("is-show");
    }
  });
});
