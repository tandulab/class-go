import{d as c}from"./index.esm24724.js";import{D as m,_,r as p,b as f,e as g,g as i,t as u,f as V,s as y}from"../index24724.js";const h={props:{type:{type:String,default:"text"},modelValue:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""}},setup(t,l){const{value:e,errorMessage:a,handleBlur:d,handleChange:r,meta:n}=c(t.name,void 0,{initialValue:t.modelValue,valueProp:t.modelValue}),s=o=>{r(o,!0),l.emit("update:modelValue",o)};return m(t,o=>{e.value=o.modelValue}),{onInput:s,handleChange:r,handleBlur:d,errorMessage:a,inputValue:e,meta:n}}};const b={class:"field password"},v=["for"],w=["id"];function B(t,l,e,a,d,r){const n=p("Password");return f(),g("div",b,[i("label",{for:e.name},u(e.label),9,v),V(n,{modelValue:a.inputValue,"onUpdate:modelValue":[l[0]||(l[0]=s=>a.inputValue=s),l[1]||(l[1]=s=>a.onInput(s))],toggleMask:"","aria-describedby":`${e.name}-help`,class:y([{"p-invalid":a.errorMessage},"w-full"]),type:e.type,feedback:!1,onBlur:a.handleBlur},null,8,["modelValue","aria-describedby","class","type","onBlur"]),i("small",{id:`${e.name}-help`,class:"p-error"},u(a.errorMessage),9,w)])}const x=_(h,[["render",B]]);export{x as P};
