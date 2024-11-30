import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=o=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"47380921-4d10a9da0d1514e8969d771c8",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(s=>s.json()).then(s=>{const e=s.hits;if(e.length===0){f();return}y(e),d()})};function f(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function d(){let o=new u(".gallery a",{captionsData:"alt",captionsPosition:"bottom",captionDelay:250});o.on("show.simpleLightbox"),o.refresh()}const h=document.querySelector(".gallery"),i=document.querySelector("form");i.addEventListener("submit",g);function g(o){o.preventDefault();const r=i.elements.search.value;if(r===""){L();return}m(r),i.reset()}const y=o=>{const r=o.map(({largeImageURL:n,webformatURL:s,tags:e,likes:t,views:a,comments:l,downloads:p})=>`<li class='gallery-item'>
    <a class='gallery-link' href='${n}'>
    <img class='gallery-image' src='${s}' alt='${e}'/>
    </a>
    <div class='container-app'>
    <p><span>Likes</span> ${t}</p>
    <p><span>Views</span> ${a}</p>
    <p><span>Comments</span> ${l}</p>
    <p><span>Downloads</span> ${p}</p>
  </div>
   </li>`).join("");h.innerHTML=r};function L(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Please,enter what do you want to find!"})}
//# sourceMappingURL=index.js.map
