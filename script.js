document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Image Zoom and Modal Functionality
    const images = document.querySelectorAll(".slide img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-img" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".modal-img");
    const closeModal = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(0.9)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });

        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Header dark background on scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 10) {
            header.classList.add("header-dark");
        } else {
            header.classList.remove("header-dark");
        }
    });

    // Hero background switcher (first image instantly, then switch after 3 sec)
    const hero = document.querySelector('.hero');
    const heroImages = [
        './photo/sliders/anon-hero-x2.webp',
        './photo/sliders/tti-background-ezgif.com-avif-to-png-converter.png'
    ];
    let currentIndex = 0;

    // Set initial image immediately on load
    hero.style.setProperty('--hero-bg', `url('${heroImages[currentIndex]}')`);

    // Switch images every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % heroImages.length;
        hero.style.setProperty('--hero-bg', `url('${heroImages[currentIndex]}')`);
    }, 3000);
});
