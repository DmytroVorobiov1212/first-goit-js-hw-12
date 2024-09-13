import{a as L,i as d,S}from"./assets/vendor-Dp7Ig4E2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const E={KEY:"45785559-b0577f06fb94f4ced9a4d3280",BASE_URL:"https://pixabay.com/api/"},q={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),result:document.querySelector(".total-result"),resultSpan:document.querySelector(".result-span")},{KEY:P,BASE_URL:$}=E,O=15;async function h(o,e){try{return o.includes(" ")&&o.replace(/\s+/g,"+"),await L.get(`${$}`,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:O}})}catch(r){d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(r.message)}}function v(o){return o.map(({webformatURL:e,largeImageURL:r,tags:l,likes:t,views:s,comments:i,downloads:w})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img class="gallery-image" src="${e}" alt="${l}">
      </a>
      <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${t}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${s}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${i}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${w}</p>
        </div>
      </div>
    </li>`).join("")}function B(){document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".up-btn");o.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?o.classList.add("show"):o.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const{form:y,gallery:f,loader:n,result:u,resultSpan:H}=q;let m="",a=1;const C=15;let p,c;n.style.display="none";u.style.display="none";y.addEventListener("submit",k);B();function g(){if(!c)return;const o=window.innerHeight+100;for(let e=0;e<c.length;e++){const r=c[e];r.getBoundingClientRect().top<o&&r.classList.add("show")}}window.addEventListener("scroll",g);function k(o){if(o.preventDefault(),a=1,f.innerHTML="",n.style.display="block",m=o.target.elements.query.value.trim(),window.addEventListener("scroll",b),m==="")return d.info({title:"Hello",message:"Please enter search text!"}),n.style.display="none",u.style.display="none",y.reset();h(m,a).then(e=>{if(u.style.display="block",H.textContent=`${e.data.totalHits}`,f.insertAdjacentHTML("beforeend",v(e.data.hits)),c=document.querySelectorAll(".gallery-item"),g(),!e.data.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",u.style.display="none";return}n.style.display="none",p=new S(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),p.refresh()}).catch(e=>{n.style.display="none",console.log(`${e}`)}),y.reset()}function b(){if(document.documentElement.getBoundingClientRect().bottom<=document.documentElement.clientHeight+100){a+=1;const e=()=>document.querySelector(".gallery-item").getBoundingClientRect();h(m,a).then(r=>{if(f.insertAdjacentHTML("beforeend",v(r.data.hits)),c=document.querySelectorAll(".gallery-item"),g(),window.scrollBy({top:e().height*2,left:0,behavior:"smooth"}),p.refresh(),a*C>=r.data.totalHits){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),window.removeEventListener("scroll",b);return}}).catch(r=>{console.error("Ошибка при загрузке результатов поиска:",r),d.error({title:"Error",message:"Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже."})})}}
//# sourceMappingURL=index.js.map
