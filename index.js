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


// Validation for FAQ Tab Change

function myFaq(evt, idName) {
    var i, faq_section, faq_butt;
    faq_section = document.getElementsByClassName("faq_section");
    for (i = 0; i < faq_section.length; i++) {
        faq_section[i].style.display = "none";
    }
    faq_butt = document.getElementsByClassName("faq_butt");
    for (i = 0; i < faq_butt.length; i++) {
        faq_butt[i].className = faq_butt[i].className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "block";
    evt.currentTarget.className += " active";
}



