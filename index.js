import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=document.querySelector(".gallery"),d=r=>{const s=r.map(({largeImageURL:n,webformatURL:o,tags:e,likes:t,views:a,comments:l,downloads:p})=>`<li class='gallery-item'>
    <a class='gallery-link' href='${n}'>
    <img class='gallery-image' src='${o}' alt='${e}'/>
    </a>
    <div class='container-app'>
    <p><span>Likes</span> ${t}</p>
    <p><span>Views</span> ${a}</p>
    <p><span>Comments</span> ${l}</p>
    <p><span>Downloads</span> ${p}</p>
  </div>
   </li>`).join("");m.innerHTML=s},f=r=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"47380921-4d10a9da0d1514e8969d771c8",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(o=>o.json()).then(o=>{const e=document.querySelector(".loader"),t=o.hits;if(t.length===0){y(),e.remove();return}d(t),e.remove(),L()}).catch(o=>{console.log(o.message)})},i=document.querySelector("form");i.addEventListener("submit",h);function h(r){r.preventDefault();const s=i.elements.search.value;if(s===""){g();return}i.insertAdjacentHTML("afterend",'<span class="loader"></span>'),f(s),i.reset()}function g(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Please,enter what do you want to find!"})}const y=()=>{c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})},L=()=>{let r=new u(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});r.on("show.simpleLightbox"),r.refresh()};
//# sourceMappingURL=index.js.map
