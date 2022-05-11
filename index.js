// Validation of Navigation bar

function changeBg() {
    var navbar = document.getElementById('nav')
    var scrollValue = window.scrollY;
    if (scrollValue > 0) {
        nav.classList.add('scroll_nav')
    } else {
        nav.classList.remove('scroll_nav');
    }
}
window.addEventListener('scroll', changeBg);