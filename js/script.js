const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click',() =>{
    menu.classList.add('active');
    
});

close.addEventListener('click',() =>{
    menu.classList.remove('active');
});

const interest = document.querySelectorAll('.skills__ratings-interest'),
      lines = document.querySelectorAll('.skills__ratings-line span');

interest.forEach((item,i) => {
    lines[i].style.width = item.innerHTML;
})


const slides = document.querySelectorAll('.slider__slide');
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next');
let slideIndex = 1;

const showSlides = (n) => {
    if(n > slides.length){
        slideIndex = 1 ;
    }else if(n < 1){
        slideIndex = slides.length;
    }

    slides.forEach(i => i.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

const plusSlider = (n)=>{
    showSlides(slideIndex += n)
}

prev.addEventListener('click',()=>{
    plusSlider(- 1);
})

next.addEventListener('click',()=>{
    plusSlider(+ 1);
})

