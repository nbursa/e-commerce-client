import{p as we,$ as mt,aC as gt,a0 as bt,c as u,x as C,aD as wt,S as z,aE as De,aF as ht,aG as Ye,v as I,ad as me,A as he,k as re,d as de,o as M,a as ae,w as R,ai as se,h as Y,t as J,e as p,Q as Xe,f as K,j as yt,F as ue,g as xe,ac as Se,ae as ce,l as Je,X as $e,Y as Ce,aH as Ze,q as et,a7 as tt,z as pt,R as xt,aI as Ct,L as Pt,y as ge,a2 as kt,aJ as Pe,P as _e,aK as St,a1 as Tt,a5 as $t,a6 as qt,aL as At,V as Bt,aM as Vt,aN as Ot,aO as It,m as Lt,aP as Mt,r as qe,aQ as Te,ak as Ae,af as Ee,aR as Qe,aS as je,ag as Ne,as as Ue,n as He,_ as Ft,al as Rt,am as Dt,ab as _t,aT as Ke,aU as Et,ap as Qt,aV as jt}from"./index-NwqqUL0q.js";import{Q as Nt}from"./QPage-KO2d-8ob.js";import{u as Ut}from"./products-BRoeSQqW.js";import{Q as Ht}from"./QImg-DH-TANz7.js";import{f as ke}from"./currency-BSzBr9bC.js";import{api as ze}from"./axios-MYTbVu-2.js";import"./rates-BA2eLwFP.js";function fe(e,A){return[!0,!1].includes(e)?e:A}const Kt=we({name:"QPagination",props:{...mt,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||gt.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:A}){const{proxy:$}=he(),{$q:r}=$,i=bt(e,r),a=u(()=>parseInt(e.min,10)),o=u(()=>parseInt(e.max,10)),c=u(()=>parseInt(e.maxPages,10)),f=u(()=>T.value+" / "+o.value),y=u(()=>fe(e.boundaryLinks,e.input)),P=u(()=>fe(e.boundaryNumbers,!e.input)),x=u(()=>fe(e.directionLinks,e.input)),n=u(()=>fe(e.ellipses,!e.input)),w=C(null),T=u({get:()=>e.modelValue,set:d=>{if(d=parseInt(d,10),e.disable||isNaN(d))return;const v=wt(d,a.value,o.value);e.modelValue!==v&&A("update:modelValue",v)}});z(()=>`${a.value}|${o.value}`,()=>{T.value=e.modelValue});const s=u(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),F=u(()=>e.gutter in De?`${De[e.gutter]}px`:e.gutter||null),k=u(()=>F.value!==null?`--q-pagination-gutter-parent:-${F.value};--q-pagination-gutter-child:${F.value}`:null),q=u(()=>{const d=[e.iconFirst||r.iconSet.pagination.first,e.iconPrev||r.iconSet.pagination.prev,e.iconNext||r.iconSet.pagination.next,e.iconLast||r.iconSet.pagination.last];return r.lang.rtl===!0?d.reverse():d}),m=u(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),L=u(()=>ht(e,"flat")),N=u(()=>({[L.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),E=u(()=>{const d={[L.value]:!1};return e.activeDesign!==""&&(d[e.activeDesign]=!0),d}),G=u(()=>({...E.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),D=u(()=>{let d=Math.max(c.value,1+(n.value?2:0)+(P.value?2:0));const v={pgFrom:a.value,pgTo:o.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(o.value).length)}em`}};return c.value&&d<o.value-a.value+1&&(d=1+Math.floor(d/2)*2,v.pgFrom=Math.max(a.value,Math.min(o.value-d+1,e.modelValue-Math.floor(d/2))),v.pgTo=Math.min(o.value,v.pgFrom+d-1),P.value&&(v.boundaryStart=!0,v.pgFrom++),n.value&&v.pgFrom>a.value+(P.value?1:0)&&(v.ellipsesStart=!0,v.pgFrom++),P.value&&(v.boundaryEnd=!0,v.pgTo--),n.value&&v.pgTo<o.value-(P.value?1:0)&&(v.ellipsesEnd=!0,v.pgTo--)),v});function le(d){T.value=d}function Z(d){T.value=T.value+d}const b=u(()=>{function d(){T.value=w.value,w.value=null}return{"onUpdate:modelValue":v=>{w.value=v},onKeyup:v=>{Ye(v,13)===!0&&d()},onBlur:d}});function B(d,v,Q){const U={"aria-label":v,"aria-current":"false",...N.value,...d};return Q===!0&&Object.assign(U,{"aria-current":"true",...G.value}),v!==void 0&&(e.toFn!==void 0?U.to=e.toFn(v):U.onClick=()=>{le(v)}),I(re,U)}return Object.assign($,{set:le,setByOffset:Z}),()=>{const d=[],v=[];let Q;if(y.value===!0&&(d.push(B({key:"bls",disable:e.disable||e.modelValue<=a.value,icon:q.value[0]},a.value)),v.unshift(B({key:"ble",disable:e.disable||e.modelValue>=o.value,icon:q.value[3]},o.value))),x.value===!0&&(d.push(B({key:"bdp",disable:e.disable||e.modelValue<=a.value,icon:q.value[1]},e.modelValue-1)),v.unshift(B({key:"bdn",disable:e.disable||e.modelValue>=o.value,icon:q.value[2]},e.modelValue+1))),e.input!==!0){Q=[];const{pgFrom:U,pgTo:W,marginalStyle:j}=D.value;if(D.value.boundaryStart===!0){const H=a.value===e.modelValue;d.push(B({key:"bns",style:j,disable:e.disable,label:a.value},a.value,H))}if(D.value.boundaryEnd===!0){const H=o.value===e.modelValue;v.unshift(B({key:"bne",style:j,disable:e.disable,label:o.value},o.value,H))}D.value.ellipsesStart===!0&&d.push(B({key:"bes",style:j,disable:e.disable,label:"…",ripple:!1},U-1)),D.value.ellipsesEnd===!0&&v.unshift(B({key:"bee",style:j,disable:e.disable,label:"…",ripple:!1},W+1));for(let H=U;H<=W;H++)Q.push(B({key:`bpg${H}`,style:j,disable:e.disable,label:H},H,H===e.modelValue))}return I("div",{class:s.value,...m.value},[I("div",{class:"q-pagination__content row no-wrap items-center",style:k.value},[...d,e.input===!0?I(me,{class:"inline",style:{width:`${f.value.length/1.5}em`},type:"number",dense:!0,value:w.value,disable:e.disable,dark:i.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:f.value,min:a.value,max:o.value,...b.value}):I("div",{class:"q-pagination__middle row justify-center"},Q),...v])])}}}),zt={class:"text-bold"},Wt={class:"text-caption"},Gt={class:"q-mt-sm text-bold price-text"},Yt={class:"text-grey"},Xt={class:"text-positive q-ml-sm"},Jt=de({__name:"ProductCard",props:{product:{type:Object,required:!0},color:{type:String,default:"primary"},text:{type:String,default:"white"}},emits:["add-to-cart","view-product"],setup(e,{emit:A}){const $="https://e-comm-api-8eba0f6c8782.herokuapp.com/api",r=e,i=A,a=C(null),o=C(null),c=n=>{i("add-to-cart",n)},f=n=>{i("view-product",n)},y=n=>`${$}${n}`,P=()=>{a.value&&o.value&&(o.value.style.height=`${a.value.clientHeight}px`)},x=n=>{const w=n.match(/[^.!?]*[.!?]/);return w?w[0]:n};return z(()=>r.product.image,()=>{P()}),(n,w)=>(M(),ae(Je,{bordered:"",class:"product tw-w-full tw-max-w-72 tw-mx-auto !tw-bg-primary sm:tw-mx-none tw-transition tw-duration-200 tw-ease-in-out hover:tw-cursor-pointer hover:tw-scale-105 tw-shadow-none",onClick:w[1]||(w[1]=T=>f(e.product))},{default:R(()=>[e.product.image?(M(),ae(Ht,{key:0,ref_key:"imageSection",ref:a,src:y(e.product.image),alt:e.product.name,fit:"contain",class:"sm:tw-h-2/3 tw-w-full tw-max-h-1.5"},null,8,["src","alt"])):se("",!0),e.product.image?se("",!0):(M(),Y("div",{key:1,ref_key:"noImageSection",ref:o,class:"tw-p-1.5 tw-flex tw-items-center tw-justify-center tw-min-h-64 tw-w-full tw-max-h-1.5"},J(n.$t("products.noImage")),513)),p(Xe,{class:"q-px-sm !tw-pb-0"},{default:R(()=>[K("div",zt,J(e.product.name||e.product.title),1),K("div",Wt,J(x(e.product.description)),1)]),_:1}),p(yt,{class:"row justify-between items-center !tw-pt-0"},{default:R(()=>[K("div",Gt,[e.product.discount?(M(),Y(ue,{key:0},[K("span",Yt,J(xe(ke)(e.product.price)),1),K("span",Xt,J(xe(ke)(e.product.discountedPrice||e.product.price)),1)],64)):(M(),Y(ue,{key:1},[Se(J(xe(ke)(e.product.price)),1)],64))]),p(re,{color:e.color,"text-color":e.text,label:n.$t("products.addToCart"),class:"full-width q-mt-md !tw-py-4",onClick:w[0]||(w[0]=ce(T=>c(e.product),["stop"]))},null,8,["color","text-color","label"])]),_:1})]),_:1}))}});let Zt=0;const ea=["click","keydown"],ta={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Zt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function aa(e,A,$,r){const i=$e(Ze,Ce);if(i===Ce)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Ce;const{proxy:a}=he(),o=C(null),c=C(null),f=C(null),y=u(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),P=u(()=>i.currentModel.value===e.name),x=u(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(P.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),n=u(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=u(()=>e.disable===!0||i.hasFocus.value===!0||P.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function T(m,L){if(L!==!0&&o.value!==null&&o.value.focus(),e.disable!==!0){i.updateModel({name:e.name}),$("click",m);return}}function s(m){Ye(m,[13,32])?T(m,!0):Ct(m)!==!0&&m.keyCode>=35&&m.keyCode<=40&&m.altKey!==!0&&m.metaKey!==!0&&i.onKbdNavigate(m.keyCode,a.$el)===!0&&Pt(m),$("keydown",m)}function F(){const m=i.tabProps.value.narrowIndicator,L=[],N=I("div",{ref:f,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&L.push(I(ge,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&L.push(I("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&L.push(e.alertIcon!==void 0?I(ge,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):I("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),m===!0&&L.push(N);const E=[I("div",{class:"q-focus-helper",tabindex:-1,ref:o}),I("div",{class:n.value},kt(A.default,L))];return m===!1&&E.push(N),E}const k={name:u(()=>e.name),rootRef:c,tabIndicatorRef:f,routeData:r};et(()=>{i.unregisterTab(k)}),tt(()=>{i.registerTab(k)});function q(m,L){const N={ref:c,class:x.value,tabindex:w.value,role:"tab","aria-selected":P.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:T,onKeydown:s,...L};return pt(I(m,N,F()),[[xt,y.value]])}return{renderTab:q,$tabs:i}}const be=we({name:"QTab",props:ta,emits:ea,setup(e,{slots:A,emit:$}){const{renderTab:r}=aa(e,A,$);return()=>r("div")}});function la(e,A,$){const r=$===!0?["left","right"]:["top","bottom"];return`absolute-${A===!0?r[0]:r[1]}${e?` text-${e}`:""}`}const oa=["left","center","right","justify"],at=we({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>oa.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:A,emit:$}){const{proxy:r}=he(),{$q:i}=r,{registerTick:a}=Pe(),{registerTick:o}=Pe(),{registerTick:c}=Pe(),{registerTimeout:f,removeTimeout:y}=_e(),{registerTimeout:P,removeTimeout:x}=_e(),n=C(null),w=C(null),T=C(e.modelValue),s=C(!1),F=C(!0),k=C(!1),q=C(!1),m=[],L=C(0),N=C(!1);let E=null,G=null,D;const le=u(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:la(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Z=u(()=>{const t=L.value,l=T.value;for(let g=0;g<t;g++)if(m[g].name.value===l)return!0;return!1}),b=u(()=>`q-tabs__content--align-${s.value===!0?"left":q.value===!0?"justify":e.align}`),B=u(()=>`q-tabs row no-wrap items-center q-tabs--${s.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),d=u(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+b.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),v=u(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Q=u(()=>e.vertical!==!0&&i.lang.rtl===!0),U=u(()=>St===!1&&Q.value===!0);z(Q,ne),z(()=>e.modelValue,t=>{W({name:t,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,j);function W({name:t,setCurrent:l,skipEmit:g}){T.value!==t&&(g!==!0&&e["onUpdate:modelValue"]!==void 0&&$("update:modelValue",t),(l===!0||e["onUpdate:modelValue"]===void 0)&&(lt(T.value,t),T.value=t))}function j(){a(()=>{n.value&&H({width:n.value.offsetWidth,height:n.value.offsetHeight})})}function H(t){if(v.value===void 0||w.value===null)return;const l=t[v.value.container],g=Math.min(w.value[v.value.scroll],Array.prototype.reduce.call(w.value.children,(O,S)=>O+(S[v.value.content]||0),0)),V=l>0&&g>l;s.value=V,V===!0&&o(ne),q.value=l<parseInt(e.breakpoint,10)}function lt(t,l){const g=t!=null&&t!==""?m.find(O=>O.name.value===t):null,V=l!=null&&l!==""?m.find(O=>O.name.value===l):null;if(ve===!0)ve=!1;else if(g&&V){const O=g.tabIndicatorRef.value,S=V.tabIndicatorRef.value;E!==null&&(clearTimeout(E),E=null),O.style.transition="none",O.style.transform="none",S.style.transition="none",S.style.transform="none";const h=O.getBoundingClientRect(),_=S.getBoundingClientRect();S.style.transform=e.vertical===!0?`translate3d(0,${h.top-_.top}px,0) scale3d(1,${_.height?h.height/_.height:1},1)`:`translate3d(${h.left-_.left}px,0,0) scale3d(${_.width?h.width/_.width:1},1,1)`,c(()=>{E=setTimeout(()=>{E=null,S.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",S.style.transform="none"},70)})}V&&s.value===!0&&oe(V.rootRef.value)}function oe(t){const{left:l,width:g,top:V,height:O}=w.value.getBoundingClientRect(),S=t.getBoundingClientRect();let h=e.vertical===!0?S.top-V:S.left-l;if(h<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),ne();return}h+=e.vertical===!0?S.height-O:S.width-g,h>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),ne())}function ne(){const t=w.value;if(t===null)return;const l=t.getBoundingClientRect(),g=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Q.value===!0?(F.value=Math.ceil(g+l.width)<t.scrollWidth-1,k.value=g>0):(F.value=g>0,k.value=e.vertical===!0?Math.ceil(g+l.height)<t.scrollHeight:Math.ceil(g+l.width)<t.scrollWidth)}function Be(t){G!==null&&clearInterval(G),G=setInterval(()=>{rt(t)===!0&&ee()},5)}function Ve(){Be(U.value===!0?Number.MAX_SAFE_INTEGER:0)}function Oe(){Be(U.value===!0?0:Number.MAX_SAFE_INTEGER)}function ee(){G!==null&&(clearInterval(G),G=null)}function ot(t,l){const g=Array.prototype.filter.call(w.value.children,_=>_===l||_.matches&&_.matches(".q-tab.q-focusable")===!0),V=g.length;if(V===0)return;if(t===36)return oe(g[0]),g[0].focus(),!0;if(t===35)return oe(g[V-1]),g[V-1].focus(),!0;const O=t===(e.vertical===!0?38:37),S=t===(e.vertical===!0?40:39),h=O===!0?-1:S===!0?1:void 0;if(h!==void 0){const _=Q.value===!0?-1:1,X=g.indexOf(l)+h*_;return X>=0&&X<V&&(oe(g[X]),g[X].focus({preventScroll:!0})),!0}}const nt=u(()=>U.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,l)=>{t.scrollLeft=-l}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,l)=>{t.scrollTop=l}}:{get:t=>t.scrollLeft,set:(t,l)=>{t.scrollLeft=l}});function rt(t){const l=w.value,{get:g,set:V}=nt.value;let O=!1,S=g(l);const h=t<S?-1:1;return S+=h*5,S<0?(O=!0,S=0):(h===-1&&S<=t||h===1&&S>=t)&&(O=!0,S=t),V(l,S),ne(),O}function Ie(t,l){for(const g in t)if(t[g]!==l[g])return!1;return!0}function it(){let t=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const g=m.filter(h=>h.routeData!==void 0&&h.routeData.hasRouterLink.value===!0),{hash:V,query:O}=r.$route,S=Object.keys(O).length;for(const h of g){const _=h.routeData.exact.value===!0;if(h.routeData[_===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:X,query:ye,matched:vt,href:ft}=h.routeData.resolvedLink.value,pe=Object.keys(ye).length;if(_===!0){if(X!==V||pe!==S||Ie(O,ye)===!1)continue;t=h.name.value;break}if(X!==""&&X!==V||pe!==0&&Ie(ye,O)===!1)continue;const te={matchedLen:vt.length,queryDiff:S-pe,hrefLen:ft.length-X.length};if(te.matchedLen>l.matchedLen){t=h.name.value,l=te;continue}else if(te.matchedLen!==l.matchedLen)continue;if(te.queryDiff<l.queryDiff)t=h.name.value,l=te;else if(te.queryDiff!==l.queryDiff)continue;te.hrefLen>l.hrefLen&&(t=h.name.value,l=te)}if(t===null&&m.some(h=>h.routeData===void 0&&h.name.value===T.value)===!0){ve=!1;return}W({name:t,setCurrent:!0})}function st(t){if(y(),N.value!==!0&&n.value!==null&&t.target&&typeof t.target.closest=="function"){const l=t.target.closest(".q-tab");l&&n.value.contains(l)===!0&&(N.value=!0,s.value===!0&&oe(l))}}function ut(){f(()=>{N.value=!1},30)}function ie(){Me.avoidRouteWatcher===!1?P(it):x()}function Le(){if(D===void 0){const t=z(()=>r.$route.fullPath,ie);D=()=>{t(),D=void 0}}}function ct(t){m.push(t),L.value++,j(),t.routeData===void 0||r.$route===void 0?P(()=>{if(s.value===!0){const l=T.value,g=l!=null&&l!==""?m.find(V=>V.name.value===l):null;g&&oe(g.rootRef.value)}}):(Le(),t.routeData.hasRouterLink.value===!0&&ie())}function dt(t){m.splice(m.indexOf(t),1),L.value--,j(),D!==void 0&&t.routeData!==void 0&&(m.every(l=>l.routeData===void 0)===!0&&D(),ie())}const Me={currentModel:T,tabProps:le,hasFocus:N,hasActiveTab:Z,registerTab:ct,unregisterTab:dt,verifyRouteModel:ie,updateModel:W,onKbdNavigate:ot,avoidRouteWatcher:!1};Tt(Ze,Me);function Fe(){E!==null&&clearTimeout(E),ee(),D!==void 0&&D()}let Re,ve;return et(Fe),$t(()=>{Re=D!==void 0,Fe()}),qt(()=>{Re===!0&&(Le(),ve=!0,ie()),j()}),()=>I("div",{ref:n,class:B.value,role:"tablist",onFocusin:st,onFocusout:ut},[I(At,{onResize:H}),I("div",{ref:w,class:d.value,onScroll:ne},Bt(A.default)),I(ge,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ve,onTouchstartPassive:Ve,onMouseupPassive:ee,onMouseleavePassive:ee,onTouchendPassive:ee}),I(ge,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(k.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Oe,onTouchstartPassive:Oe,onMouseupPassive:ee,onMouseleavePassive:ee,onTouchendPassive:ee})])}}),na=we({name:"QPopupProxy",props:{...Vt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:A,emit:$,attrs:r}){const{proxy:i}=he(),{$q:a}=i,o=C(!1),c=C(null),f=u(()=>parseInt(e.breakpoint,10)),{canShow:y}=Ot({showing:o});function P(){return a.screen.width<f.value||a.screen.height<f.value?"dialog":"menu"}const x=C(P()),n=u(()=>x.value==="menu"?{maxHeight:"99vh"}:{});z(()=>P(),s=>{o.value!==!0&&(x.value=s)});function w(s){o.value=!0,$("show",s)}function T(s){o.value=!1,x.value=P(),$("hide",s)}return Object.assign(i,{show(s){y(s)===!0&&c.value.show(s)},hide(s){c.value.hide(s)},toggle(s){c.value.toggle(s)}}),It(i,"currentComponent",()=>({type:x.value,ref:c.value})),()=>{const s={ref:c,...n.value,...r,onShow:w,onHide:T};let F;return x.value==="dialog"?F=Lt:(F=Mt,Object.assign(s,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),I(F,s,A.default)}}}),ra=de({__name:"CategorySelect",props:{selectedCategory:{type:String,required:!0},categories:{type:Array,required:!0},color:{type:String,required:!0},text:{type:String,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:A}){const $=e,r=A,i=u({get:()=>$.selectedCategory,set:o=>{r("update:selectedCategory",o)}}),a=o=>o?o.split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" "):"";return(o,c)=>(M(),Y("div",null,[p(at,{modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=f=>i.value=f),class:"q-mb-md gt-sm","active-color":e.color,"active-bg-color":e.color,"text-color":e.color,"inactive-color":e.color,align:"justify"},{default:R(()=>[p(be,{name:"all",label:o.$t("products.categories.allProducts")},null,8,["label"]),(M(!0),Y(ue,null,qe(e.categories,f=>(M(),ae(be,{key:f,name:f,label:a(f)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),p(Te,{modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=f=>i.value=f),options:["all",...e.categories],class:"q-my-md lt-md",color:e.color,"text-color":e.text,label:o.$t("products.selectCategory"),outlined:"","option-label":f=>f==="all"?o.$t("products.categories.allProducts"):a(f)},null,8,["modelValue","options","color","text-color","label","option-label"])]))}}),ia={class:"tw-flex tw-flex-col tw-gap-3 tw-w-full tw-mx-auto lg:!tw-flex-row tw-rounded md:tw-px-0 lg:tw-max-w-screen-2xl"},sa={class:"tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-3 md:tw-flex md:tw-flex-row md:tw-flex-grow lg:tw-gap-4"},ua={class:"tw-w-full tw-flex tw-gap-3 tw-items-start lg:tw-w-fit"},We=de({__name:"FiltersForm",props:{filters:{type:Object,required:!0},sortOptions:{type:Array,required:!0},sortOrderOptions:{type:Array,required:!0},color:{type:String,default:""},text:{type:String,default:""}},emits:["update:filters","apply-filters","reset-filters"],setup(e,{emit:A}){const $=e,r=A,i=Ae(),a=C({...$.filters}),o=i.screen.lt.md,c=()=>{o||r("update:filters",a.value)},f=()=>{r("apply-filters",a.value)},y=()=>{a.value={search:"",minPrice:null,maxPrice:null,sortBy:{value:"id",label:"ID"},sortOrder:{value:"asc",label:"Ascending"}},console.log(a.value),r("update:filters",a.value),o&&r("apply-filters",a.value)};return z(a,c,{deep:!0}),(P,x)=>(M(),Y("div",ia,[p(me,{modelValue:a.value.search,"onUpdate:modelValue":x[0]||(x[0]=n=>a.value.search=n),placeholder:"Search products",label:"Search",dense:"",class:"tw-w-full md:tw-max-w-md tw-mb-3 sm:tw-mr-3",onInput:c},null,8,["modelValue"]),K("div",sa,[p(me,{modelValue:a.value.minPrice,"onUpdate:modelValue":x[1]||(x[1]=n=>a.value.minPrice=n),modelModifiers:{number:!0},type:"number",label:"Min Price",placeholder:"Min Price",dense:"",class:"tw-w-full md:tw-w-1/4 md:tw-min-w-20 lg:tw-flex-1",onInput:c},null,8,["modelValue"]),p(me,{modelValue:a.value.maxPrice,"onUpdate:modelValue":x[2]||(x[2]=n=>a.value.maxPrice=n),modelModifiers:{number:!0},type:"number",label:"Max Price",placeholder:"Max Price",dense:"",class:"tw-w-full md:tw-w-1/4 md:tw-min-w-20 lg:tw-flex-1",onInput:c},null,8,["modelValue"]),p(Te,{modelValue:a.value.sortBy,"onUpdate:modelValue":[x[3]||(x[3]=n=>a.value.sortBy=n),c],options:e.sortOptions,"option-value":"value","option-label":"label",label:"Sort Order",dense:"",class:"tw-w-full md:tw-w-1/4 md:tw-min-w-20 lg:tw-flex-1"},{option:R(n=>[p(Ee,Qe(je(n.itemProps)),{default:R(()=>[p(Ne,null,{default:R(()=>[p(Ue,null,{default:R(()=>[Se(J(n.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),p(Te,{modelValue:a.value.sortOrder,"onUpdate:modelValue":[x[4]||(x[4]=n=>a.value.sortOrder=n),c],options:e.sortOrderOptions,"option-value":"value","option-label":"label",label:"Sort Order",dense:"",class:"tw-w-full md:tw-w-1/4 md:tw-min-w-20 lg:tw-flex-1"},{option:R(n=>[p(Ee,Qe(je(n.itemProps)),{default:R(()=>[p(Ne,null,{default:R(()=>[p(Ue,null,{default:R(()=>[Se(J(n.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"])]),K("div",ua,[p(re,{type:"button",label:"Apply",color:e.color,"text-color":e.text,class:"lt-md !tw-w-full",onClick:ce(f,["prevent"])},null,8,["color","text-color"]),p(re,{type:"button",label:"Reset",outline:"",color:e.text,"text-color":e.color,class:"!tw-w-full lg:!tw-w-auto lg:tw-mb-0 lg:tw-px-2",onClick:ce(y,["prevent"])},null,8,["color","text-color"])])]))}}),ca={class:"gt-sm tw-w-full tw-flex tw-items-center tw-flex-grow tw-gap-3 tw-py-2 tw-px-1 !tw-max-w-screen-2xl tw-mx-auto !tw-text-[13px]"},da={class:"lt-md tw-flex tw-items-center tw-justify-between tw-px-0"},va={key:0,class:"tw-px-1"},fa=de({__name:"ProductTabs",props:{selectedCategory:{type:String,required:!0},scrollOffset:{type:Number,default:0},categories:{type:Array,required:!0},filters:{type:Object,required:!0},sortOptions:{type:Array,required:!0},sortOrderOptions:{type:Array,required:!0}},emits:["update:selectedCategory","update:filters"],setup(e,{emit:A}){const $=$e("scrollToTop"),r=e,i=A,a=Ae(),o=C(!1),c=C(r.selectedCategory),f=C(!1),y=u(()=>({stickyBgColor:a.dark.isActive?"q-dark":"q-light-lighter",activeBgColor:(a.dark.isActive,"white"),activeTextColor:a.dark.isActive?"dark":"black",backgroundColor:a.dark.isActive?"white":"black",textColor:a.dark.isActive?"black":"white"})),P=u(()=>a.screen.lt.md),x=u(()=>a.dark.isActive),n=()=>{f.value=!f.value},w=k=>{i("update:filters",k),f.value=!1},T=k=>{i("update:filters",k),f.value=!1};z(()=>r.scrollOffset,k=>{o.value=k>0},{immediate:!0}),z(()=>r.selectedCategory,k=>{k!==c.value&&(c.value=k)}),z(()=>c.value,k=>{i("update:selectedCategory",k),$()});const s=k=>{i("update:filters",k)},F=k=>k.split(" ").map(q=>q.charAt(0).toUpperCase()+q.slice(1)).join(" ");return(k,q)=>(M(),Y("div",{class:He(["sticky",{"is-sticky":o.value},o.value&&`tw-bg-${y.value.stickyBgColor}`])},[K("div",ca,[p(at,{modelValue:c.value,"onUpdate:modelValue":q[0]||(q[0]=m=>c.value=m),"indicator-color":"transparent",class:"tw-w-full","active-color":y.value.activeTextColor,"active-bg-color":y.value.activeBgColor,"text-color":y.value.backgroundColor,"inactive-color":y.value.textColor,align:"justify"},{default:R(()=>[p(be,{name:"all",label:k.$t("products.categories.allProducts")},null,8,["label"]),(M(!0),Y(ue,null,qe(e.categories,m=>(M(),ae(be,{key:m,name:m,label:F(m),class:"!tw-text-[13px]"},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),p(re,{"text-color":y.value.activeTextColor,color:y.value.activeBgColor,icon:"tune",onClick:ce(n,["prevent"])},null,8,["text-color","color"])]),K("div",da,[p(ra,{"selected-category":c.value,"onUpdate:selectedCategory":q[1]||(q[1]=m=>c.value=m),categories:e.categories,color:y.value.backgroundColor,text:y.value.textColor,class:"tw-w-full tw-mr-3"},null,8,["selected-category","categories","color","text"]),p(re,{"text-color":y.value.activeBgColor,color:y.value.activeTextColor,icon:"tune",class:"!tw-py-3",onClick:ce(n,["prevent"])},null,8,["text-color","color"])]),!P.value&&f.value?(M(),Y("div",va,[p(We,{filters:e.filters,"sort-options":e.sortOptions,"sort-order-options":e.sortOrderOptions,"onUpdate:filters":s},null,8,["filters","sort-options","sort-order-options"])])):se("",!0),P.value&&f.value?(M(),ae(na,{key:1,"transition-show":"scale","transition-hide":"scale",class:He(["!tw-w-full !tw-mr-0",x.value?"bg-dark text-light":"bg-light text-dark"])},{default:R(()=>[p(Je,{class:"!tw-w-full !tw-mx-auto"},{default:R(()=>[p(Xe,null,{default:R(()=>[p(We,{filters:e.filters,"sort-options":e.sortOptions,"sort-order-options":e.sortOrderOptions,text:y.value.activeBgColor,color:y.value.activeTextColor,"onUpdate:filters":s,onApplyFilters:w,onResetFilters:T},null,8,["filters","sort-options","sort-order-options","text","color"])]),_:1})]),_:1})]),_:1},8,["class"])):se("",!0)],2))}}),ma=Ft(fa,[["__scopeId","data-v-305d500c"]]),ga={class:"tw-text-3xl tw-font-serif tw-mx-auto tw-my-4 2xl:tw-text-center 2xl:tw-mt-0"},ba={class:"tw-container tw-mx-auto tw-mb-8 tw-mt-4 grid justify-center"},wa={class:"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4"},ha="products_categories",Ge=10,Ta=de({__name:"ProductsPage",props:{scrollOffset:{type:Number,required:!0}},setup(e){const A=$e("scrollToTop"),$=Rt(),r=Ae(),i=Dt(),a=Ut(),{t:o}=_t(),c=C([]),f=C(1),y=C("all"),P=C([]),x=C(!0),n=C({total:0,page:1,limit:10,lastPage:1}),w=[{label:"ID",value:"id"},{label:"Name",value:"name"},{label:"Price",value:"price"}],T=[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}],s=C({search:"",minPrice:null,maxPrice:null,sortBy:w[0],sortOrder:T[0]}),F=u(()=>Math.ceil(n.value.total/n.value.limit)),k=u(()=>c.value),q=u(()=>({activeTextColor:r.dark.isActive?"dark":"black",backgroundColor:r.dark.isActive?"white":"black",textColor:r.dark.isActive?"black":"white",paginationColor:r.dark.isActive?"light":"dark",paginationTextColor:r.dark.isActive?"white":"black",paginationActiveColor:r.dark.isActive?"white":"dark",paginationActiveTextColor:r.dark.isActive?"black":"white"}));z(s,()=>{f.value=1,Z(y.value)},{deep:!0});const m=b=>{$.addItem({...b,quantity:1}),r.notify({color:"positive",position:"top",timeout:1e3,message:o("products.itemAdded"),icon:"check_circle"})},L=b=>{i.push(`${Ke}/${b.id}`)},N=b=>{f.value=b,A(),Z(y.value)},E=async b=>{y.value=b,f.value=1,await Z(b)},G=b=>{s.value=b},D=async()=>{try{if(x.value=!0,a.isCacheValid(ha)){const B=a.getCategoryCache();if(B){P.value=B.categories;return}}const b=await ze.get(`https://e-comm-api-8eba0f6c8782.herokuapp.com/api${jt}`);if(b.status!==200)throw new Error("Failed to fetch categories");P.value=b.data,a.setCategoryCache(P.value)}catch(b){console.error("Error fetching categories:",b)}finally{x.value=!1}},le=b=>`products_${b.category}_${b.page}_${b.limit}_${b.search}_${b.minPrice}_${b.maxPrice}_${b.sortBy}_${b.sortOrder}`,Z=async(b="all")=>{r.loading.show();try{const B={category:b,page:f.value,limit:Ge,search:s.value.search,minPrice:s.value.minPrice,maxPrice:s.value.maxPrice,sortBy:s.value.sortBy.value,sortOrder:s.value.sortOrder.value},d=le(B),v=a.getCache(d);if(v?.meta&&v?.data){c.value=v.data,n.value=v.meta,r.loading.hide();return}const Q=new URLSearchParams({page:f.value.toString(),limit:Ge.toString(),search:s.value.search,sortBy:s.value.sortBy.value,sortOrder:s.value.sortOrder.value});s.value.minPrice!==null&&Q.append("minPrice",s.value.minPrice.toString()),s.value.maxPrice!==null&&Q.append("maxPrice",s.value.maxPrice.toString());const U=`https://e-comm-api-8eba0f6c8782.herokuapp.com/api${Ke}${b!=="all"?`${Et}/${b}`:""}?${Q}`,W=await ze.get(U);if(W.status!==200)throw new Error("Failed to fetch products");if(W&&W.data){const j=W.data;c.value=j.data,n.value=j.meta,a.setCache(j,d)}}catch(B){console.error("Error fetching products:",B),B instanceof Error?r.notify({color:"negative",message:`${o("errors.fetchProducts")}, error: ${B.message}`,timeout:5e3,icon:"error",position:"top"}):r.notify({color:"negative",message:o("errors.fetchProducts"),timeout:5e3,icon:"error",position:"top"})}finally{r.loading.hide()}};return tt(async()=>{await Promise.all([D(),Z()])}),(b,B)=>(M(),ae(Nt,{padding:"",class:"!tw-pb-16 !tw-pt-4 !tw-px-3"},{default:R(()=>[K("h4",ga,J(b.$t("products.title")),1),p(ma,{"selected-category":y.value,categories:P.value,"scroll-offset":e.scrollOffset,filters:s.value,"sort-options":w,"sort-order-options":T,"onUpdate:selectedCategory":E,"onUpdate:filters":G},null,8,["selected-category","categories","scroll-offset","filters"]),p(Qt),K("div",ba,[K("div",wa,[(M(!0),Y(ue,null,qe(k.value,d=>(M(),ae(Jt,{key:d.id,product:d,color:q.value.backgroundColor,text:q.value.textColor,onAddToCart:m,onViewProduct:L},null,8,["product","color","text"]))),128))])]),n.value.total>0?(M(),ae(Kt,{key:0,modelValue:f.value,"onUpdate:modelValue":[B[0]||(B[0]=d=>f.value=d),N],max:F.value,"boundary-numbers":"",class:"tw-py-8 tw-flex tw-justify-center tw-items-center !tw-gap-8",color:q.value.paginationColor,"text-color":q.value.paginationTextColor,"active-color":q.value.paginationActiveColor,"active-text-color":q.value.paginationActiveTextColor},null,8,["modelValue","max","color","text-color","active-color","active-text-color"])):se("",!0)]),_:1}))}});export{Ta as default};
