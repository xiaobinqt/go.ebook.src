var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,l=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,r)=>{for(var i in r||(r={}))t.call(r,i)&&l(e,i,r[i]);if(a)for(var i of a(r))s.call(r,i)&&l(e,i,r[i]);return e};import{_ as i}from"./V-Breadcrumb.vue_vue&type=script&setup=true&lang.95222eda.js";import{_ as n,a as o}from"./V-Block.vue_vue&type=script&setup=true&lang.ca99cbba.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.7d7c3fd2.js";import{_ as d}from"./V-Loader.vue_vue&type=script&setup=true&lang.152a1df5.js";import{_ as c}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.67c36c04.js";import{_ as p}from"./V-Modal.vue_vue&type=script&setup=true&lang.13c249d1.js";import{u as v,c as h,d as f,a as m}from"./index.670b29b2.js";import{a as g,t as L}from"./activeSidebarState.4b53b430.js";import{t as b,u as y}from"./useNotyf.8c9a8697.js";import{b as _,a as k,t as A}from"./activePanelState.21033cba.js";import{d as x,O as w,v as M,r as j,b as C,W as P,f as S,j as $,k as O,n as T,u as E,A as I,m as z,E as B,l as N,U as V}from"./vendor.6243191d.js";const F={series:[0],chart:{height:180,type:"radialBar",offsetX:0,offsetY:0,toolbar:{show:!1}},colors:[b.info,b.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:b.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:[""]},U={class:"page-title has-text-centered"},W={class:"menu-toggle has-chevron"},Y=T("span",{class:"rotate"},[T("i",{class:"icon-line-top"}),T("i",{class:"icon-line-center"}),T("i",{class:"icon-line-bottom"})],-1),J=T("div",{class:"title-wrap"},[T("h1",{class:"title is-4"},"开发机")],-1),R={class:"page-content-inner"},D={class:"breadcrumb-box"},G=T("i",{class:"iconify","data-icon":"feather:corner-down-left"},null,-1),K={class:"settings-card"},X={style:{"margin-bottom":"50px"}},q=T("i",{class:"iconify","data-icon":"feather:hard-drive"},null,-1),H=B("重置开发机"),Q=B("正在重置..."),Z=B("打开终端"),ee={key:0,class:"columns is-multiline"},te={class:"column is-3 flex-stat-radial"},ae={class:"dark-inverted"},se=T("p",null,"CPU",-1),le={class:"column is-3 flex-stat-radial"},re={class:"dark-inverted"},ie=T("p",null,"内存",-1),ne={class:"column is-3 flex-stat-radial"},oe={class:"dark-inverted"},ue=T("p",null,"硬盘",-1),de={class:"column is-3 flex-stat-radial"},ce={class:"dark-inverted"},pe=T("p",null,"开发盘",-1),ve={key:1,class:"table is-striped is-fullwidth"},he=T("td",null,"主机名",-1),fe=T("td",null,"IP",-1),me=T("td",null,"arch",-1),ge=T("td",null,"cpu核数",-1),Le=T("td",null,"cpu使用",-1),be=T("td",null,"内存使用",-1),ye=T("td",null,"内存总量",-1),_e=T("td",null,"硬盘使用",-1),ke=T("td",null,"硬盘总量",-1),Ae={key:1,class:"search-results-body"},xe=T("div",{class:"page-placeholder"},[T("div",{class:"placeholder-content"},[T("svg",{class:"lds-gear-set",width:"280px",height:"280px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},[T("g",{transform:"translate(50 50)"},[T("g",{transform:"translate(-17 -17) scale(0.5)"},[T("g",{transform:"rotate(150.143)"},[T("animateTransform",{attributeName:"transform",type:"rotate",values:"0;360",keyTimes:"0;1",dur:"1.4s",begin:"0s",repeatCount:"indefinite"}),T("path",{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#a69159"})])]),T("g",{transform:"translate(0 22) scale(0.4)"},[T("g",{transform:"rotate(187.357)"},[T("animateTransform",{attributeName:"transform",type:"rotate",values:"360;0",keyTimes:"0;1",dur:"1.4s",begin:"-0.0875s",repeatCount:"indefinite"}),T("path",{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#293439"})])]),T("g",{transform:"translate(28 4) scale(0.3)"},[T("g",{transform:"rotate(172.643)"},[T("animateTransform",{attributeName:"transform",type:"rotate",values:"0;360",keyTimes:"0;1",dur:"1.4s",begin:"-0.0875s",repeatCount:"indefinite"}),T("path",{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#c84445"})])])])]),T("h3",{style:{color:"#41b883"}},"开发机重置中")])],-1),we={key:2,class:"search-results-body"},Me=T("div",{class:"page-placeholder"},[T("div",{class:"placeholder-content"},[T("img",{class:"light-image",src:"/assets/search-7.063cbb6c.svg",alt:""}),T("img",{class:"dark-image",src:"/assets/search-7-dark.21d246ce.svg",alt:""}),T("h4",null,[T("i",{class:"iconify",id:"iconify","data-icon":"feather:alert-triangle","aria-hidden":"true"}),B(" 当前开发机不可用或长时间未使用，开发机已回收，请尝试重置开发机 ")])])],-1),je=B("确认");var Ce=x({expose:[],setup(e){console.log("sysinfoChart",F);const t=y();m();const a=h(),s=f();v({title:"开发机"}),w((()=>{g.value="projects"}));const l=M((()=>s.state.channel.user)),b=j([{icon:"feather:home",hideLabel:!0,to:{name:"user-projects"}},{label:"设置"},{label:"开发机"}]);C({user_name:"",passwd:"",email:"",real_name:"",avatar:"1",phone:""}),j("");const x=j(!0),B=j({}),Ce=j({}),Pe=j(r({},F)),Se=j(r({},F)),$e=j(r({},F)),Oe=j(r({},F));let Te;P((()=>{s.dispatch("channel/getProfile").then((e=>{e.edge_id?s.dispatch("user/getEdge",e.edge_id).then((t=>{Te=new EventSource(`/api/edges/${e.edge_id}/stats?token=${localStorage.getItem("token")}`),Te.addEventListener("stats",(function(e){if(e.data)try{const a=JSON.parse(e.data);x.value=!1,B.value=t,Ce.value=a,Pe.value=r(r({},F),{series:[Math.round(100*(100-a.cpu.idle))/100],labels:["CPU"]}),Se.value=r(r({},F),{series:[Math.round(a.mem.used/a.mem.total*1e4)/100],labels:["内存"]}),$e.value=r(r({},F),{series:[Math.round(a.fs[0].used/a.fs[0].total*1e4)/100],labels:["硬盘"]}),Oe.value=r(r({},F),{series:[Math.round(a.fs[1].used/a.fs[1].total*1e4)/100],labels:["开发盘"]})}catch(a){}}))})):Ve()}))}));const Ee=(e,t="b")=>{if(0===e)return`0 ${t}`;const a=e=>parseFloat(e.toFixed(2));return e<1024?a(e)+t:e<1048576?`${a(e/1024)} K${t}`:e<1073741824?`${a(e/1024/1024)} M${t}`:e<1099511627776?`${a(e/1024/1024/1024)} G${t}`:`${a(e/1024/1024/1024/1024)} T${t}`};w((()=>{g.value="settings"})),S((()=>{l.value.edge_id&&Te.close()}));const Ie=j(!1),ze=j(!1),Be=M((()=>Math.round(new Date/1e3)));let Ne;const Ve=()=>{Ie.value=!0,s.dispatch("user/resetMachine",l.value.edge_id).then((e=>{ze.value=!1,t.warning(e.msg),e.msg&&(Ie.value=!1),s.dispatch("channel/getProfile").then((e=>{clearInterval(Ne),Ne=setInterval((()=>{s.dispatch("channel/getProfile").then((e=>{e.edge_id&&(s.dispatch("channel/getProfile").then((e=>{e.edge_id&&s.dispatch("user/getEdge",e.edge_id).then((t=>{Te=new EventSource(`/api/edges/${e.edge_id}/stats?token=${localStorage.getItem("token")}`),Te.addEventListener("stats",(function(e){if(e.data)try{const a=JSON.parse(e.data);x.value=!1,B.value=t,Pe.value=r(r({},F),{series:[Math.round(100*(100-a.cpu.idle))/100],labels:["CPU"]}),Se.value=r(r({},F),{series:[Math.round(a.mem.used/a.mem.total*1e4)/100],labels:["内存"]}),$e.value=r(r({},F),{series:[Math.round(a.fs[0].used/a.fs[0].total*1e4)/100],labels:["硬盘"]}),Oe.value=r(r({},F),{series:[Math.round(a.fs[1].used/a.fs[1].total*1e4)/100],labels:["开发盘"]})}catch(a){}}))}))})),clearInterval(Ne))}))}),1e4)}))}))};return(e,t)=>{const s=i,r=o,v=u,h=n,f=N("apexchart"),m=d,y=c,w=p;return $(),O("div",null,[T("div",U,[T("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:t[1]||(t[1]=e=>E(L)("settings"))},[T("span",W,[T("span",{class:[["settings"===E(g)&&"active"],"icon-box-toggle"]},[Y],2)])]),J]),T("div",R,[T("div",D,[b.value?($(),O(s,{key:0,items:b.value,separator:"bullet","with-icons":""},null,8,["items"])):I("",!0),T("div",{class:"back-button",onClick:t[2]||(t[2]=()=>E(a).back())},[G])]),T("div",K,[T("div",X,[T(h,{title:"主机名",subtitle:B.value.hostname||E(l).edge_id},{icon:z((()=>[T(r,{color:"success",rounded:""},{default:z((()=>[q])),_:1})])),action:z((()=>[Ie.value?($(),O(v,{key:1,color:"info",icon:"fa fa-spinner fa-pulse",disabled:""},{default:z((()=>[Q])),_:1})):($(),O(v,{key:0,color:"info",onClick:t[3]||(t[3]=e=>{ze.value=!0}),icon:"fa fa-undo"},{default:z((()=>[H])),_:1})),T(v,{color:"info",onClick:t[4]||(t[4]=e=>{l.value.edge_id&&(_.value=l.value.edge_id,k.value="terminal",A.value="edges")}),icon:"fa fa-desktop"},{default:z((()=>[Z])),_:1})])),_:1},8,["subtitle"])]),E(l).edge_id?($(),O(m,{key:0,size:"large",active:x.value},{default:z((()=>[B.value.hostname?($(),O("div",ee,[T("div",te,[T(f,{height:Pe.value.chart.height,type:Pe.value.chart.type,series:Pe.value.series,options:Pe.value},null,8,["height","type","series","options"]),T("span",ae,"of "+V(B.value.num_cpus)+" CPU(s)",1),se]),T("div",le,[T(f,{height:Se.value.chart.height,type:Se.value.chart.type,series:Se.value.series,options:Se.value},null,8,["height","type","series","options"]),T("span",re,V(Ee(Ce.value.mem.used))+" of "+V(Ee(B.value.memory)),1),ie]),T("div",ne,[T(f,{height:$e.value.chart.height,type:$e.value.chart.type,series:$e.value.series,options:$e.value},null,8,["height","type","series","options"]),T("span",oe,V(Ee(1024*B.value.disk_used))+" of "+V(Ee(1024*B.value.disk_size)),1),ue]),T("div",de,[T(f,{height:Oe.value.chart.height,type:Oe.value.chart.type,series:Oe.value.series,options:Oe.value},null,8,["height","type","series","options"]),T("span",ce,V(Ee(1024*B.value.dev_disk_used))+" of "+V(Ee(1024*B.value.dev_disk_size)),1),pe])])):I("",!0),B.value.hostname?($(),O("table",ve,[T("tbody",null,[T("tr",null,[he,T("td",null,V(B.value.hostname),1)]),T("tr",null,[fe,T("td",null,V(B.value.ips.eth0.join("")),1)]),T("tr",null,[me,T("td",null,V(B.value.arch),1)]),T("tr",null,[ge,T("td",null,V(B.value.num_cpus),1)]),T("tr",null,[Le,T("td",null,V(B.value.cpu_used.toFixed(2))+"%",1)]),T("tr",null,[be,T("td",null,V(Ee(Ce.value.mem.used)),1)]),T("tr",null,[ye,T("td",null,V(Ee(B.value.memory)),1)]),T("tr",null,[_e,T("td",null,V(Ee(1024*B.value.disk_used)),1)]),T("tr",null,[ke,T("td",null,V(Ee(1024*B.value.disk_size)),1)])])])):I("",!0)])),_:1},8,["active"])):E(Be)<E(l).last_init?($(),O("div",Ae,[xe])):($(),O("div",we,[Me]))])]),T(w,{open:ze.value,actions:"center",onClose:t[5]||(t[5]=e=>ze.value=!1),title:"提示信息"},{content:z((()=>[T(y,{title:"重置开发机大约需要3-6分钟时间，你确定要重置开发机吗？"})])),action:z((()=>[T(v,{color:"primary",onClick:Ve,raised:""},{default:z((()=>[je])),_:1})])),_:1},8,["open"])])}}});export default Ce;