
// Listen for click events on links where the href starts with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
    // Scroll smoothly to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});
});

document.addEventListener('DOMContentLoaded', function () {
const navbar = document.querySelector('.fixed-navbar');
const navbarReplacement = document.getElementById('fixed-navbar-replacement');

// Initially hide the fixed navbar on small screens
if (window.innerWidth <= 768) {
    navbar.style.display = 'none';
}

// Toggle the fixed navbar on click
navbarReplacement.addEventListener('click', function () {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'block';
    } else {
    navbar.style.display = 'none';
    }
});

//Adjust visibility based on window resizing
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
    // Always show the navbar on larger screens
    navbar.style.display = 'block';
    } else {
    // Keep the current toggle state or hide by default on smaller screens
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    }
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    navbar.style.transform = navbar.style.transform === 'translateX(0px)' ? 'translateX(-100%)' : 'translateX(0px)';
});

// Adjusted section to toggle menu visibility based on window size
function adjustMenuVisibility() {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block'; // Show the toggle on small screens
    } else {
        menuToggle.style.display = 'none'; // Hide the toggle on larger screens
        navbar.style.transform = 'translateX(0px)'; // Ensure navbar is visible
    }
}

// Call adjustMenuVisibility on window resize and initial load
window.addEventListener('resize', adjustMenuVisibility);
adjustMenuVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
const homePanel = document.getElementById('home-panel');
const fixedNavbarLinks = document.querySelectorAll('.fixed-navbar a');
const navbarReplacement = document.querySelector('.fixed-navbar-replacement');
const menuToggle = document.querySelector('.menu-toggle');

let options = {
    root: null, 
    threshold: 0.4,
    rootMargin: "0px"
};
let callback = (entries, observer) => {
    entries.forEach(entry => {
        fixedNavbarLinks.forEach(link => {
            if(entry.isIntersecting) {
                link.style.color = 'white';
                navbarReplacement.style.backgroundColor = 'transparent';
                menuToggle.style.backgroundColor = 'transparent';

            } else {
                link.style.color = 'black';
                navbarReplacement.style.backgroundColor = 'black';
                menuToggle.style.backgroundColor = 'black';

            }
        });
    });
};
let observer = new IntersectionObserver(callback, options);
observer.observe(homePanel);
});
