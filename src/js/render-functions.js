const list = document.querySelector(".gallery")

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

