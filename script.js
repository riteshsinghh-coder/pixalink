document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu visibility
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close the menu when clicking anywhere outside the menu
    window.addEventListener("click", (event) => {
        if (!event.target.closest('.hamburger') && !event.target.closest('.nav-links') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth Scroll for navigation links
    const navItems = document.querySelectorAll(".nav-links a");
    const navbar = document.querySelector('.navbar');

    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const navbarHeight = navbar.offsetHeight;

            window.scrollTo({
                top: target.offsetTop - navbarHeight,
                behavior: "smooth"
            });
        });
    });

    // Custom scroll for "Read More" button
    const readMoreBtn = document.querySelector('.btn[href="#about"]');
    if (readMoreBtn) {
        readMoreBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const navbarHeight = navbar.offsetHeight;
            const offset = -45;

            window.scrollTo({
                top: target.offsetTop - navbarHeight + offset,
                behavior: "smooth"
            });
        });
    }

    // Custom scroll for "Get in Touch" button
    const getInTouchBtn = document.querySelector('.btn[href="#contact"]');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const navbarHeight = navbar.offsetHeight;
            const offset = -30;

            window.scrollTo({
                top: target.offsetTop - navbarHeight + offset,
                behavior: "smooth"
            });
        });
    }

    // Custom scroll for "SEE ALL SERVICES" button
    const seeAllServicesBtn = document.querySelector('.btn[href="#industries"]');
    if (seeAllServicesBtn) {
        seeAllServicesBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            const navbarHeight = navbar.offsetHeight;
            const offset = -30;

            window.scrollTo({
                top: target.offsetTop - navbarHeight + offset,
                behavior: "smooth"
            });
        });
    }

    // Smooth Scroll for "Portfolio" button
    const portfolioBtn = document.querySelector('#portfolioBtn');
    const portfolioSection = document.querySelector('#portfolio');

    if (portfolioBtn) {
        portfolioBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: portfolioSection.offsetTop - 60, // Adjust offset if needed
                behavior: "smooth"
            });
        });
    }

    // Smooth Scroll for "For Work Enquiry →" button
    const workEnquiryBtn = document.querySelector('#contact2');
    const contactSection = document.querySelector('#contact');

    if (workEnquiryBtn) {
        workEnquiryBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: contactSection.offsetTop - 60, // Adjust offset if needed
                behavior: "smooth"
            });
        });
    }

    // Image Zoom and Modal Functionality
    const images = document.querySelectorAll(".slide img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-img" src="" alt=""/>
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

    // Hero background switcher
    const hero = document.querySelector('.hero');
    const heroImages = [
        './photo/sliders/anon-hero-x2.webp',
        './photo/sliders/tti-background-ezgif.com-avif-to-png-converter.png'
    ];
    let currentIndex = 0;

    hero.style.setProperty('--hero-bg', `url('${heroImages[currentIndex]}')`);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % heroImages.length;
        hero.style.setProperty('--hero-bg', `url('${heroImages[currentIndex]}')`);
    }, 3000);
});
