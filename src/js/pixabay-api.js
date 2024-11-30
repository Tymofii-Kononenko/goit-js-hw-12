import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
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
            renderPhotos(arrayPhotos);
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