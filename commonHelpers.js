import{S as p,a as f,b as u}from"./assets/vendor-55057e6d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const a=document.querySelector(".js-backdrop"),m={lines:8,length:33,width:4,radius:26,scale:.6,corners:.5,speed:1.6,rotate:0,animation:"spinner-line-fade-quick",direction:1,color:"#ffffff",fadeColor:"transparent",top:"49%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},d=new p(m),h=()=>{a.classList.remove("is-hidden"),d.spin(a)},c=()=>{a.classList.add("is-hidden"),d.stop()},l=document.querySelector(".img-container"),y=document.querySelector(".search-form"),g=o=>o.map(e=>`<div class="img-item">
      <a href="${e.webformatURL}" class="lightbox-link">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="image-info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>`).join(""),b="https://pixabay.com/api/",w="41741201-12a642cf53882fe64e8e82723",L=async o=>{try{return(await u.get(b,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){throw console.error("Error during image search:",e),new Error("Failed to retrieve images")}},v=async o=>{o.preventDefault(),h();const e=o.currentTarget.elements.query.value.trim();if(l.innerHTML="",e!=="")try{const n=await L(e);l.innerHTML=g(n.hits),new f(".lightbox-link").refresh()}catch(n){console.error("Error during search:",n)}finally{c()}else c()};y.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
