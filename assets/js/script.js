document.addEventListener("DOMContentLoaded", function() {
    // Toggle Menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.main-menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Toggle class 'active' pada menu
    });

    // Highlight Menu Item Saat Scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-menu a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.href.includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Animasi Saat Elemen Masuk Layar
    const animatedItems = document.querySelectorAll(".animated");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in"); // Tambahkan animasi fade-in
            }
        });
    });

    animatedItems.forEach(item => {
        observer.observe(item); // Observe elemen-elemen yang ditandai
    });

    // Transisi Halaman yang Halus
    const body = document.body;

    window.addEventListener('beforeunload', function() {
        body.classList.add('fade-out'); // Efek fade out saat meninggalkan halaman
    });

    window.addEventListener('load', function() {
        body.classList.remove('fade-out');
        body.classList.add('fade-in'); // Efek fade in saat halaman dimuat
    });
});
