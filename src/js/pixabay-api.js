import axios from "axios";

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

        const response = await axios.get(`https://pixabay.com/api/?${params}`);
        console.log(response);
        return response.data.hits;


    }
    catch {
        console.log('error');
        ;

    }

    // return fetch(url).then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    // });
};

