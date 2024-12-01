import { getPhotos } from "./js/pixabay-api.js";
import { renderPhotos } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const list = document.querySelector(".gallery");

form.addEventListener('submit', onSearchButton);

function onSearchButton(e) {
    e.preventDefault();
    const inputSearch = form.elements.search.value;

    if (inputSearch === "") {
        noInput();
        return;
    }

    form.insertAdjacentHTML('afterend', '<span class="loader"></span>');
    list.innerHTML = '';

    getPhotos(inputSearch)
        .then(photos => handlePhotosResponse(photos))
        .catch(error => {
            console.error(error.message);
            document.querySelector('.loader').remove();
        });

    form.reset();
}

function handlePhotosResponse(photos) {
    const loader = document.querySelector('.loader');
    const arrayPhotos = photos.hits;

    if (arrayPhotos.length === 0) {
        noImages();
        loader.remove();
        return;
    }

    renderPhotos(arrayPhotos);
    loader.remove();
    initializeSimpleLightbox();
    form.reset();
}

function noInput() {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Please, enter what do you want to find!',
    });
}

function noImages() {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}

function initializeSimpleLightbox() {
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsPosition: 'bottom',
        captionDelay: 250,
    });
    gallery.on('show.simpleLightbox');
    gallery.refresh();
}