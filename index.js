import{a as v,i as u,S as b}from"./assets/vendor-Dp7Ig4E2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const w={KEY:"45785559-b0577f06fb94f4ced9a4d3280",BASE_URL:"https://pixabay.com/api/"},S={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more")},{KEY:E,BASE_URL:P}=w,q=15;async function y(s,e){try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await v.get(`${P}`,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:q}})}catch(i){u.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(i.message)}}function g(s){return s.map(({webformatURL:e,largeImageURL:i,tags:c,likes:t,views:o,comments:n,downloads:L})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${e}" alt="${c}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${L}</p>
        </div>
      </div>
    </li>`).join("")}const{form:f,gallery:m,loader:l,loadMore:r}=S;let d="",a=1;const p=15;let h;l.style.display="none";r.classList.add("hidden");f.addEventListener("submit",$);r.addEventListener("click",H);function $(s){if(s.preventDefault(),a=1,m.innerHTML="",l.style.display="block",d=s.target.elements.query.value.trim(),d==="")return u.info({title:"Hello",message:"Please enter search text!"}),l.style.display="none",r.classList.add("hidden"),f.reset();y(d,a).then(e=>{if(m.insertAdjacentHTML("beforeend",g(e.data.hits)),r.classList.remove("hidden"),console.log(e.data.totalHits),a*p>=e.data.totalHits&&r.classList.add("hidden"),a===e.data.hits&&r.classList.add("hidden"),!e.data.hits.length){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.style.display="none",r.classList.add("hidden");return}l.style.display="none",h=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),h.refresh()}).catch(e=>{l.style.display="none",console.log(`${e}`)}),f.reset()}function H(){a+=1;const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();y(d,a).then(e=>{m.insertAdjacentHTML("beforeend",g(e.data.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),h.refresh(),a*p>=e.data.totalHits&&(u.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),r.classList.add("hidden"))})}function M(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}M();
//# sourceMappingURL=index.js.map
