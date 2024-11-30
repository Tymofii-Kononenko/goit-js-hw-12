import { getPhotos } from "./js/pixabay-api.js"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector("form");

form.addEventListener('submit', onSearchButton);

function onSearchButton(e) {
    e.preventDefault();
    const inputSearch = form.elements.search.value;

    if (inputSearch === "") {
        noInput();
        return;
    }
    form.insertAdjacentHTML('afterend', '<span class="loader"></span>');
    getPhotos(inputSearch)
    form.reset();

}


function noInput() {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Please,enter what do you want to find!',
    });
}


export const noImages = () => {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}



export const simpleLightbox = () => {
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsPosition: 'bottom',
        captionDelay: 250,
    });
    gallery.on('show.simpleLightbox');
    gallery.refresh();
}