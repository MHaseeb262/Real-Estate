// company-intro section 
const section_img = document.querySelector('.section-img');
const lower_default_img = document.querySelector('.lower-img');
const upper_default_img = document.querySelector('.upper-img');

// Add event listeners for hover
section_img.addEventListener('mouseover', () => {
    lower_default_img.src = "images/Hover-img1.png"; // Change lower image
    upper_default_img.src = "images/Hover-img2.png"; // Change upper image (optional)
});

section_img.addEventListener('mouseout', () => {
    lower_default_img.src = "images/default-img-01.png"; // Revert lower image
    upper_default_img.src = "images/default-img-02.png"; // Revert upper image (optional)
});

// Overview property section 

// 1st
const default_img_01 = document.querySelector('.default-img-01');

default_img_01.addEventListener('mouseover', () => {
    const image = document.getElementById('speed-img');
    image.src = "images/Hover-img3.png";
});

default_img_01.addEventListener('mouseout', () => {
    const image = document.getElementById('speed-img');
    image.src = "images/default-img-03.png";
});

default_img_01.addEventListener('click', () => {
    $(document).ready(function () {
        $('.project-detail-carousel').carousel(0);
    });
});

// 2nd
const default_img_02 = document.querySelector('.default-img-02');

default_img_02.addEventListener('mouseover', () => {
    const image = document.getElementById('flexible-img');
    image.src = "images/Hover-img4.png";
});

default_img_02.addEventListener('mouseout', () => {
    const image = document.getElementById('flexible-img');
    image.src = "images/default-img-04.png";
});

default_img_02.addEventListener('click', () => {
    $(document).ready(function () {
        $('.project-detail-carousel').carousel(1);
    });
});

// 3rd
const default_img_03 = document.querySelector('.default-img-03');

default_img_03.addEventListener('mouseover', () => {
    const image = document.getElementById('trust-img');
    image.src = "images/Hover-img5.png";
});

default_img_03.addEventListener('mouseout', () => {
    const image = document.getElementById('trust-img');
    image.src = "images/default-img-05.png";
});

default_img_03.addEventListener('click', () => {
    $(document).ready(function () {
        $('.project-detail-carousel').carousel(2);
    });
});

// 4th
const default_img_04 = document.querySelector('.default-img-04');

default_img_04.addEventListener('mouseover', () => {
    const image = document.getElementById('custom-img');
    image.src = "images/Hover-img6.png";
});

default_img_04.addEventListener('mouseout', () => {
    const image = document.getElementById('custom-img');
    image.src = "images/default-img-06.png";
});

default_img_04.addEventListener('click', () => {
    $(document).ready(function () {
        $('.project-detail-carousel').carousel(3);
    });
});



// Get carousel elements
const carousel = document.getElementById("carouselExampleIndicators");
const items = carousel.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update button states
function updateButtonStates() {
    carousel.addEventListener("slid.bs.carousel", () => {
        const activeItem = carousel.querySelector(".carousel-item.active");
        const activeIndex = Array.from(items).indexOf(activeItem);

        // print for testing 
        console.log("Active Index:", activeIndex);

        // Disable previous button if the first item is active
        prevBtn.disabled = activeIndex === 0;

        // Disable next button if the last item is active
        nextBtn.disabled = activeIndex === items.length - 1;
    });

};

// Listen for carousel slide events
carousel.addEventListener("slide.bs.carousel", updateButtonStates);

// Initialize button states
updateButtonStates();


// Our projects card slider carousel
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const carouselItems = document.querySelectorAll(".custom-carousel-item");
    
    let currentTranslate = 0; // Track translation value
    const moveDistance = 407; // The distance each item should move

    prevButton.addEventListener("click", function () {
        currentTranslate -= moveDistance;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentTranslate += moveDistance;
        updateCarousel();
    });

    function updateCarousel() {
        carouselItems.forEach(item => {
            item.style.transform = `translateX(${currentTranslate}px)`;
            item.style.transition = "transform 0.5s ease";
        });
    }
});
