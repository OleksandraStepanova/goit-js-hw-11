import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(o){const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43034088-8742da6bcfba06a1e287112c2",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${r}?${s}`;return fetch(i).then(e=>e.json()).then(e=>{if(e.totalHits>0)return e.hits;a.show({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight",color:"red"})})}function u({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:n}){return`<li class="picture-card">
  <a class="sourse" href ='${r}'>
  <img
    src='${o}'
    alt= '${s}'
    class="photo-item"    
  />
  </a>  
 <ul class="discription">
   <li>Likes:<br>${i}</li>
   <li>Vives:<br>${e}</li>
   <li>Comments:<br>${t}</li>
   <li>Downloads:<br>${n}</li>
 </ul>
</li>`}function f(o){return o.map(u).join(`



`)}const c=document.querySelector(".search"),m=document.querySelector(".result");c.addEventListener("submit",p);function p(o){o.preventDefault();const r=c.elements.input.value.trim();l(r).then(s=>{const i=f(s);return m.innerHTML=i})}
//# sourceMappingURL=commonHelpers.js.map
