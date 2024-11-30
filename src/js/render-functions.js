import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getPhotos } from "./pixabay-api"


const form = document.querySelector("form");

form.addEventListener('submit', onSearchButton);

function onSearchButton(e) {
    e.preventDefault();
    const inputSearch = form.elements.search.value;
    if (inputSearch === "") {
        iziToast.error({
            messageColor: '#FFF',
            color: '#EF4040',
            position: 'center',
            message: 'Please,enter what do you want to find!',
        });
        return
    }
    getPhotos(inputSearch)
    form.reset();
}




