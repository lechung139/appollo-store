const watchButton = document.querySelector('.main-content section.products .content p');
const closeButton = document.querySelector('.main-content section.products .video .close-button');
const bodyHTML = document.querySelector('body');
const video = document.querySelector('.main-content section.products .video');
const srcVideo = document.querySelector('.main-content section.products .video video');
srcVideo.pause();

watchButton.onclick = function() {
    video.classList.add('video-active');
    bodyHTML.classList.add('no-scroll');
    srcVideo.load();
    srcVideo.play();

    closeButton.onclick = function() {
        video.classList.remove('video-active');
        bodyHTML.classList.remove('no-scroll');
        srcVideo.pause();
    }
}

