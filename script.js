let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 50000);
}

function currentSlide(n) {
  showSlides((slideIndex = n - 1));
}

// TXT Slider

var customSlideIndex = 0;
customShowSlides();

function customShowSlides() {
  var i;
  var customSlides = document.getElementsByClassName("custom-slide");
  var customDots = document.getElementsByClassName("custom-dot");
  for (i = 0; i < customSlides.length; i++) {
    customSlides[i].style.display = "none";
    customDots[i].classList.remove("custom-active");
  }
  customSlideIndex++;
  if (customSlideIndex > customSlides.length) {
    customSlideIndex = 1;
  }
  if (customSlideIndex < 1) {
    customSlideIndex = customSlides.length;
  }
  customSlides[customSlideIndex - 1].style.display = "block";
  customDots[customSlideIndex - 1].classList.add("custom-active");
  setTimeout(customShowSlides, 80000); 
}



function customCurrentSlide(n) {
  customShowSlides((customSlideIndex = n - 1));
}






const faqs = document.querySelectorAll(".faq")

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{
    faq.classList.toggle("active");
  })
})