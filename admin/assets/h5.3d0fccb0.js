import{_ as A}from"./index.b51fdba3.js";import{S as g,P as k,Q as y,H as x,D as H,C as N,F as R,w as U}from"./element-plus.5631ba54.js";import{r as F,f as S}from"./index.a3f35e3a.js";import{d as C,Z as q,ao as I,o as m,c as L,U as e,L as o,u as l,a as i,R as r,K as E,Q,M as G}from"./@vue.50ba5cf8.js";import"./@vueuse.4a91a4c7.js";import"./lodash-es.827b01c8.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.c3fd6bb1.js";import"./dayjs.44f0a9c4.js";import"./axios.71644922.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.71183d84.js";import"./vue-router.8e70c72f.js";import"./pinia.5dae7c2f.js";import"./css-color-function.7ed33bcb.js";import"./color.c3c12e91.js";import"./clone.49b575c3.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.edaeeca4.js";import"./vue-clipboard3.49f35762.js";import"./clipboard.a03844cd.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.16be5b07.js";import"./@highlightjs.e34a6675.js";import"./default-passive-events.74004992.js";function K(p){return F.post({url:"/channel/h5/save",params:p})}function M(){return F.get({url:"/channel/h5/detail"})}const P=i("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),T={class:"w-80"},Z=C({name:"h5Config"}),Ae=C({...Z,setup(p){const t=q({status:0,close:0,url:"",accessLink:""}),c=async()=>{const d=await M();for(const u in t)t[u]=d[u]},B=async()=>{await K(t),c(),S.msgSuccess("\u64CD\u4F5C\u6210\u529F")};return c(),(d,u)=>{const D=g,_=x,s=k,f=y,n=H,b=N,v=R,V=U,h=A,w=I("perms");return m(),L("div",null,[e(_,{class:"!border-none",shadow:"never"},{default:o(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u5546\u57CE\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),e(_,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[e(v,{ref:"formRef",model:l(t),"label-width":"160px"},{default:o(()=>[e(n,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:o(()=>[i("div",null,[e(f,{modelValue:l(t).status,"onUpdate:modelValue":u[0]||(u[0]=a=>l(t).status=a)},{default:o(()=>[e(s,{label:1},{default:o(()=>[r("\u5F00\u542F")]),_:1}),e(s,{label:0},{default:o(()=>[r("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),P])]),_:1}),e(n,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"close"},{default:o(()=>[e(f,{modelValue:l(t).close,"onUpdate:modelValue":u[1]||(u[1]=a=>l(t).close=a)},{default:o(()=>[e(s,{label:0},{default:o(()=>[r("\u7A7A\u9875\u9762")]),_:1}),e(s,{label:1},{default:o(()=>[r("\u81EA\u5B9A\u4E49\u94FE\u63A5")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(t).close==1?(m(),E(n,{key:0,label:"",prop:"url"},{default:o(()=>[i("div",T,[e(b,{modelValue:l(t).url,"onUpdate:modelValue":u[2]||(u[2]=a=>l(t).url=a),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):Q("",!0)]),_:1},8,["model"])]),_:1}),G((m(),E(h,null,{default:o(()=>[e(V,{type:"primary",onClick:B},{default:o(()=>[r("\u4FDD\u5B58")]),_:1})]),_:1})),[[w,["channel:h5:save"]]])])}}});export{Ae as default};