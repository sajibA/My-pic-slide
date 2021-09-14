const images = [
    'images/1.JPG',
    'images/2.JPG',
    'images/3.JPG',
    'images/4.JPG',
    'images/5.JPG',
    'images/6.JPG',
    'images/7.JPG',
    'images/8.JPG',
    'images/9.JPG',
    'images/10.JPG',
    'images/11.JPG',
    'images/12.JPG',
    'images/13.JPG',
    'images/14.JPG'
];
const imgElement = document.getElementById('slide');
let imgIndex = 0;

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++
}, 1000)