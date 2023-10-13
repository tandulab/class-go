import{d as b,u as g,a as v,b as C,c as L,e as _,m as y,f as P,F as x,s as V,g as u,_ as $,r as n,h as S,i as B,j as o,w as h,k as p}from"../index80904.js";import{L as k}from"./Logo80904.js";import{P as F}from"./PasswordWithValidation80904.js";const U=b({name:"ChangePwdView",setup(){const s=g(),r=v(),{showLoader:l,hideLoader:e}=C(),w=L({password:_().required("La password è obbligatoria").min(8,"La password deve essere di almeno 8 caratteri"),password_confirmation:_().oneOf([y("password")],"Le password devono corrispondere").required("La conferma password è obbligatoria")}),t=P(()=>s.user),d=async function(a,i){l();const m={id:t.value.id,user:{password_confirmation:a.password_confirmation,password:a.password}};await s.changePassword(m).then(async()=>{V(r,{message:"Password aggiornata correttamente",error:!1}),e(),c()}).catch(f=>{e(),u(r,f)})};async function c(){const a={email:t.value.email,password:t.value.password};await s.login(a).then(async()=>{e()}).catch(i=>{e(),u(r,i)})}return{schema:w,currentUser:t,onSubmit:d}},components:{Logo:k,PasswordWithValidation:F,Form:x}});const W={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},j={class:"m-2 text-center"},q=p("h1",{class:"mb-3 mt-0 text-center"},"Cambia la password",-1),N=p("p",{class:"font-normal mb-4"},"Inserisci una nuova password di minimo 8 caratteri",-1);function T(s,r,l,e,w,t){const d=n("Logo"),c=n("PasswordWithValidation"),a=n("Button"),i=n("Form"),m=n("Card");return S(),B("div",W,[o(m,{class:"py-4 px-3"},{content:h(()=>[p("div",j,[o(d)]),q,N,o(i,{"validation-schema":s.schema,onSubmit:s.onSubmit,class:"flex flex-column"},{default:h(()=>[o(c,{name:"password",label:"Password*",type:"password"}),o(c,{name:"password_confirmation",label:"Conferma password*",type:"password"}),o(a,{label:"Conferma password",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const O=$(U,[["render",T]]);export{O as default};
