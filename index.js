import{a as L,i as d,S as b}from"./assets/vendor-Dp7Ig4E2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const S={KEY:"45785559-b0577f06fb94f4ced9a4d3280",BASE_URL:"https://pixabay.com/api/"},E={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more")},{KEY:H,BASE_URL:O}=S,P=15;async function y(t,e){try{return t.includes(" ")&&t.replace(/\s+/g,"+"),await L.get(`${O}`,{params:{key:H,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}})}catch(r){d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(r.message)}}function h(t){return t.map(({webformatURL:e,largeImageURL:r,tags:s,likes:o,views:n,comments:l,downloads:v})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${e}" alt="${s}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${o}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${n}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${l}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${v}</p>
        </div>
      </div>
    </li>`).join("")}function q(){document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".up-btn");t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?t.classList.add("show"):t.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const{form:m,gallery:f,loader:i}=E;let u="",a=1;const $=15;let g,c;i.style.display="none";m.addEventListener("submit",B);q();function p(){if(c)for(let t=0;t<c.length;t++){const e=c[t],r=e.offsetHeight,s=A(e).top,o=9;let n=window.innerHeight-r/o;r>window.innerHeight&&(n=window.innerHeight-window.innerHeight/o),pageYOffset>s-n&&pageYOffset<s+r?e.classList.add("show"):e.classList.remove("show")}}function A(t){const e=t.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,s=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+s,left:e.left+r}}window.addEventListener("scroll",p);function B(t){if(t.preventDefault(),a=1,f.innerHTML="",i.style.display="block",u=t.target.elements.query.value.trim(),window.addEventListener("scroll",w),u==="")return d.info({title:"Hello",message:"Please enter search text!"}),i.style.display="none",m.reset();y(u,a).then(e=>{if(f.insertAdjacentHTML("beforeend",h(e.data.hits)),c=document.querySelectorAll(".gallery-item"),p(),!e.data.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none";return}i.style.display="none",g=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),g.refresh()}).catch(e=>{i.style.display="none",console.log(`${e}`)}),m.reset()}function w(){if(document.documentElement.getBoundingClientRect().bottom<=document.documentElement.clientHeight+100){a+=1;const e=()=>document.querySelector(".gallery-item").getBoundingClientRect();y(u,a).then(r=>{if(f.insertAdjacentHTML("beforeend",h(r.data.hits)),c=document.querySelectorAll(".gallery-item"),p(),window.scrollBy({top:e().height*2,left:0,behavior:"smooth"}),g.refresh(),a*$>=r.data.totalHits){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),window.removeEventListener("scroll",w);return}}).catch(r=>{console.error("Ошибка при загрузке результатов поиска:",r),d.error({title:"Error",message:"Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже."})})}}
//# sourceMappingURL=index.js.map
