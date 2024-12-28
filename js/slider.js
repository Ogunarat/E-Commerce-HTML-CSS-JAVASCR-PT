//! slider start
let slidesIndex = 1 ;

showSlides(slidesIndex);

setInterval(()=>{
    showSlides((slidesIndex += 1));
},4000);

function plusSlide(n){
    showSlides((slidesIndex += n))
}
function currentSlide(n){
    showSlides((slidesIndex = n))
}
function showSlides(n){
    const sliderItem = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    if(n > sliderItem.length){
        slidesIndex = 1 ;
    }
    if(n < 1){
        slidesIndex = sliderItem.length;
    }
    for (let i = 0; i < sliderItem.length; i++){
    sliderItem[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }

    sliderItem[slidesIndex - 1].style.display = "flex";
    dots[slidesIndex - 1].className += " active";
}

//! slider end