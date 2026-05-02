import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderError(message) {
  return iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}

export function createGallery(images = []) {
  const markup = images.map(image => {
    return `
                <li>
                    <a href="${image.largeImageURL}" target="_blank">
                        <img
                            src="${image.webformatURL}" 
                            alt="${image.tags}" 
                            width="300" 
                            height="200"
                        />
                        <div class="info">
                            <div>
                                <p><b>Likes</b></p>
                                <p>${image.likes}</p>
                            </div>
                            <div>
                                <p><b>Views</b></p>
                                <p>${image.views}</p>
                            </div>
                            <div>
                                <p><b>Comments</b></p>
                                <p>${image.comments}</p>
                            </div>
                            <div>
                                <p><b>Downloads</b></p>
                                <p>${image.downloads}</p>
                            </div>
                        </div>
                    </a>
                </li>
            `;
  });

  galleryContainer.insertAdjacentHTML('beforeend', markup.join(''));
  refreshLightbox();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
  hideLoadMoreButton();
}

export function showLoader() {
  loader.classList.remove('loader-hide');
}

export function hideLoader() {
  loader.classList.add('loader-hide');
}

export function showLoadMoreButton() {
  loadMore.classList.remove('hide-button');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hide-button');
}

function refreshLightbox() {
  gallery.refresh();
}


