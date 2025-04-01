document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Image Zoom and Modal Functionality
    const images = document.querySelectorAll(".slide img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><img class="modal-img" src="" alt=""></div>';
    document.body.appendChild(modal);

    const modalImg = modal.querySelector(".modal-img");
    const closeModal = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("mouseenter", function () {
            img.style.transform = "scale(0.9)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseleave", function () {
            img.style.transform = "scale(1)";
        });

        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Header opacity change based on scroll position
    const header = document.querySelector("header");
    const aboutSection = document.getElementById("home");
    let lastScrollTop = 0;

    // Function to check if the "About Us" section is in the viewport
    window.addEventListener("scroll", function () {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        // Scroll down behavior
        if (aboutSectionTop <= 0) {
            header.classList.add("header-dark");
        } else {
            header.classList.remove("header-dark");
        }

        // Scroll direction check
        const currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            header.classList.add("header-dark");
        } else {
            // Scrolling up
            header.classList.remove("header-dark");
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
