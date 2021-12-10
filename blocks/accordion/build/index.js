!function(){"use strict";var e,t={190:function(){var e=window.wp.blocks,t=window.wp.element,o=(window.wp.i18n,window.wp.blockEditor),n=window.wp.components,r=JSON.parse('{"apiVersion":2,"name":"smeedijzer/accordion","version":"0.1.0","title":"Accordion block","category":"widgets","icon":"smiley","description":"accordion","textdomain":"smeedijzer-block-accordion","keywords":["bootstrap","component"],"example":{},"supports":{"anchor":true,"align":false,"html":false},"attributes":{"blockId":{"type":"string"}},"editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css"}');(0,e.registerBlockType)(r,{icon:function(){return(0,t.createElement)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24"},(0,t.createElement)(n.Path,{d:"M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z"}),(0,t.createElement)(n.Path,{d:"M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z"}),(0,t.createElement)(n.Path,{d:"M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z"}))},edit:function(e){const{attributes:{blockId:n},clientId:r,setAttributes:i}=e;console.log("blockId: "+n),n||i({blockId:r});const c=(0,o.useBlockProps)({className:"accordion",id:"block-"+n});return wp.data.select("core/block-editor").getBlocks(n).length,(0,t.createElement)("div",c,(0,t.createElement)(o.InnerBlocks,{allowedBlocks:["smeedijzer/accordion-item"],template:[["smeedijzer/accordion-item",{}]],templateLock:!1}))},save:function(e){const{attributes:{blockId:n}}=e,r=o.useBlockProps.save({className:"accordion",id:"block-"+n});return(0,t.createElement)("div",r,(0,t.createElement)(o.InnerBlocks.Content,null))}})}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,o,r,i){if(!o){var c=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<c&&(c=i));if(l){e.splice(d--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,c=o[0],l=o[1],s=o[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(t&&t(o);a<c.length;a++)i=c[a],n.o(e,i)&&e[i]&&e[i][0](),e[c[a]]=0;return n.O(d)},o=self.webpackChunksmeedijzer_block_accordion=self.webpackChunksmeedijzer_block_accordion||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var r=n.O(void 0,[46],(function(){return n(190)}));r=n.O(r)}();