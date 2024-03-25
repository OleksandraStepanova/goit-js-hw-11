import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".loader");function p(o){c.style.display="block";const r="https://pixabay.com/api/",i=new URLSearchParams({key:"43034088-8742da6bcfba06a1e287112c2",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=`${r}?${i}`;return fetch(s).then(e=>e.json()).then(e=>{if(c.style.display="none",e.totalHits>0)return e.hits;u.show({message:"Sorry, there are no images matching your search query. Please try again!",timeout:5e3,position:"topRight",color:"red"})})}function d({webformatURL:o,largeImageURL:r,tags:i,likes:s,views:e,comments:t,downloads:n}){return`<li class="picture-card">
  <a class="sourse" href ='${r}'>
  <img
    src='${o}'
    alt= '${i}'
    class="photo-item"    
  />
  </a>  
 <ul class="discription">
   <li>Likes:<br>${s}</li>
   <li>Vives:<br>${e}</li>
   <li>Comments:<br>${t}</li>
   <li>Downloads:<br>${n}</li>
 </ul>
</li>`}function m(o){return o.map(d).join(`



`)}const l=document.querySelector(".search"),a=document.querySelector(".result"),h=document.querySelector(".loader");h.style.display="none";l.addEventListener("submit",y);function y(o){o.preventDefault(),a.innerHTML="";const r=l.elements.input.value.trim();r&&p(r).then(i=>{const s=m(i);a.innerHTML=s,new f(".result li a",{}).refresh()}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
