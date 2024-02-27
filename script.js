document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const links = document.querySelectorAll('.links');


    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Example condition
            navbar.classList.add('blurred');
            logo.classList.add('shrink');
            links.forEach(link => link.classList.add('shrink'));
        } else {
            navbar.classList.remove('blurred');
            logo.classList.remove('shrink');
            links.forEach(link => link.classList.remove('shrink'));
        }
    });
});


function toggleMenu() {
    var links = document.querySelector('.navbar-links');
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}


