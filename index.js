import{a as S,i as h,S as H}from"./assets/vendor-Dp7Ig4E2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const O={KEY:"45785559-b0577f06fb94f4ced9a4d3280",BASE_URL:"https://pixabay.com/api/"},E={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more")},{KEY:P,BASE_URL:q}=O,I=15;async function L(s,o){try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await S.get(`${q}`,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:I}})}catch(i){h.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(i.message)}}function v(s){return s.map(({webformatURL:o,largeImageURL:i,tags:l,likes:e,views:t,comments:n,downloads:r})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${l}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${r}</p>
        </div>
      </div>
    </li>`).join("")}function Y(){document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".up-btn");s.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?s.classList.add("show"):s.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const{form:p,gallery:y,loader:f,loadMore:a}=E;let g="",d=1;const b=15;let w,c;f.style.display="none";a.classList.add("hidden");p.addEventListener("submit",$);a.addEventListener("click",T);Y();function $(s){if(s.preventDefault(),d=1,y.innerHTML="",f.style.display="block",g=s.target.elements.query.value.trim(),g==="")return h.info({title:"Hello",message:"Please enter search text!"}),f.style.display="none",a.classList.add("hidden"),p.reset();L(g,d).then(o=>{if(y.insertAdjacentHTML("beforeend",v(o.data.hits)),c=document.querySelectorAll(".gallery-item"),c.length>0){let i=function(){for(let e=0;e<c.length;e++){const t=c[e],n=t.offsetHeight,r=l(t).top,u=2;let m=window.innerHeight-n/u;n>window.innerHeight&&(m=window.innerHeight-window.innerHeight/u),pageYOffset>r-m&&pageYOffset<r+n?t.classList.add("show"):t.classList.remove("show")}},l=function(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}};window.addEventListener("scroll",i),i()}if(a.classList.remove("hidden"),d*b>=o.data.totalHits&&a.classList.add("hidden"),d===o.data.hits&&a.classList.add("hidden"),!o.data.hits.length){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),f.style.display="none",a.classList.add("hidden");return}f.style.display="none",w=new H(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),w.refresh()}).catch(o=>{f.style.display="none",console.log(`${o}`)}),p.reset()}function T(){d+=1;const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();L(g,d).then(o=>{if(y.insertAdjacentHTML("beforeend",v(o.data.hits)),c=document.querySelectorAll(".gallery-item"),c.length>0){let i=function(){for(let e=0;e<c.length;e++){const t=c[e],n=t.offsetHeight,r=l(t).top,u=4;let m=window.innerHeight-n/u;n>window.innerHeight&&(m=window.innerHeight-window.innerHeight/u),pageYOffset>r-m&&pageYOffset<r+n?t.classList.add("show"):t.classList.remove("show")}},l=function(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,left:t.left+n}};window.addEventListener("scroll",i),i()}window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),w.refresh(),d*b>=o.data.totalHits&&(h.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),a.classList.add("hidden"))})}
//# sourceMappingURL=index.js.map
