import{S as d,a as u,b as f,i as m}from"./assets/vendor-e0a036e7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const a=document.querySelector(".js-backdrop"),h={lines:8,length:33,width:4,radius:26,scale:.6,corners:.5,speed:1.6,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"49%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},p=new d(h),y=()=>{a.classList.remove("is-hidden"),p.spin(a)},c=()=>{a.classList.add("is-hidden"),p.stop()},l=document.querySelector(".img-container"),g=document.querySelector(".search-form"),b=(n,e)=>{const o="https://pixabay.com/api/",s={key:"41741201-12a642cf53882fe64e8e82723",query:n,page:e,per_page:40,orientation:"portrait"};return u.get(o,{params:s})},L=n=>n.map(e=>`<div class="img-item">
      <a href="${e.webformatURL}" class="lightbox-link">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="image-info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>`).join(""),w=n=>{n.preventDefault(),y();const e=n.currentTarget.elements.query.value.trim();if(l.innerHTML="",e!=="")b(query,page).then(o=>{l.innerHTML=L(o.hits),new f(".lightbox-link").refresh()}).catch(o=>{console.error(o)}).finally(()=>{c()});else return c(),m.warning({position:"center",message:"Please enter a search query."})};g.addEventListener("submit",w);
//# sourceMappingURL=commonHelpers.js.map
