import{d as h,u as f,a as b,c as w,l as g,_ as x,r as o,b as v,e as y,f as a,w as d,g as r}from"../index74469.js";import{L}from"./Logo74469.js";import{I as V}from"./InputTextWithValidation74469.js";import{c as C,a as F,F as S}from"./index.esm74469.js";import{s as T,a as $,h as B,e as P}from"./helpers74469.js";const E=h({name:"ForgotPwdView",setup(){const e=f(),s=b(),i=C({email:F().required("L'email è obbligatoria").email("L'email non è valida").label("Email")}),c=w(()=>e.user);return{schema:i,currentUser:c,onSubmit:async function(m,l){T();const n={email:m.email};await e.requestPasswordReset(n).then(async t=>{$(s,{message:t.message}),g.push({name:"login"})}).catch(t=>{B(),P(s,t)})}}},components:{Logo:L,InputTextWithValidation:V,Form:S}});const I={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},k={class:"m-2 text-center"},U=r("h1",{class:"mb-3 mt-0 text-center"},"Password dimenticata?",-1),W=r("p",{class:"font-normal mb-4"}," Ti verrà inviata un'email con le istruzioni per reimpostare la password. ",-1);function q(e,s,i,c,p,m){const l=o("Logo"),n=o("InputTextWithValidation"),t=o("Button"),u=o("Form"),_=o("Card");return v(),y("div",I,[a(_,{class:"py-4 px-3"},{content:d(()=>[r("div",k,[a(l)]),U,W,a(u,{"validation-schema":e.schema,onSubmit:e.onSubmit,class:"flex flex-column"},{default:d(()=>[a(n,{name:"email",label:"Email*",type:"text"}),a(t,{label:"Conferma password",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const D=x(E,[["render",q]]);export{D as default};
