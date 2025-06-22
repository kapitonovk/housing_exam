const images = [
'img/img12.jpg', 
'img/img1.jpg', 
'img/img2.jpg', 
'img/img3.jpg', 
'img/img4.jpg', 
'img/img5.jpg', 
'img/img6.jpg', 
'img/img7.jpg', 
'img/img8.jpg', 
'img/img9.jpg', 
'img/img10.jpg', 
'img/img11.jpg'
];

let currentIndex = 0;

const imgElement = document.getElementById('image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    imgElement.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});
