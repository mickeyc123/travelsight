const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnloginPopup = document.querySelector('.btnlogin-popup');
const boxes = document.querySelectorAll('.box.glowing');



boxes.forEach((box) => {
    const images = box.querySelectorAll('.slide');
    let index = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.classList.add('active');
            } else {
                image.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    setInterval(nextSlide, 3000);
    showImage(index);
});




function showWrapper() {
    wrapper.classList.add('active-popup');
}
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnloginPopup.addEventListener('click', showWrapper);

document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target) && !btnloginPopup.contains(event.target)) {
        wrapper.classList.remove('active-popup');
    }
});

