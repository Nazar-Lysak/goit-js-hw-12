import{a as u,S as g,i as b}from"./assets/vendor-DnCMJMY2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const L="55579109-6d91a7f7bc5e935c526ce2bfc";u.defaults.baseURL="https://pixabay.com/api/";async function v(e="",r=1){const o={params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}};try{return(await u.get("",o)).data}catch(s){throw s}}const f=document.querySelector(".gallery"),p=document.querySelector(".load-more"),m=document.querySelector(".loader"),w=new g(".gallery a",{captionsData:"alt",captionDelay:250});function i(e){return b.error({title:"Error",message:e,position:"topRight"})}function q(e=[]){const r=e.map(o=>`
                <li>
                    <a href="${o.largeImageURL}" target="_blank">
                        <img
                            src="${o.webformatURL}" 
                            alt="${o.tags}" 
                            width="300" 
                            height="200"
                        />
                        <div class="info">
                            <div>
                                <p><b>Likes</b></p>
                                <p>${o.likes}</p>
                            </div>
                            <div>
                                <p><b>Views</b></p>
                                <p>${o.views}</p>
                            </div>
                            <div>
                                <p><b>Comments</b></p>
                                <p>${o.comments}</p>
                            </div>
                            <div>
                                <p><b>Downloads</b></p>
                                <p>${o.downloads}</p>
                            </div>
                        </div>
                    </a>
                </li>
            `);f.insertAdjacentHTML("beforeend",r.join("")),E()}function S(){f.innerHTML="",d()}function P(){m.classList.remove("loader-hide")}function $(){m.classList.add("loader-hide")}function M(){p.classList.remove("hide-button")}function d(){p.classList.add("hide-button")}function E(){w.refresh()}let a=1,c="";const O=document.querySelector(".gallery");document.querySelector(".loader");const B=document.querySelector(".load-more"),y=document.querySelector(".form");y.addEventListener("submit",C);async function C(e){if(e.preventDefault(),a=1,c="",S(),c=e.target.elements[0].value.trim(),!c){i("Please enter a search query!");return}h(),y.reset()}async function h(){P(),d();try{const{hits:e,totalHits:r}=await v(c,a);if(console.log(r),!e.length){i("No images found for your search query. Please try again.");return}q(e),a*15>=r?d():M(),a>1&&a*15>=r&&i("We're sorry, but you've reached the end of search results.")}catch(e){i(e.message||"An error occurred while fetching images. Please try again later.")}finally{$(),a+=1}}B.addEventListener("click",async()=>{await h();const{height:e}=O.firstElementChild.getBoundingClientRect();await window.scrollBy({top:e*5,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
