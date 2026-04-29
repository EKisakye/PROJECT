const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displayslide");
        intervalid = setInterval(nextSlide, 5000);
    }

}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }

    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayslide")
    });
    slides[slideIndex].classList.add("displayslide");
}

function prevSlide(){
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}