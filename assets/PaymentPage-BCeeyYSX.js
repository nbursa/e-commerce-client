import{d as N,ac as S,al as T,an as A,am as H,y as d,c as k,o as i,a as y,w as t,h as o,t as s,e,ar as n,ap as U,k as x,F as E,r as L,ag as C,ah as v,aq as f,ad as u,j as g,ai as Q,aj as j,m as P,aC as F,az as K}from"./index-DAD3wYIy.js";import{Q as R}from"./QPage-D2JNvikA.js";import{f as V}from"./currency-B5zgn2ku.js";import"./rates-HtHJx3MX.js";import"./axios-D8Ta9y-g.js";const z={class:"text-h6 q-mb-md"},D={class:"q-gutter-md"},M={class:"text-subtitle1 text-weight-bold"},Y={class:"text-subtitle1 text-weight-bold"},G={key:0,class:"text-positive text-xs"},J={class:"tw-flex tw-flex-col tw-gap-4"},se=N({__name:"PaymentPage",setup(W){const{t:q}=S(),m=T(),_=A(),p=H(),O=d(p.items),$=d(p.totalPrice),r=d("card"),w=d(!1),h=k(()=>m.dark.isActive?"white":"black"),b=k(()=>m.dark.isActive?"black":"white"),I=()=>{_.push(F)},B=()=>{m.notify({type:"positive",position:"top",message:q("orderOverview.orderConfirmed"),timeout:1e3}),p.clearCart(),_.push(K)};return(l,c)=>(i(),y(R,{class:"tw-p-4"},{default:t(()=>[o("div",z,s(l.$t("orderOverview.title")),1),e(n,{class:"q-my-md"}),e(U,{bordered:""},{default:t(()=>[(i(!0),x(E,null,L(O.value,a=>(i(),y(C,{key:a.id},{default:t(()=>[e(v,null,{default:t(()=>[e(f,null,{default:t(()=>[u(s(a.name),1)]),_:2},1024),e(f,{caption:""},{default:t(()=>[u(s(g(V)(a.price)),1)]),_:2},1024)]),_:2},1024),e(v,{side:""},{default:t(()=>[e(f,null,{default:t(()=>[u(s(a.quantity),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(n,{class:"q-my-md"}),o("div",D,[o("div",M,s(l.$t("orderOverview.total")),1),o("div",Y,s(g(V)($.value)),1)]),e(n,{class:"q-my-md"}),e(C,{class:"!tw-p-0"},{default:t(()=>[e(v,{class:"tw-text-sm"},{default:t(()=>[e(Q,{modelValue:r.value,"onUpdate:modelValue":c[0]||(c[0]=a=>r.value=a),val:"card",label:l.$t("checkout.cardPayment")},null,8,["modelValue","label"]),e(Q,{modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=a=>r.value=a),val:"ips",disable:!w.value},{default:t(()=>[o("span",null,[u(s(l.$t("checkout.ipsScanQrCode"))+" ",1),w.value?j("",!0):(i(),x("span",G," - "+s(l.$t("checkout.ipsInfo")),1))])]),_:1},8,["modelValue","disable"])]),_:1})]),_:1}),e(n,{class:"q-my-md"}),o("div",J,[e(P,{color:h.value,"text-color":b.value,label:l.$t("orderOverview.confirmOrder"),class:"full-width !tw-py-4",onClick:B},null,8,["color","text-color","label"]),e(P,{color:b.value,"text-color":h.value,label:l.$t("orderOverview.payNow"),class:"full-width !tw-py-4",onClick:I},null,8,["color","text-color","label"])])]),_:1}))}});export{se as default};
