import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=r=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"47380921-4d10a9da0d1514e8969d771c8",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(o=>o.json()).then(o=>{const e=document.querySelector(".loader"),t=o.hits;if(t.length===0){d(),e.remove();return}y(t),e.remove(),f()}).catch(o=>{console.log(o.message)})};function d(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function f(){let r=new u(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});r.on("show.simpleLightbox"),r.refresh()}const h=document.querySelector(".gallery"),i=document.querySelector("form");i.addEventListener("submit",g);function g(r){r.preventDefault();const s=i.elements.search.value;if(s===""){L();return}i.insertAdjacentHTML("afterend",'<span class="loader"></span>'),m(s),i.reset()}const y=r=>{const s=r.map(({largeImageURL:n,webformatURL:o,tags:e,likes:t,views:a,comments:l,downloads:p})=>`<li class='gallery-item'>
    <a class='gallery-link' href='${n}'>
    <img class='gallery-image' src='${o}' alt='${e}'/>
    </a>
    <div class='container-app'>
    <p><span>Likes</span> ${t}</p>
    <p><span>Views</span> ${a}</p>
    <p><span>Comments</span> ${l}</p>
    <p><span>Downloads</span> ${p}</p>
  </div>
   </li>`).join("");h.innerHTML=s};function L(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Please,enter what do you want to find!"})}
//# sourceMappingURL=index.js.map
