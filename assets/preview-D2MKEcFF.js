const __vite__fileDeps=["assets/DocsRenderer-K4EAMTCU-DttsVwea.js","assets/chunk-HLWAVYOI-DTswiMlW.js","assets/iframe-DeEwi07E.js","assets/index-lToYTJ1z.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/react-18-CoWF382V.js","assets/index-DCvIRzM-.js","assets/index-AqxkzhBm.js","assets/index-Bvfpyq9K.js","assets/index-DXimoRZY.js","assets/index-BPhVFo-B.js","assets/index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as s}from"./iframe-DeEwi07E.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-DttsVwea.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
