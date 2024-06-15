(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const m=t=>{function o(e){return e>1e3?(e/1e3).toFixed(1)+"k":e}function r(e,n){let s;e.addEventListener("mouseenter",()=>{try{s=document.createElement("p"),s.classList.add("moreAbout"),s.textContent="Delete",s.style.position="absolute",s.style.right="5px",s.style.top="-40px",n.appendChild(s),console.log("Delete option shown")}catch(a){console.error("Error in mouseenter callback:",a)}}),e.addEventListener("mouseleave",()=>{try{s&&s.parentNode&&(s.remove(),console.log("Delete option removed"))}catch(a){console.error("Error in mouseleave callback:",a)}}),e.addEventListener("click",()=>{try{n.remove(),console.log("Post removed")}catch(a){console.error("Error in click callback:",a)}})}function i(e){const n=document.querySelector(".post-showing-section");e.forEach(s=>{const a=document.createElement("div");a.classList.add("post-main-div"),a.innerHTML=`
        <div class="post-of-users">
          <div>
            <div>
              <img src="${s.imageUrl}" alt="" class="accountImg">
            </div>
            <div class="user-post-info">
              <span>
                <b>${s.userName}</b>
                <p>${s.userHandle}</p>
                <p>${s.postTime}</p>
              </span>
              <div class="post-text">
                ${s.postText.map(p=>`<p>${p}</p>`).join("")}
                ${s.image?`<img src="${s.image}" alt="">`:""}
              </div>
              <div class="icons-for-post-section">
                <span class="icon-desc">
                  <i class="fa-regular fa-comment"></i>
                  ${o(s.comments)}
                </span>
                <span class="icon-desc">
                  <i class="fa-solid fa-rotate"></i>
                  ${o(s.retweets)}
                </span>
                <span class="icon-desc">
                  <i class="fa-regular fa-heart"></i>
                  ${o(s.likes)}
                </span>
                <span class="icon-desc">
                  <i class="fa-solid fa-chart-simple"></i>
                  ${o(s.views)}
                </span>
                <span class="saveShareIcon">
                  <i class="fa-regular fa-bookmark"></i>
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </span>
              </div>
            </div>
          </div>
          <i class="fa-solid fa-ellipsis ellipsis"></i>
        </div>
        <hr>
      `,n.append(a);const u=a.querySelector(".ellipsis");r(u,a)})}i(t)},c=t=>{t.style.height="auto",t.style.height=t.scrollHeight+"px"},d=[{userName:"User",userHandle:"@user_acc",postTime:"8h",postText:["I heard that India will win T20 World Cup","What's your opinion?"],comments:1100,retweets:51,likes:502,views:7e4,imageUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"},{userName:"AnotherUser",userHandle:"@another_user",postTime:"2h",postText:["The weather today is fantastic!","Let's go for a hike."],image:"https://pbs.twimg.com/media/GPtWKAcbAAAWM8J?format=png&name=small",comments:300,retweets:20,likes:150,views:1e4,imageUrl:"https://media.istockphoto.com/id/1284873957/photo/happy-to-have-a-place-i-can-call-home.jpg?s=612x612&w=is&k=20&c=laYIRWAQ3pbnna6WEyqxSI856dA9_bwPNLZbR9j_DsQ="},{userName:"Elon",userHandle:"@Elon_fan",postTime:"4h",postText:["If i sell my x.com anyone will purchase?","comment better price for it..."],comments:10,retweets:11,likes:52,views:7e3,imageUrl:"https://www.shutterstock.com/image-photo/portrait-crazy-nerd-funny-face-600w-249219544.jpg"},{userName:"Alexa",userHandle:"@Alexa_user",postTime:"2h",postText:["Can you solve It?","Comment your Answer...."],image:"https://pbs.twimg.com/media/GPtiZ0ebAAAuJoL?format=png&name=small",comments:110,retweets:20,likes:5e3,views:1e5,imageUrl:"https://www.shutterstock.com/image-photo/portrait-one-adult-caucasian-man-260nw-2122814144.jpg"}],l=(t,o,r)=>{const i=document.querySelector(".post-showing-section");let e=document.createElement("div");return e.classList.add("post-main-div"),e.innerHTML=`<div class="post-main-div">
    <div class="post-of-users">
      <div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="" class="accountImg">
        </div>
        <div class="user-post-info">
          <span>
            <b>User</b>
            <p>@user_acc</p>
            <p>1s</p>
          </span>
          <div class="post-text">
            <p>${t}</p>
          </div>
          <div class="icons-for-post-section">
            <span class="icon-desc">
              <i class="fa-regular fa-comment"></i>
              
            </span>
            <span class="icon-desc">
              <i class="fa-solid fa-rotate"></i>
             
            </span>
            <span class="icon-desc">
              <i class="fa-regular fa-heart"></i>
             
            </span>
            <span class="icon-desc">
              <i class="fa-solid fa-chart-simple"></i>
              
            </span>
            <span class="saveShareIcon">
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </span>
          </div>
        </div>
      </div>
      <i class="fa-solid fa-ellipsis ellipsis"></i>
    </div>
    <hr>
  </div>`,i.append(e),e.querySelector(".ellipsis").addEventListener("click",()=>{e.remove(),r.splice(o,1),localStorage.setItem("userInputArray",JSON.stringify(r))}),e},f=()=>{const t=document.querySelector(".post-showing-section");let o=document.querySelector(".input"),r=JSON.parse(localStorage.getItem("userInputArray"))||[];(()=>{t.innerHTML="",r.forEach((e,n)=>{const s=l(e,n,r);t.prepend(s)})})(),o.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),o.value+=`
`,c(o))}),document.querySelector(".postBtn1").addEventListener("click",()=>{let e=o.value.replace(/\n/g,"<br>");const n=l(e,r.length,r);t.prepend(n),r.push(o.value),localStorage.setItem("userInputArray",JSON.stringify(r)),o.value="",c(o)})},g=()=>{let t=null;const o=document.querySelectorAll(".paraLine"),r=o[0],i=r.querySelector(".span");i&&(i.style.display="flex",t=r),o.forEach(e=>{e.addEventListener("click",n=>{const s=e.querySelector(".span");if(console.log("click"),t&&t!==e){const a=t.querySelector(".span");a&&(a.style.display="none")}s&&(s.style.display=s.style.display==="flex"?"none":"flex"),t=e})})},h=()=>{const t=["Sports","Technology","Art","Entertainment","Gaming","Politics","Business","Culture","Science","Food","Animals","Education","Fashion & Beauty","Health & Fitness","Cryptocurrency","Travel","X Official"];function o(){const i=document.querySelector(".communitiesSection");i.innerHTML="",t.forEach(e=>{const n=document.createElement("button");n.textContent=e,i.appendChild(n)})}function r(){const i=document.querySelector(".communitiesSection"),e=document.querySelector(".prevBtn"),n=document.querySelector(".nextBtn");e.addEventListener("click",()=>{i.scrollBy({left:-200,behavior:"smooth"})}),n.addEventListener("click",()=>{i.scrollBy({left:200,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",()=>{o(),r()})};function y(){document.querySelectorAll(".userAccount").forEach(t=>{t.addEventListener("click",function(){window.open("profile.html","_self")})})}function v(){document.body.addEventListener("click",function(t){const o=t.target.closest(".postBtn"),r=t.target.closest(".logo");(o||r)&&(t.preventDefault(),window.location.pathname!=="/index.html"&&(console.log("Attempting to redirect to index.html"),window.location.href="index.html"))})}function w(){const t=document.querySelector(".toggleList"),o=document.querySelector(".helpCenter");t.addEventListener("click",function(){o.classList.toggle("show"),t.classList.toggle("fa-angle-down"),t.classList.toggle("fa-angle-up")});const r=document.querySelector(".hamburgerSection i"),i=document.querySelector(".bioImg");r.addEventListener("mouseenter",()=>{console.log("Mouse enter event triggered");try{let e=document.createElement("p");e.classList.add("moreAbout"),e.innerHTML="More",i.append(e),console.log("Paragraph appended"),setTimeout(()=>{e.remove(),console.log("Paragraph removed")},2e3)}catch(e){console.error("Error in timeout callback:",e)}})}function S(){const t=document.querySelector("article"),o=document.querySelector("article>i");document.querySelector(".accountImg1").addEventListener("click",()=>[t.style.display="flex"]),o.addEventListener("click",()=>{t.style.display="none"})}document.addEventListener("DOMContentLoaded",()=>{v(),w(),y(),S()});console.log(d);h();g();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("auto-resize-textarea");t&&t.addEventListener("input",()=>c(t)),f(),m(d)});
