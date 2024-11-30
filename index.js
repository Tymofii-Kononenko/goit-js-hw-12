import{i as c}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=s=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"47380921-4d10a9da0d1514e8969d771c8",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(n).then(o=>o.json()).then(o=>{const e=o.hits;if(e.length===0){m();return}h(e)})};function m(){c.error({messageColor:"#FFF",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}const f=document.querySelector(".gallery"),i=document.querySelector("form");i.addEventListener("submit",d);function d(s){s.preventDefault();const r=i.elements.search.value;if(r===""){c.show({messageColor:"#FFF",color:"#EF4040",position:"center",message:"Please,enter what do you want to find!"});return}u(r),i.reset()}const h=s=>{const r=s.map(({largeImageURL:n,webformatURL:o,tags:e,likes:t,views:a,comments:l,downloads:p})=>`<li class='gallery-item'>
    <a class='gallery-link' href='${n}'>
    <img class='gallery-image' src='${o}' alt='${e}'/>
    </a>
    <div class='container-app'>
    <p><span>Likes</span> ${t}</p>
    <p><span>Views</span> ${a}</p>
    <p><span>Comments</span> ${l}</p>
    <p><span>Downloads</span> ${p}</p>
  </div>
   </li>`).join("");f.innerHTML=r};
//# sourceMappingURL=index.js.map
