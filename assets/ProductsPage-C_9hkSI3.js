import{c as Ce,M as Ye,aq as Ze,N as et,l as r,r as T,ar as tt,G,as as Ve,at,au as Le,h as A,ae as lt,i as xe,a4 as Me,S as ve,U as R,V as ae,W as le,X as D,Y as ot,Z as H,_ as te,a3 as nt,a0 as J,a2 as ne,$ as se,ai as rt,aj as it,a6 as ut,I as Re,J as he,av as _e,k as De,e as Fe,w as st,R as ct,aw as dt,s as vt,Q as ce,O as ft,ax as ye,F as Ie,ay as gt,p as bt,o as mt,a as ht,az as yt,g as wt,a1 as ke,aA as Ct,aa as Qe,a5 as xt,a8 as kt,ab as Tt,ac as St,ad as Pt,am as qt,ak as $t}from"./index-DfNr3zg6.js";import{Q as pt}from"./QPage-CeXJUZgl.js";import{u as At}from"./products-BNxDj8AD.js";import{Q as Bt,f as we}from"./currencyUtils-DrG6_uKk.js";import"./rates-CxEAKhJc.js";function ie(e,S){return[!0,!1].includes(e)?e:S}const Vt=Ce({name:"QPagination",props:{...Ye,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Ze.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:S}){const{proxy:C}=xe(),{$q:s}=C,n=et(e,s),f=r(()=>parseInt(e.min,10)),l=r(()=>parseInt(e.max,10)),o=r(()=>parseInt(e.maxPages,10)),c=r(()=>$.value+" / "+l.value),w=r(()=>ie(e.boundaryLinks,e.input)),m=r(()=>ie(e.boundaryNumbers,!e.input)),I=r(()=>ie(e.directionLinks,e.input)),P=r(()=>ie(e.ellipses,!e.input)),q=T(null),$=r({get:()=>e.modelValue,set:v=>{if(v=parseInt(v,10),e.disable||isNaN(v))return;const i=tt(v,f.value,l.value);e.modelValue!==i&&S("update:modelValue",i)}});G(()=>`${f.value}|${l.value}`,()=>{$.value=e.modelValue});const _=r(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),F=r(()=>e.gutter in Ve?`${Ve[e.gutter]}px`:e.gutter||null),N=r(()=>F.value!==null?`--q-pagination-gutter-parent:-${F.value};--q-pagination-gutter-child:${F.value}`:null),Q=r(()=>{const v=[e.iconFirst||s.iconSet.pagination.first,e.iconPrev||s.iconSet.pagination.prev,e.iconNext||s.iconSet.pagination.next,e.iconLast||s.iconSet.pagination.last];return s.lang.rtl===!0?v.reverse():v}),g=r(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),p=r(()=>at(e,"flat")),d=r(()=>({[p.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),y=r(()=>{const v={[p.value]:!1};return e.activeDesign!==""&&(v[e.activeDesign]=!0),v}),B=r(()=>({...y.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),V=r(()=>{let v=Math.max(o.value,1+(P.value?2:0)+(m.value?2:0));const i={pgFrom:f.value,pgTo:l.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(l.value).length)}em`}};return o.value&&v<l.value-f.value+1&&(v=1+Math.floor(v/2)*2,i.pgFrom=Math.max(f.value,Math.min(l.value-v+1,e.modelValue-Math.floor(v/2))),i.pgTo=Math.min(l.value,i.pgFrom+v-1),m.value&&(i.boundaryStart=!0,i.pgFrom++),P.value&&i.pgFrom>f.value+(m.value?1:0)&&(i.ellipsesStart=!0,i.pgFrom++),m.value&&(i.boundaryEnd=!0,i.pgTo--),P.value&&i.pgTo<l.value-(m.value?1:0)&&(i.ellipsesEnd=!0,i.pgTo--)),i});function X(v){$.value=v}function fe(v){$.value=$.value+v}const ge=r(()=>{function v(){$.value=q.value,q.value=null}return{"onUpdate:modelValue":i=>{q.value=i},onKeyup:i=>{Le(i,13)===!0&&v()},onBlur:v}});function j(v,i,O){const E={"aria-label":i,"aria-current":"false",...d.value,...v};return O===!0&&Object.assign(E,{"aria-current":"true",...B.value}),i!==void 0&&(e.toFn!==void 0?E.to=e.toFn(i):E.onClick=()=>{X(i)}),A(Me,E)}return Object.assign(C,{set:X,setByOffset:fe}),()=>{const v=[],i=[];let O;if(w.value===!0&&(v.push(j({key:"bls",disable:e.disable||e.modelValue<=f.value,icon:Q.value[0]},f.value)),i.unshift(j({key:"ble",disable:e.disable||e.modelValue>=l.value,icon:Q.value[3]},l.value))),I.value===!0&&(v.push(j({key:"bdp",disable:e.disable||e.modelValue<=f.value,icon:Q.value[1]},e.modelValue-1)),i.unshift(j({key:"bdn",disable:e.disable||e.modelValue>=l.value,icon:Q.value[2]},e.modelValue+1))),e.input!==!0){O=[];const{pgFrom:E,pgTo:Y,marginalStyle:U}=V.value;if(V.value.boundaryStart===!0){const M=f.value===e.modelValue;v.push(j({key:"bns",style:U,disable:e.disable,label:f.value},f.value,M))}if(V.value.boundaryEnd===!0){const M=l.value===e.modelValue;i.unshift(j({key:"bne",style:U,disable:e.disable,label:l.value},l.value,M))}V.value.ellipsesStart===!0&&v.push(j({key:"bes",style:U,disable:e.disable,label:"…",ripple:!1},E-1)),V.value.ellipsesEnd===!0&&i.unshift(j({key:"bee",style:U,disable:e.disable,label:"…",ripple:!1},Y+1));for(let M=E;M<=Y;M++)O.push(j({key:`bpg${M}`,style:U,disable:e.disable,label:M},M,M===e.modelValue))}return A("div",{class:_.value,...g.value},[A("div",{class:"q-pagination__content row no-wrap items-center",style:N.value},[...v,e.input===!0?A(lt,{class:"inline",style:{width:`${c.value.length/1.5}em`},type:"number",dense:!0,value:q.value,disable:e.disable,dark:n.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:c.value,min:f.value,max:l.value,...ge.value}):A("div",{class:"q-pagination__middle row justify-center"},O),...i])])}}}),It={class:"text-bold"},Lt={class:"text-caption"},Mt={class:"q-mt-sm text-bold price-text"},Rt={class:"text-grey"},_t={class:"text-positive q-ml-sm"},Dt=ve({__name:"ProductCard",props:{product:{type:Object,required:!0},color:{type:String,default:"primary"},text:{type:String,default:"white"}},emits:["add-to-cart","view-product"],setup(e,{emit:S}){const C=S,s=o=>{C("add-to-cart",o)},n=o=>{C("view-product",o)},f=o=>o,l=o=>{const c=o.match(/[^.!?]*[.!?]/);return c?c[0]:o};return(o,c)=>(R(),ae(ut,{bordered:"",class:"product tw-w-full tw-max-w-72 tw-mx-auto !tw-bg-primary sm:tw-mx-none tw-transition tw-duration-200 tw-ease-in-out hover:tw-cursor-pointer hover:tw-scale-105 tw-shadow-none",onClick:c[1]||(c[1]=w=>n(e.product))},{default:le(()=>[D(Bt,{src:f(e.product.image),alt:e.product.name,fit:"contain",class:"sm:tw-h-2/3 tw-w-full tw-max-h-1.5"},null,8,["src","alt"]),D(ot,{class:"tw-flex-grow q-px-sm !tw-pb-0"},{default:le(()=>[H("div",It,te(e.product.name||e.product.title),1),H("div",Lt,te(l(e.product.description)),1)]),_:1}),D(nt,{class:"row justify-between items-center !tw-pt-0"},{default:le(()=>[H("div",Mt,[e.product.discount?(R(),J(ne,{key:0},[H("span",Rt,te(se(we)(e.product.price)),1),H("span",_t,te(se(we)(e.product.discountedPrice||e.product.price)),1)],64)):(R(),J(ne,{key:1},[rt(te(se(we)(e.product.price)),1)],64))]),D(Me,{color:e.color,"text-color":e.text,label:o.$t("products.addToCart"),class:"full-width q-mt-md !tw-py-4",onClick:c[0]||(c[0]=it(w=>s(e.product),["stop"]))},null,8,["color","text-color","label"])]),_:1})]),_:1}))}});let Ft=0;const Qt=["click","keydown"],jt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ft++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Et(e,S,C,s){const n=Re(_e,he);if(n===he)return console.error("QTab/QRouteTab component needs to be child of QTabs"),he;const{proxy:f}=xe(),l=T(null),o=T(null),c=T(null),w=r(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),m=r(()=>n.currentModel.value===e.name),I=r(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(m.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),P=r(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),q=r(()=>e.disable===!0||n.hasFocus.value===!0||m.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function $(g,p){if(p!==!0&&l.value!==null&&l.value.focus(),e.disable!==!0){n.updateModel({name:e.name}),C("click",g);return}}function _(g){Le(g,[13,32])?$(g,!0):dt(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&n.onKbdNavigate(g.keyCode,f.$el)===!0&&vt(g),C("keydown",g)}function F(){const g=n.tabProps.value.narrowIndicator,p=[],d=A("div",{ref:c,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&p.push(A(ce,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&p.push(A("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&p.push(e.alertIcon!==void 0?A(ce,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):A("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&p.push(d);const y=[A("div",{class:"q-focus-helper",tabindex:-1,ref:l}),A("div",{class:P.value},ft(S.default,p))];return g===!1&&y.push(d),y}const N={name:r(()=>e.name),rootRef:o,tabIndicatorRef:c,routeData:s};De(()=>{n.unregisterTab(N)}),Fe(()=>{n.registerTab(N)});function Q(g,p){const d={ref:o,class:I.value,tabindex:q.value,role:"tab","aria-selected":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:$,onKeydown:_,...p};return st(A(g,d,F()),[[ct,w.value]])}return{renderTab:Q,$tabs:n}}const de=Ce({name:"QTab",props:jt,emits:Qt,setup(e,{slots:S,emit:C}){const{renderTab:s}=Et(e,S,C);return()=>s("div")}});function Nt(e,S,C){const s=C===!0?["left","right"]:["top","bottom"];return`absolute-${S===!0?s[0]:s[1]}${e?` text-${e}`:""}`}const Ot=["left","center","right","justify"],je=Ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ot.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:S,emit:C}){const{proxy:s}=xe(),{$q:n}=s,{registerTick:f}=ye(),{registerTick:l}=ye(),{registerTick:o}=ye(),{registerTimeout:c,removeTimeout:w}=Ie(),{registerTimeout:m,removeTimeout:I}=Ie(),P=T(null),q=T(null),$=T(e.modelValue),_=T(!1),F=T(!0),N=T(!1),Q=T(!1),g=[],p=T(0),d=T(!1);let y=null,B=null,V;const X=r(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Nt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),fe=r(()=>{const t=p.value,a=$.value;for(let u=0;u<t;u++)if(g[u].name.value===a)return!0;return!1}),ge=r(()=>`q-tabs__content--align-${_.value===!0?"left":Q.value===!0?"justify":e.align}`),j=r(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),v=r(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),i=r(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),O=r(()=>e.vertical!==!0&&n.lang.rtl===!0),E=r(()=>gt===!1&&O.value===!0);G(O,ee),G(()=>e.modelValue,t=>{Y({name:t,setCurrent:!0,skipEmit:!0})}),G(()=>e.outsideArrows,U);function Y({name:t,setCurrent:a,skipEmit:u}){$.value!==t&&(u!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Ee($.value,t),$.value=t))}function U(){f(()=>{P.value&&M({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function M(t){if(i.value===void 0||q.value===null)return;const a=t[i.value.container],u=Math.min(q.value[i.value.scroll],Array.prototype.reduce.call(q.value.children,(k,h)=>k+(h[i.value.content]||0),0)),x=a>0&&u>a;_.value=x,x===!0&&l(ee),Q.value=a<parseInt(e.breakpoint,10)}function Ee(t,a){const u=t!=null&&t!==""?g.find(k=>k.name.value===t):null,x=a!=null&&a!==""?g.find(k=>k.name.value===a):null;if(re===!0)re=!1;else if(u&&x){const k=u.tabIndicatorRef.value,h=x.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),k.style.transition="none",k.style.transform="none",h.style.transition="none",h.style.transform="none";const b=k.getBoundingClientRect(),L=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${b.top-L.top}px,0) scale3d(1,${L.height?b.height/L.height:1},1)`:`translate3d(${b.left-L.left}px,0,0) scale3d(${L.width?b.width/L.width:1},1,1)`,o(()=>{y=setTimeout(()=>{y=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}x&&_.value===!0&&Z(x.rootRef.value)}function Z(t){const{left:a,width:u,top:x,height:k}=q.value.getBoundingClientRect(),h=t.getBoundingClientRect();let b=e.vertical===!0?h.top-x:h.left-a;if(b<0){q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),ee();return}b+=e.vertical===!0?h.height-k:h.width-u,b>0&&(q.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),ee())}function ee(){const t=q.value;if(t===null)return;const a=t.getBoundingClientRect(),u=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);O.value===!0?(F.value=Math.ceil(u+a.width)<t.scrollWidth-1,N.value=u>0):(F.value=u>0,N.value=e.vertical===!0?Math.ceil(u+a.height)<t.scrollHeight:Math.ceil(u+a.width)<t.scrollWidth)}function Te(t){B!==null&&clearInterval(B),B=setInterval(()=>{Ue(t)===!0&&K()},5)}function Se(){Te(E.value===!0?Number.MAX_SAFE_INTEGER:0)}function Pe(){Te(E.value===!0?0:Number.MAX_SAFE_INTEGER)}function K(){B!==null&&(clearInterval(B),B=null)}function Ne(t,a){const u=Array.prototype.filter.call(q.value.children,L=>L===a||L.matches&&L.matches(".q-tab.q-focusable")===!0),x=u.length;if(x===0)return;if(t===36)return Z(u[0]),u[0].focus(),!0;if(t===35)return Z(u[x-1]),u[x-1].focus(),!0;const k=t===(e.vertical===!0?38:37),h=t===(e.vertical===!0?40:39),b=k===!0?-1:h===!0?1:void 0;if(b!==void 0){const L=O.value===!0?-1:1,z=u.indexOf(a)+b*L;return z>=0&&z<x&&(Z(u[z]),u[z].focus({preventScroll:!0})),!0}}const Oe=r(()=>E.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ue(t){const a=q.value,{get:u,set:x}=Oe.value;let k=!1,h=u(a);const b=t<h?-1:1;return h+=b*5,h<0?(k=!0,h=0):(b===-1&&h<=t||b===1&&h>=t)&&(k=!0,h=t),x(a,h),ee(),k}function qe(t,a){for(const u in t)if(t[u]!==a[u])return!1;return!0}function ze(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const u=g.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:x,query:k}=s.$route,h=Object.keys(k).length;for(const b of u){const L=b.routeData.exact.value===!0;if(b.routeData[L===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:z,query:be,matched:Xe,href:Je}=b.routeData.resolvedLink.value,me=Object.keys(be).length;if(L===!0){if(z!==x||me!==h||qe(k,be)===!1)continue;t=b.name.value;break}if(z!==""&&z!==x||me!==0&&qe(be,k)===!1)continue;const W={matchedLen:Xe.length,queryDiff:h-me,hrefLen:Je.length-z.length};if(W.matchedLen>a.matchedLen){t=b.name.value,a=W;continue}else if(W.matchedLen!==a.matchedLen)continue;if(W.queryDiff<a.queryDiff)t=b.name.value,a=W;else if(W.queryDiff!==a.queryDiff)continue;W.hrefLen>a.hrefLen&&(t=b.name.value,a=W)}if(t===null&&g.some(b=>b.routeData===void 0&&b.name.value===$.value)===!0){re=!1;return}Y({name:t,setCurrent:!0})}function Ke(t){if(w(),d.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(d.value=!0,_.value===!0&&Z(a))}}function We(){c(()=>{d.value=!1},30)}function oe(){pe.avoidRouteWatcher===!1?m(ze):I()}function $e(){if(V===void 0){const t=G(()=>s.$route.fullPath,oe);V=()=>{t(),V=void 0}}}function He(t){g.push(t),p.value++,U(),t.routeData===void 0||s.$route===void 0?m(()=>{if(_.value===!0){const a=$.value,u=a!=null&&a!==""?g.find(x=>x.name.value===a):null;u&&Z(u.rootRef.value)}}):($e(),t.routeData.hasRouterLink.value===!0&&oe())}function Ge(t){g.splice(g.indexOf(t),1),p.value--,U(),V!==void 0&&t.routeData!==void 0&&(g.every(a=>a.routeData===void 0)===!0&&V(),oe())}const pe={currentModel:$,tabProps:X,hasFocus:d,hasActiveTab:fe,registerTab:He,unregisterTab:Ge,verifyRouteModel:oe,updateModel:Y,onKbdNavigate:Ne,avoidRouteWatcher:!1};bt(_e,pe);function Ae(){y!==null&&clearTimeout(y),K(),V!==void 0&&V()}let Be,re;return De(Ae),mt(()=>{Be=V!==void 0,Ae()}),ht(()=>{Be===!0&&($e(),re=!0,oe()),U()}),()=>A("div",{ref:P,class:j.value,role:"tablist",onFocusin:Ke,onFocusout:We},[A(yt,{onResize:M}),A("div",{ref:q,class:v.value,onScroll:ee},wt(S.default)),A(ce,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K}),A(ce,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:K,onMouseleavePassive:K,onTouchendPassive:K})])}}),Ut=ve({__name:"CategorySelect",props:{selectedCategory:{type:String,required:!0},categories:{type:Array,required:!0},color:{type:String,required:!0},text:{type:String,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:S}){const C=e,s=S,n=r({get:()=>C.selectedCategory,set:l=>{s("update:selectedCategory",l)}}),f=l=>l?l.split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "):"";return(l,o)=>(R(),J("div",null,[D(je,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=c=>n.value=c),class:"q-mb-md gt-sm","active-color":e.color,"active-bg-color":e.color,"text-color":e.color,"inactive-color":e.color,align:"justify"},{default:le(()=>[D(de,{name:"all",label:l.$t("products.categories.allProducts")},null,8,["label"]),(R(!0),J(ne,null,ke(e.categories,c=>(R(),ae(de,{key:c,name:c,label:f(c)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),D(Ct,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=c=>n.value=c),options:["all",...e.categories],class:"q-my-md lt-md",color:e.color,"text-color":e.text,label:l.$t("products.selectCategory"),outlined:"","option-label":c=>c==="all"?l.$t("products.categories.allProducts"):f(c)},null,8,["modelValue","options","color","text-color","label","option-label"])]))}}),zt=ve({__name:"ProductTabs",props:{selectedCategory:{type:String,required:!0},scrollOffset:{type:Number,default:0},categories:{type:Array,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:S}){const C=e,s=S,n=Qe(),f=T(!1),l=T(C.selectedCategory),o=r(()=>({stickyBgColor:n.dark.isActive?"dark":"light",activeBgColor:(n.dark.isActive,"white"),activeTextColor:n.dark.isActive?"dark":"black",backgroundColor:n.dark.isActive?"white":"black",textColor:n.dark.isActive?"black":"white"}));G(()=>C.scrollOffset,w=>{f.value=w>0},{immediate:!0}),G(()=>C.selectedCategory,w=>{w!==l.value&&(l.value=w)}),G(()=>l.value,w=>{s("update:selectedCategory",w)});const c=w=>w.split(" ").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ");return(w,m)=>(R(),J("div",{class:xt(["sticky tw-transition-all tw-duration-300",f.value?`tw-fixed tw-left-0 tw-w-screen tw-z-50 tw-px-3 tw-shadow-md !tw-py-0  tw-bg-[var(--q-bg-${o.value.stickyBgColor})] tw-top-0`:""])},[D(je,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=I=>l.value=I),"indicator-color":"transparent",class:"gt-sm !tw-max-w-screen-xl tw-mx-auto","active-color":o.value.activeTextColor,"active-bg-color":o.value.activeBgColor,"text-color":o.value.backgroundColor,"inactive-color":o.value.textColor,align:"justify"},{default:le(()=>[D(de,{name:"all",label:w.$t("products.categories.allProducts")},null,8,["label"]),(R(!0),J(ne,null,ke(e.categories,I=>(R(),ae(de,{key:I,name:I,label:c(I)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),D(Ut,{"selected-category":l.value,"onUpdate:selectedCategory":m[1]||(m[1]=I=>l.value=I),categories:e.categories,color:o.value.backgroundColor,text:o.value.textColor,class:"q-my-md lt-md"},null,8,["selected-category","categories","color","text"])],2))}}),Kt=kt(zt,[["__scopeId","data-v-283e050d"]]),Wt={class:"tw-font-serif"},Ht={class:"tw-container tw-mx-auto tw-mb-8 grid justify-center"},Gt={class:"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4"},ue=10,ta=ve({__name:"ProductsPage",props:{scrollOffset:{type:Number,required:!0}},setup(e){const S=Re("scrollToTop"),C=Tt(),s=Qe(),n=St(),f=At(),{t:l}=Pt(),o=T([]),c=T(1),w=T("all"),m=T([]),I=T(!0),P=r(()=>({activeTextColor:s.dark.isActive?"dark":"black",backgroundColor:s.dark.isActive?"white":"black",textColor:s.dark.isActive?"black":"white",paginationColor:s.dark.isActive?"light":"dark",paginationTextColor:s.dark.isActive?"white":"black",paginationActiveColor:s.dark.isActive?"white":"dark",paginationActiveTextColor:s.dark.isActive?"black":"white"})),q=r(()=>o.value.length?w.value==="all"?o.value:o.value.filter(d=>d.category===w.value):[]),$=r(()=>q.value.slice((c.value-1)*ue,c.value*ue)),_=r(()=>Math.ceil(o.value.length/ue)),F=d=>{C.addItem({...d,quantity:1}),s.notify({color:"positive",position:"top",timeout:1e3,message:l("products.itemAdded"),icon:"check_circle"})},N=d=>{n.push(`/products/${d.id}`)},Q=async d=>{w.value=d,c.value=1,await p(d)},g=async()=>{try{if(I.value=!0,f.isCategoryCacheValid()){const y=f.getCategoryCache();if(y){m.value=y.categories;return}}const d=await fetch("https://e-comm-backend-16bba1769344.herokuapp.com/products/categories");if(!d.ok){if(console.warn(`API returned ${d.status} for categories`),m.value.length)return;m.value=["all"];return}m.value=await d.json(),f.setCategoryCache(m.value)}catch(d){console.error("Error fetching categories:",d)}finally{I.value=!1}},p=async(d="all")=>{s.loading.show();try{const y=d!=="all"?`product_${d}`:d;if(f.isCacheValid(y)){const X=f.getCache(y);if(X){o.value=X.products;return}}const B=await fetch(`https://e-comm-backend-16bba1769344.herokuapp.com/products${d!=="all"?`/category/${d}`:""}`);if(!B.ok)throw new Error(`API returned ${B.status}`);const V=await B.json();o.value=V,f.setCache(V,y)}catch(y){console.error("Error fetching products:",y)}finally{s.loading.hide()}};return Fe(()=>{g(),p()}),(d,y)=>(R(),ae(pt,{padding:""},{default:le(()=>[H("h5",Wt,te(d.$t("products.title")),1),D(Kt,{"selected-category":w.value,categories:m.value,"scroll-offset":e.scrollOffset,"onUpdate:selectedCategory":Q},null,8,["selected-category","categories","scroll-offset"]),D(qt,{class:"q-my-md"}),H("div",Ht,[H("div",Gt,[(R(!0),J(ne,null,ke($.value,B=>(R(),ae(Dt,{key:B.id,product:B,color:P.value.backgroundColor,text:P.value.textColor,onAddToCart:F,onViewProduct:N},null,8,["product","color","text"]))),128))])]),o.value.length>ue?(R(),ae(Vt,{key:0,modelValue:c.value,"onUpdate:modelValue":[y[0]||(y[0]=B=>c.value=B),se(S)],max:_.value,"boundary-numbers":"",class:"tw-py-8 tw-flex tw-justify-center tw-items-center !tw-gap-8",color:P.value.paginationColor,"text-color":P.value.paginationTextColor,"active-color":P.value.paginationActiveColor,"active-text-color":P.value.paginationActiveTextColor},null,8,["modelValue","max","color","text-color","active-color","active-text-color","onUpdate:modelValue"])):$t("",!0)]),_:1}))}});export{ta as default};
