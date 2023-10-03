import{d as b,o as g,u as y,a as V,c as L,_ as v,r as t,b as S,e as $,f as o,w as i,g as s,h as B}from"../index74469.js";import{L as C}from"./Logo74469.js";import{I as P}from"./InputTextWithValidation74469.js";import{_ as W}from"./PasswordWithValidation.vue_vue_type_style_index_0_lang74469.js";import{c as k,a as _,F}from"./index.esm74469.js";import{s as I,h as p,e as T}from"./helpers74469.js";const E=b({name:"LoginView",setup(){g(()=>{e.clearUser()});const e=y(),m=V(),l=k({email:_().required().email().label("Email address"),password:_().required().min(6).label("Password")}),d=L(()=>e.user);return{schema:l,currentUser:d,onSubmit:async function(a,n){const r={email:a.email,password:a.password};I(),await e.login(r).then(async()=>{p(),n.resetForm()}).catch(c=>{p(),T(m,c)})}}},components:{Logo:C,InputTextWithValidation:P,PasswordWithValidation:W,Form:F}});const U={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},N={class:"m-2 text-center"},j=s("h1",{class:"mb-3 mt-0 text-center"},"Accedi al profilo",-1),q=s("h2",{class:"text-center font-normal mb-3"}," Benvenuto! Inserisci la tua email e la password ",-1),A={class:"w-full flex justify-content-start cursor-pointer text-color-secondary m-0"};function M(e,m,l,d,u,a){const n=t("Logo"),r=t("InputTextWithValidation"),c=t("PasswordWithValidation"),h=t("router-link"),f=t("Button"),w=t("Form"),x=t("Card");return S(),$("div",U,[o(x,{class:"py-4 px-3"},{content:i(()=>[s("div",N,[o(n)]),j,q,o(w,{"validation-schema":e.schema,onSubmit:e.onSubmit,class:"flex flex-column"},{default:i(()=>[o(r,{name:"email",label:"Email",type:"text"}),o(c,{name:"password",label:"Password",type:"password"}),s("div",A,[o(h,{to:"/forgot-password",class:"text-color-secondary"},{default:i(()=>[B("Password dimenticata?")]),_:1})]),o(f,{label:"Entra",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const O=v(E,[["render",M]]);export{O as default};
