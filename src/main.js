import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  renderError,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

let currentPage = 1;
let currentQuery = '';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  currentPage = 1;
  currentQuery = '';

  clearGallery();
  currentQuery = event.target.elements[0].value.trim();

  if (!currentQuery) {
    renderError('Please enter a search query!');
    return;
  }

  loadMoreImages();
  form.reset();
}

async function loadMoreImages() {   
  showLoader();
  hideLoadMoreButton();
  try {
    const { hits, totalHits } = await getImagesByQuery(
      currentQuery,
      currentPage
    );

    console.log(totalHits);

    if (!hits.length) {
      renderError('No images found for your search query. Please try again.');
      return;
    }

    createGallery(hits);

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    if (currentPage > 1 && currentPage * 15 >= totalHits) {
      renderError("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    renderError(
      error.message ||
        'An error occurred while fetching images. Please try again later.'
    );
  } finally {
    hideLoader();
    currentPage += 1;
  }
}

loadMore.addEventListener('click', async () => {
  await loadMoreImages();

  const { height: cardHeight } = galleryContainer.firstElementChild.getBoundingClientRect();


  await window.scrollBy({
    top: cardHeight * 5,
    behavior: 'smooth',
  });   
});
