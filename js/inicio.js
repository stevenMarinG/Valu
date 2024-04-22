let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
let slide_Index = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slide_Index += n);
}

// Thumbnail image controls
function currentSlide(n) {
    show_Slides(slide_Index = n);
}

function show_Slides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides_");
    let dots = document.getElementsByClassName("dot_");
    if (n > slides.length) { slide_Index = 1 }
    if (n < 1) { slide_Index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_Index - 1].style.display = "block";
    dots[slide_Index - 1].className += " active";
}