console.log("Run the tracking script"),window.setTimeout((()=>{console.log("timeout");var o=[],e=document.querySelectorAll("input, textarea, select");let t;console.log("inputs",e),e.forEach((e=>{var n=e.id.split("_")[0];n&&t&&t===n?o[o.length-1].push(e):o.push([e]),t=n.length>0?n:void 0})),console.log("rows",o);var n=o.filter((o=>o[0].clientHeight>0));console.log("filteredRows",n),n.forEach(((o,e)=>{o.forEach((o=>{o.addEventListener("focus",(()=>{var o={event:"formEnterProgress",formInfo:{name:document.title||"",step:e+1}};console.log("focus on ",o),window&&window.top&&(console.log("postMessage",o),window.top.postMessage({event:"123FormEvent",eventData:{...o}},"*"))}))}))}))}),250);