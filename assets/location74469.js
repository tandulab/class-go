import{P as h,Q as L}from"../index74469.js";class m{static async getLocations(){return(await h("/gestionale-api/public/api/admin/branches")).data.data}static async getLocationsDetail(a){return(await h(`/gestionale-api/public/api/admin/banks/${a}?include=branches`)).data.data}}const y=L({id:"location",state:()=>({location:{},locations:[],formatted_locations:[]}),getters:{getLocations:t=>t.locations,getFormattedLocations:t=>t.formatted_locations,getCurrentLocation:t=>t.location},actions:{async fetchAllLocations(){await m.getLocations().then(t=>{this.formatted_locations=t.map((a,i)=>{var s,c;const n={key:i.toString(),label:a.name,description:a.description,id:a.id,children:[]};return((c=(s=a.branches)==null?void 0:s.branches)==null?void 0:c.length)>0&&(n.children=a.branches.branches.map((e,r)=>{var d,p;const l={key:`${i}-${r}`,label:e.name,description:e.description,id:e.id,bank_id:e.bank_id,children:[]};return((p=(d=e.miniBranches)==null?void 0:d.miniBranches)==null?void 0:p.length)>0&&(l.children=e.miniBranches.miniBranches.map((o,g)=>({key:`${i}-${r}-${g}`,label:o.name,description:o.description,id:o.id,branch_id:o.branch_id}))),l})),n})})},async getLocationsDetail(t){await m.getLocationsDetail(t).then(a=>this.location=a)}}});export{y as u};
