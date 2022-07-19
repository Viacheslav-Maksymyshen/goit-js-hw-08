// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

const makeImagesItems = ({ preview, description, original }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
const imagesItems = galleryItems.map(makeImagesItems).join('');
gallery.insertAdjacentHTML('afterbegin', imagesItems);

let modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

modal.on('show.simplelightbox', function () {
  console.log('ok');
});

modal.on('error.simplelightbox', function () {
  console.log('error');
});

console.log(galleryItems);
