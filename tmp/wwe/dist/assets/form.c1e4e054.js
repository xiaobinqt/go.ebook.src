import{_ as e}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{u as s,c as a,a as t,d as r}from"./index.670b29b2.js";import{a as o,t as c}from"./activeSidebarState.4b53b430.js";import{d as i,r as l,O as n,W as u,j as p,k as d,n as b,u as m,A as v,l as h}from"./vendor.6243191d.js";const g={class:"page-title has-text-centered"},f={class:"menu-toggle has-chevron"},j=b("span",{class:"rotate"},[b("i",{class:"icon-line-top"}),b("i",{class:"icon-line-center"}),b("i",{class:"icon-line-bottom"})],-1),k=b("div",{class:"title-wrap"},[b("h1",{class:"title is-4"},"申请证书")],-1),x={class:"page-content-inner"},y={class:"breadcrumb-box"},w=b("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1);var C=i({expose:[],setup(i){t();const C=a();r(),l(!0),s({title:"申请证书"}),n((()=>{o.value="projects"}));const L=l([{icon:"feather:home",hideLabel:!0,to:{name:"user-projects"}},{label:"证书列表",to:{name:"user-certs"}},{label:"申请证书"}]);return u((()=>{})),(s,a)=>{const t=e,r=h("FormLayoutCert");return p(),d("div",null,[b("div",g,[b("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:a[1]||(a[1]=e=>m(c)("projects"))},[b("span",f,[b("span",{class:[["projects"===m(o)&&"active"],"icon-box-toggle"]},[j],2)])]),k]),b("div",x,[b("div",y,[L.value?(p(),d(t,{key:0,items:L.value,separator:"bullet","with-icons":""},null,8,["items"])):v("",!0),b("div",{class:"back-button",onClick:a[2]||(a[2]=()=>m(C).back())},[w])]),b(r)])])}}});export default C;