!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,c)=>{const a=new URL(e,r);if(self[o].moduleMap[a])return t(self[o].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${o}.moduleMap['${a}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){c(new Error(`Failed to import: ${e}`)),n(m)},onload(){t(self[o].moduleMap[a]),n(m)}});document.head.appendChild(m)})),self[o].moduleMap={}}}("/01_expanding_cards/");
