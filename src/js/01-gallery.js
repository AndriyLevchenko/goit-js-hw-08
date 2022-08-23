// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log (createImageGalleryMarcup (galleryItems));

// 1 Створення та рендер розмітки

function createImageGalleryMarcup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </div>
        `;
    }).join('');
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarcup = createImageGalleryMarcup (galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryMarcup);

// 2 

new SimpleLightbox('.gallery a', 
{captionsData: 'alt', 
captionPosition: 'bottom',
captionDelay: 250});