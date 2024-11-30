/*! For license information please see 428.afca82a0.chunk.js.LICENSE.txt */
(self.webpackChunkbabycare1=self.webpackChunkbabycare1||[]).push([[428],{9428:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(5043),i=r(3216),n=r(5475),o=r(6213),s=r(4282),l=r(579);const d=[{name:"Baby Soap",image:"/images/babysoap.jpg",price:"1 Soap = 40 rs"},{name:"Baby Tissues",image:"/images/babyTissues.jpg",price:"50 pieces = 100 rs"},{name:"Baby Shampoo",image:"/images/babyShampoo.jpg",price:"70 ml = 120 rs"},{name:"Baby Oil",image:"/images/babyOil.jpg",price:"100 ml = 150 rs"},{name:"Baby Moisturiser",image:"/images/moisturiser.jpg",price:"50 ml = 90 rs"},{name:"Baby Lotion",image:"/images/lotion.jpg",price:"50 ml = 120 rs"},{name:"Baby Nail Clipper",image:"/images/nailClipper.jpg",price:"1 set = 150 rs"},{name:"Baby Nasal Aspirator",image:"/images/nasalAspirator.jpg",price:"1 Pump = 140 rs"},{name:"Baby All Skin Soap",image:"/images/allSkinSoap.webp",price:"1 Packet = 200 rs"},{name:"Baby Wet Wipes",image:"/images/babyWetWipes.jpg",price:"50 pieces = 150 rs"},{name:"Baby Comb And Brush Set",image:"/images/combAndBrush.jpg",price:"1 set = 99 rs"},{name:"Baby SunScreen",image:"/images/sunscreen.jpg",price:"50 mg = 120 rs"}],p=()=>{const e=(0,i.Zp)(),[t,r]=(0,a.useState)({fullName:"",email:"",contactNumber:"",address:"",product:"",quantity:""}),p=Array.from({length:10},((e,t)=>t+1)),c=e=>{const{name:t,value:a}=e.target;r((e=>({...e,[t]:a})))};return(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{style:{textAlign:"center"},children:"BabyCare Products"}),(0,l.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center",marginTop:"20px"},children:d.map(((e,t)=>(0,l.jsxs)("div",{style:{textAlign:"center",backgroundColor:"rgba(255, 255, 255, 0.8)",borderRadius:"10px",padding:"10px",width:"calc(25% - 30px)",boxSizing:"border-box"},children:[(0,l.jsx)("img",{src:e.image,alt:e.name,style:{width:"100%",borderRadius:"10px"}}),(0,l.jsx)("p",{style:{fontWeight:"bold",marginTop:"10px"},children:e.name}),(0,l.jsx)("p",{style:{color:"#666",marginTop:"5px"},children:e.price})]},t)))}),(0,l.jsxs)("div",{style:{maxWidth:"600px",margin:"20px auto",padding:"20px",border:"1px solid #ddd",borderRadius:"10px",backgroundColor:"#f9f9f9"},children:[(0,l.jsxs)("form",{onSubmit:async r=>{r.preventDefault();try{const r=d.find((e=>e.name===t.product)),a=parseFloat(r.price.split("=")[1])*t.quantity,i=new Date;i.setDate(i.getDate()+3);const n={...t,quantity:parseInt(t.quantity),totalPrice:a,deliveryDate:i.toISOString()},s=await o.A.post("http://localhost:8080/api/orders",n);alert("Order submitted successfully!"),e("/order-summary",{state:s.data})}catch(a){console.error("Error submitting order:",a),alert("Failed to submit order. Please try again.")}},children:[(0,l.jsx)("h2",{style:{textAlign:"center",marginBottom:"20px"},children:"Order Form"}),["Full Name","Email","Contact Number","Address"].map(((e,r)=>(0,l.jsxs)("div",{style:{marginBottom:"15px"},children:[(0,l.jsx)("label",{htmlFor:e.toLowerCase().replace(" ",""),style:{display:"block",marginBottom:"5px",fontWeight:"bold"},children:e}),(0,l.jsx)("input",{type:"Email"===e?"email":"Contact Number"===e?"tel":"text",id:e.toLowerCase().replace(" ",""),name:e.toLowerCase().replace(" ",""),value:t[e.toLowerCase().replace(" ","")],onChange:c,placeholder:`Enter your ${e.toLowerCase()}`,required:!0,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"5px"}})]},r))),["Product","Quantity"].map(((e,r)=>(0,l.jsxs)("div",{style:{marginBottom:"15px"},children:[(0,l.jsx)("label",{htmlFor:e.toLowerCase(),style:{display:"block",marginBottom:"5px",fontWeight:"bold"},children:e}),(0,l.jsxs)("select",{id:e.toLowerCase(),name:e.toLowerCase(),value:t[e.toLowerCase()],onChange:c,required:!0,style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"5px"},children:[(0,l.jsx)("option",{value:"",disabled:!0,children:`Select ${e.toLowerCase()}`}),"Product"===e?d.map((e=>(0,l.jsx)("option",{value:e.name,children:e.name},e.name))):p.map((e=>(0,l.jsx)("option",{value:e,children:e},e)))]})]},r))),(0,l.jsx)("button",{type:"submit",style:{width:"100%",padding:"10px",backgroundColor:"#4CAF50",color:"#fff",border:"none",borderRadius:"5px",fontWeight:"bold",cursor:"pointer"},children:"Submit"})]}),(0,l.jsx)("div",{className:"text-center mt-4",children:(0,l.jsx)(n.N_,{to:"/mother",children:(0,l.jsx)(s.A,{style:{backgroundColor:"#6c757d",border:"none",borderRadius:"20px",padding:"0.5rem 1.5rem"},children:"Back"})})})]})]})}},4140:(e,t,r)=>{"use strict";r.d(t,{Am:()=>o});var a=r(5043),i=r(579);const n=["as","disabled"];function o(e){let{tagName:t,disabled:r,href:a,target:i,rel:n,role:o,onClick:s,tabIndex:l=0,type:d}=e;t||(t=null!=a||null!=i||null!=n?"a":"button");const p={tagName:t};if("button"===t)return[{type:d||"button",disabled:r},p];const c=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(a))&&e.preventDefault(),r?e.stopPropagation():null==s||s(e)};return"a"===t&&(a||(a="#"),r&&(a=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:r?void 0:l,href:a,target:"a"===t?i:void 0,"aria-disabled":r||void 0,rel:"a"===t?n:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},p]}const s=a.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,n);const[l,{tagName:d}]=o(Object.assign({tagName:r,disabled:a},s));return(0,i.jsx)(d,Object.assign({},s,l,{ref:t}))}));s.displayName="Button"},4282:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var a=r(8139),i=r.n(a),n=r(5043),o=r(4140),s=r(7852),l=r(579);const d=n.forwardRef(((e,t)=>{let{as:r,bsPrefix:a,variant:n="primary",size:d,active:p=!1,disabled:c=!1,className:m,...u}=e;const b=(0,s.oU)(a,"btn"),[g,{tagName:x}]=(0,o.Am)({tagName:r,disabled:c,...u}),y=x;return(0,l.jsx)(y,{...g,...u,ref:t,disabled:c,className:i()(m,b,p&&"active",n&&`${b}-${n}`,d&&`${b}-${d}`,u.href&&c&&"disabled")})}));d.displayName="Button";const p=d},7852:(e,t,r)=>{"use strict";r.d(t,{Jm:()=>c,Wz:()=>m,gy:()=>p,oU:()=>d});var a=r(5043);r(579);const i=["xxl","xl","lg","md","sm","xs"],n="xs",o=a.createContext({prefixes:{},breakpoints:i,minBreakpoint:n}),{Consumer:s,Provider:l}=o;function d(e,t){const{prefixes:r}=(0,a.useContext)(o);return e||r[t]||t}function p(){const{breakpoints:e}=(0,a.useContext)(o);return e}function c(){const{minBreakpoint:e}=(0,a.useContext)(o);return e}function m(){const{dir:e}=(0,a.useContext)(o);return"rtl"===e}},8139:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,n(r)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=428.afca82a0.chunk.js.map