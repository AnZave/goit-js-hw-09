import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const o=document.querySelector(".feedback-form");document.querySelector("textarea");function n(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function r(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}o.addEventListener("input",()=>{const e=new FormData(o),t=e.get("email"),a=e.get("message");n("feedback-form-state",{email:t,message:a})});o.addEventListener("submit",e=>{e.preventDefault();const t=new FormData(o),a=t.get("email").trim(),s=t.get("message").trim();!a||!s?alert("Fill please all fields"):(console.log({email:a,message:s}),o.reset(),localStorage.removeItem("feedback-form-state"))});window.addEventListener("DOMContentLoaded",()=>{const e=r("feedback-form-state");o.elements.email.value=(e==null?void 0:e.email)??"",o.elements.message.value=(e==null?void 0:e.message)??""});
//# sourceMappingURL=commonHelpers2.js.map
