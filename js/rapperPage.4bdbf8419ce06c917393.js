(()=>{document.querySelector(".switcher");const e=document.querySelector(".switcher-header"),t=document.querySelector(".slider"),r=document.querySelectorAll(".rapper-info-section"),i=(document.querySelector(".bio-albums-gallery"),document.querySelector(".gallery")),n=document.querySelector(".big-picture"),c=["Biography","Albums","Gallery"],l=()=>{n.innerHTML="",n.setAttribute("hidden",!0),n.removeEventListener("click",l)};i.addEventListener("click",(e=>{e.target.classList.contains("gallery-photo")&&(e=>{const t=document.createElement("img");t.src=e.src,t.alt=e.src,window.innerWidth>window.innerHeight?t.classList.add("width"):t.classList.add("height"),n.appendChild(t),n.removeAttribute("hidden"),n.addEventListener("click",l)})(e.target)})),t.addEventListener("change",(()=>{t.value>1.33?t.value=2:t.value<.66?t.value=0:t.value=1,r.forEach(((r,i)=>{i===+t.value?(r.removeAttribute("hidden"),e.innerHTML=c[i]):r.setAttribute("hidden",!0)}))}))})();