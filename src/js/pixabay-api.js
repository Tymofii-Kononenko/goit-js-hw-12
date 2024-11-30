import { renderPhotos } from "./render-functions.js";
import { noImages, simpleLightbox } from "../main.js"


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

            const loader = document.querySelector('.loader')
            const arrayPhotos = photos.hits;

            if (arrayPhotos.length === 0) {
                noImages();
                loader.remove();
                return;
            }


            renderPhotos(arrayPhotos);
            loader.remove();
            simpleLightbox()
        })
        .catch(error => {
            console.log(error.message);

        })
}

