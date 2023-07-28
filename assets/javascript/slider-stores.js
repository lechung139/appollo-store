/* Slider Explore-Store */
let items = document.querySelectorAll('section.explore-stores .slider-stores .item');
let next = document.querySelector('section.explore-stores .direction #next');
let prev = document.querySelector('section.explore-stores .direction #prev');
let dots = document.querySelectorAll('section.explore-stores .dots li');

let active = 4;
loadShow()
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1; 
    for (let i = active+1; i<items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${190*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.8;
    }
    stt = 0;
    for (let i = active-1; i>=0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-190*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.8;
    }

    // Switch a dot - active
    let lastActiveDot = document.querySelector('section.explore-stores .dots .active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}   

// Auto slider
let refreshSlider = setInterval(() => {next.click()}, 3000);

// Click buttons
let lengthItems = items.length - 1;
next.onclick = function () {
    active = active + 1 ? active + 1 : active;
    if (active > lengthItems) 
        active = 0;
    loadShow();
    // Make auto slider smoother
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 3000);
}
prev.onclick = function () {
    active = active - 1 <items.length ? active - 1 : active;
    if (active < 0) 
        active = lengthItems;
    loadShow();
    // Make auto slider smoother
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 3000);
}

// Click dots
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        loadShow();
        // Make auto slider smoother
        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => {next.click()}, 3000);
    });
});
