import getPhotos from "./js/pixabay-api.js";
import { renderPhotos } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");
const list = document.querySelector(".gallery");
const loadMore = document.querySelector(".load-more");

let page = 1;
let inputSearch;

loadMore.addEventListener('click', loadMoreBtn);
form.addEventListener('submit', onSearchButton);

async function loadMoreBtn(e) {
    e.preventDefault();
    loadMore.disabled = true;

    try {
        page += 1;
        const { photosArr, isLastPage } = await getPhotos(inputSearch, page);
        handlePhotosResponse(photosArr, isLastPage);
    } catch (error) {
        console.error(error.message);
    }

    loadMore.disabled = false;
    smoothScroll();
}

async function onSearchButton(e) {
    e.preventDefault();
    inputSearch = form.elements.search.value;
    list.innerHTML = '';

    if (inputSearch === "") {
        noInput();
        return;
    }

    try {
        const { photosArr, isLastPage } = await getPhotos(inputSearch, page);
        handlePhotosResponse(photosArr, isLastPage);
    } catch (error) {
        console.error(error.message);
    }

    form.reset();
}

function handlePhotosResponse(photos, isLastPage) {
    const loader = document.querySelector('.loader');
    const arrayPhotos = photos;

    if (arrayPhotos.length === 0) {
        noImages();
        loadMore.classList.add('hidden');
        if (loader) {
            loader.remove();
        }
        return;
    }

    renderPhotos(arrayPhotos);


    if (isLastPage) {
        loadMore.classList.add('hidden');
        iziToast.error({
            messageColor: '#FFF',
            color: '#EF4040',
            position: 'topRight',
            message: "We're sorry, but you've reached the end of search results.",
        });
    } else {
        loadMore.classList.remove('hidden');
    }

    if (loader) {
        loader.remove();
    }
    initializeSimpleLightbox();
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

function smoothScroll() {
    const galleryCardHeight = document
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;
    window.scrollBy({
        top: galleryCardHeight * 2,
        left: 0,
        behavior: 'smooth',
    });
}
