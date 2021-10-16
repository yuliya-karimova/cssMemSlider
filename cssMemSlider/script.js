const slidesList = document.querySelector('.slider-inner-container');
const dots = document.querySelectorAll('.dot');
const body = document.querySelector('body');
let eyes = document.querySelectorAll('.eye');

let i = 0;

function changeDot() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[i].classList.add('active');
};

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        slidesList.style.left = - 100 * i + "%";
        changeDot();
    })
}

body.addEventListener('mousemove', function(event) {
    eyes.forEach(eye => {
        let x = (eye.offsetLeft) + (eye.offsetWidth / 2);
        let y = (eye.offsetTop) + (eye.offsetHeight / 2);
        let rad = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (rad * (180 / Math.PI) * -1) + 90;
        eye.style.transform = 'rotate(' + -rot + 'deg)';
    });
});