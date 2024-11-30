import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { renderPhotos } from "./render-functions.js";



export const getPhotos = inputSearch => {
    const params = new URLSearchParams({
        key: "47380921-4d10a9da0d1514e8969d771c8",
        q: `${inputSearch}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: "true"
    })
    const url = `https://pixabay.com/api/?${params}`;
    return fetch(url)
        .then(response => { return response.json() })
        .then(photos => {

            const arrayPhotos = photos.hits;

            if (arrayPhotos.length === 0) {
                noImages();
                return;
            }

            const loader = document.querySelector('.loader')

            renderPhotos(arrayPhotos);
            loader.remove();
            simpleLightbox()
        })
        .catch(error => {
            console.log(error.message);

        })
}

function noImages() {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
}

function simpleLightbox() {
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsPosition: 'bottom',
        captionDelay: 250,
    });
    gallery.on('show.simpleLightbox');
    gallery.refresh();
}