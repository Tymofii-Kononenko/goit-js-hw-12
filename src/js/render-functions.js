import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhotos } from "./pixabay-api"

const list = document.querySelector(".gallery")
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

export const renderPhotos = photos => {
    const markup = photos.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) =>
        `<li class='gallery-item'>
    <a class='gallery-link' href='${largeImageURL}'>
    <img class='gallery-image' src='${webformatURL}' alt='${tags}'/>
    </a>
    <div class='container-app'>
    <p><span>Likes</span> ${likes}</p>
    <p><span>Views</span> ${views}</p>
    <p><span>Comments</span> ${comments}</p>
    <p><span>Downloads</span> ${downloads}</p>
  </div>
   </li>`).join('');
    list.innerHTML = markup;

}

function noInput() {
    iziToast.error({
        messageColor: '#FFF',
        color: '#EF4040',
        position: 'topRight',
        message: 'Please,enter what do you want to find!',
    });
}

