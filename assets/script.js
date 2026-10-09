
 // ส่วนเปิดและปิดเมนู
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

if (menuButton && menu) {

    // ฟังก์ชันปิดเมนู
    function closeMenu() {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    }

    // เมื่อกดปุ่มเมนู
    menuButton.addEventListener("click", function() {
        const open = menu.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(open));
    });

    // เมื่อกดลิงก์ในเมนู ให้ปิดเมนู
    const links = menu.querySelectorAll("a");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", closeMenu);
    }

    // เมื่อกดปุ่ม Escape ให้ปิดเมนู
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}


// ส่วน Animation เวลาเลื่อนหน้าเว็บ
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    const observer = new IntersectionObserver(function(entries) {

        for (let i = 0; i < entries.length; i++) {

            if (entries[i].isIntersecting) {
                entries[i].target.classList.add("visible");
                observer.unobserve(entries[i].target);
            }

        }

    }, { threshold: 0.08 });

    document.documentElement.classList.add("js-motion");

    // เลือกส่วนที่ต้องการให้มี Animation
    const sections = document.querySelectorAll(".reveal");

    for (let i = 0; i < sections.length; i++) {
        observer.observe(sections[i]);
    }
}
