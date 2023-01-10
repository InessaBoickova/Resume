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


