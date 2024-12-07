import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default async function getPhotos(inputSearch, page) {
    try {
        const params = new URLSearchParams({
            key: "47380921-4d10a9da0d1514e8969d771c8",
            q: inputSearch,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: "true",
            per_page: 15,
            page: page
        });
        showSpiner();
        const response = await axios.get(`https://pixabay.com/api/?${params}`);

        const photosArr = response.data.hits;
        const totalHits = response.data.totalHits;
        const totalPages = Math.ceil(totalHits / 15);

        const isLastPage = page >= totalPages;

        if (photosArr.length < 15 || isLastPage) {
            const load = document.querySelector('.load-more');
            load.classList.add('hidden');
        }

        hideSpiner();
        return { photosArr, isLastPage, totalPages };

    } catch (error) {
        console.log('error');
        const load = document.querySelector('.load-more');
        load.classList.add('hidden');
        iziToast.error({
            messageColor: '#FFF',
            color: '#EF4040',
            position: 'topRight',
            message: 'Something went wrong. Please try again later!',
        });
    }
};

export const showSpiner = function () {
    const loaderMore = document.querySelector('.loaderMore');
    loaderMore.innerHTML = '<span class="loader"></span>';
};

export const hideSpiner = function () {
    const load = document.querySelector('.load');
    const loaderMore = document.querySelector('.loaderMore');
    loaderMore.innerHTML = '';
};
