import*as t from"@wordpress/interactivity";var o={d:(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o)};const e=(n={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},r={},o.d(r,n),r);var n,r;(0,e.store)("copy-button",{actions:{copy:async()=>{const t=(0,e.getContext)();t.copying=!0;const{ref:o}=(0,e.getElement)();await async function(t){let o=t.closest(".wp-block-copy-button-copy-button-group-content")?.querySelector(".wp-block-copy-button-copy-button-group-content, .copy-button-group__content")?.textContent;return await navigator.clipboard.writeText(o).catch((t=>{console.error(t)})),new Promise((t=>{setTimeout(t,2e3)}))}(o),t.copying=!1}}});