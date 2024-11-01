const gallery = document.querySelector('.gallery-rotating');
const images = Array.from(gallery.children);
let scrollAmount = 0;
const imageWidth = images[0].offsetWidth + 16; 
const totalWidth = imageWidth * images.length;

images.forEach(image => {
  const clone = image.cloneNode(true);
  gallery.appendChild(clone);
});

gallery.style.width = `${totalWidth * 2}px`;

function rotateImages() {
  scrollAmount += 1;
  gallery.style.transform = `translateX(-${scrollAmount}px)`;

  if (scrollAmount >= totalWidth) {
    scrollAmount = 0;
  }

  requestAnimationFrame(rotateImages);
}

rotateImages();
