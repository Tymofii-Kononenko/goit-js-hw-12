export const getPhotos = inputSearch => {
    const params = new URLSearchParams({
        key: "47380921-4d10a9da0d1514e8969d771c8",
        q: inputSearch,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: "true"
    });
    const url = `https://pixabay.com/api/?${params}`;
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
};