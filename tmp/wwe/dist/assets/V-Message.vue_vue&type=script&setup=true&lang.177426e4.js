import{d as e,j as s,k as a,a2 as o,A as l,n as i,D as r}from"./vendor.6243191d.js";const n={class:"message-body"};var d=e({expose:[],props:{color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","success","info","warning","danger","white"].indexOf(e)||(console.warn(`V-Message: invalid "${e}" color. Should be primary, success, info, warning, danger, white or undefined`),!1)},closable:{type:Boolean,default:!1}},emits:["close"],setup:(e,{emit:d})=>(c,t)=>(s(),a("div",{class:["message",[e.color&&`is-${e.color}`]]},[e.closable?(s(),a("a",{key:0,class:"delete",onClick:t[1]||(t[1]=o((e=>d("close")),["prevent"]))})):l("",!0),i("div",n,[r(c.$slots,"default")])],2))});export{d as _};