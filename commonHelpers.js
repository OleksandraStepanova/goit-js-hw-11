import{i as u,n as d,S as f}from"./assets/vendor-63c556b8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".loader");function m(o){c.style.display="block";const r="https://pixabay.com/api/",s=new URLSearchParams({key:"43034088-8742da6bcfba06a1e287112c2",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${r}?${s}`;return fetch(n).then(e=>e.json()).then(e=>{if(c.style.display="none",e.totalHits>0)return e.hits;u.show({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight",color:"red"})})}function p({webformatURL:o,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:i}){return`<li class="picture-card">
  <a class="sourse" href ='${r}'>
  <img
    src='${o}'
    alt= '${s}'
    class="photo-item"    
  />
  </a>  
 <ul class="discription">
   <li>Likes:<br>${n}</li>
   <li>Vives:<br>${e}</li>
   <li>Comments:<br>${t}</li>
   <li>Downloads:<br>${i}</li>
 </ul>
</li>`}function h(o){return o.map(p).join(`



`)}const l=document.querySelector(".search"),a=document.querySelector(".result"),y=document.querySelector(".loader");y.style.display="none";l.addEventListener("submit",g);function g(o){o.preventDefault(),document.addEventListener("DOMContentLoaded",()=>{d.Loading.dots()}),a.innerHTML="";const r=l.elements.input.value.trim();r&&m(r).then(s=>{const n=h(s);a.innerHTML=n,new f(".result li a",{}).refresh()}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
