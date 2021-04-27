const slidpage = document.querySelector('.slidpage');
const firNextBtn = document.querySelector('.nextBtn');
const preBtnsec = document.querySelector('.prev-1');
const nexBtnsec = document.querySelector('.next-1');
const preBtnThird = document.querySelector('.prev-2');
const nexBtnThird = document.querySelector('.next-2');
const preBtnFourt = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const progressText = document.querySelectorAll('.step p');
const progresscheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');

let max = 4; 
let current = 1;

firNextBtn.addEventListener('click', function(){
    slidpage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add('active');
    progresscheck[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    current += 1;
})

nexBtnsec.addEventListener('click', function(){
    slidpage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add('active');
     progresscheck[current - 1].classList.add('active');
     progressText[current - 1].classList.add('active');
    current += 1;
})

nexBtnThird.addEventListener('click', function(){
    slidpage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add('active');
     progresscheck[current - 1].classList.add('active');
     progressText[current - 1].classList.add('active');
    current += 1;
})

submitBtn.addEventListener('click', function(){
    bullet[current - 1].classList.add('active');
     progresscheck[current - 1].classList.add('active');
     progressText[current - 1].classList.add('active');
    current += 1;
    setTimeout(function(){
        alert('Congratulation')
        location.reload();
    },800)
})

preBtnsec.addEventListener('click', function(){
    slidpage.style.marginLeft = "0%";
     bullet[current - 2].classList.remove('active');
     progresscheck[current - 2].classList.remove('active');
     progressText[current - 2].classList.remove('active');
    current -= 1;
})

preBtnThird.addEventListener('click', function(){
    slidpage.style.marginLeft = "-25%";
     bullet[current - 2].classList.remove('active');
     progresscheck[current - 2].classList.remove('active');
     progressText[current - 2].classList.remove('active');
    current -= 1;
}) 

preBtnFourt.addEventListener('click', function(){
    slidpage.style.marginLeft = "-50%";
     bullet[current - 2].classList.remove('active');
     progresscheck[current - 2].classList.remove('active');
     progressText[current - 2].classList.remove('active');
    current -= 1;
}) 