import{c as Ce,M as Ye,aq as Ze,N as et,l as o,r as T,ar as tt,G as J,as as Ie,at,au as Re,h as $,ae as lt,i as xe,a4 as ke,S as fe,U as M,V as Y,W as ne,X as j,Y as ot,Z as X,_ as oe,a3 as nt,a0 as Z,a2 as ie,$ as me,ai as rt,aj as it,a6 as ut,I as st,J as he,av as _e,k as De,e as Fe,w as ct,R as dt,aw as vt,s as ft,Q as de,O as gt,ax as ye,F as Le,ay as bt,p as mt,o as ht,a as yt,az as wt,g as Ct,a1 as Se,aA as xt,aa as Qe,a5 as kt,a8 as St,ab as Tt,ac as Pt,ad as qt,am as pt,ak as Me}from"./index-B1bzm8pQ.js";import{Q as $t}from"./QPage-BYRwpyyZ.js";import{u as At}from"./products-BzcCPQKi.js";import{Q as Bt,f as we}from"./currencyUtils-BQSnj4RS.js";import"./rates-BNzjwj2_.js";function se(e,P){return[!0,!1].includes(e)?e:P}const Vt=Ce({name:"QPagination",props:{...Ye,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Ze.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:P}){const{proxy:C}=xe(),{$q:d}=C,n=et(e,d),f=o(()=>parseInt(e.min,10)),r=o(()=>parseInt(e.max,10)),u=o(()=>parseInt(e.maxPages,10)),l=o(()=>q.value+" / "+r.value),B=o(()=>se(e.boundaryLinks,e.input)),m=o(()=>se(e.boundaryNumbers,!e.input)),x=o(()=>se(e.directionLinks,e.input)),w=o(()=>se(e.ellipses,!e.input)),y=T(null),q=o({get:()=>e.modelValue,set:v=>{if(v=parseInt(v,10),e.disable||isNaN(v))return;const s=tt(v,f.value,r.value);e.modelValue!==s&&P("update:modelValue",s)}});J(()=>`${f.value}|${r.value}`,()=>{q.value=e.modelValue});const D=o(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),E=o(()=>e.gutter in Ie?`${Ie[e.gutter]}px`:e.gutter||null),U=o(()=>E.value!==null?`--q-pagination-gutter-parent:-${E.value};--q-pagination-gutter-child:${E.value}`:null),F=o(()=>{const v=[e.iconFirst||d.iconSet.pagination.first,e.iconPrev||d.iconSet.pagination.prev,e.iconNext||d.iconSet.pagination.next,e.iconLast||d.iconSet.pagination.last];return d.lang.rtl===!0?v.reverse():v}),g=o(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),p=o(()=>at(e,"flat")),R=o(()=>({[p.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),I=o(()=>{const v={[p.value]:!1};return e.activeDesign!==""&&(v[e.activeDesign]=!0),v}),N=o(()=>({...I.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),i=o(()=>{let v=Math.max(u.value,1+(w.value?2:0)+(m.value?2:0));const s={pgFrom:f.value,pgTo:r.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(r.value).length)}em`}};return u.value&&v<r.value-f.value+1&&(v=1+Math.floor(v/2)*2,s.pgFrom=Math.max(f.value,Math.min(r.value-v+1,e.modelValue-Math.floor(v/2))),s.pgTo=Math.min(r.value,s.pgFrom+v-1),m.value&&(s.boundaryStart=!0,s.pgFrom++),w.value&&s.pgFrom>f.value+(m.value?1:0)&&(s.ellipsesStart=!0,s.pgFrom++),m.value&&(s.boundaryEnd=!0,s.pgTo--),w.value&&s.pgTo<r.value-(m.value?1:0)&&(s.ellipsesEnd=!0,s.pgTo--)),s});function A(v){q.value=v}function Q(v){q.value=q.value+v}const ee=o(()=>{function v(){q.value=y.value,y.value=null}return{"onUpdate:modelValue":s=>{y.value=s},onKeyup:s=>{Re(s,13)===!0&&v()},onBlur:v}});function L(v,s,z){const O={"aria-label":s,"aria-current":"false",...R.value,...v};return z===!0&&Object.assign(O,{"aria-current":"true",...N.value}),s!==void 0&&(e.toFn!==void 0?O.to=e.toFn(s):O.onClick=()=>{A(s)}),$(ke,O)}return Object.assign(C,{set:A,setByOffset:Q}),()=>{const v=[],s=[];let z;if(B.value===!0&&(v.push(L({key:"bls",disable:e.disable||e.modelValue<=f.value,icon:F.value[0]},f.value)),s.unshift(L({key:"ble",disable:e.disable||e.modelValue>=r.value,icon:F.value[3]},r.value))),x.value===!0&&(v.push(L({key:"bdp",disable:e.disable||e.modelValue<=f.value,icon:F.value[1]},e.modelValue-1)),s.unshift(L({key:"bdn",disable:e.disable||e.modelValue>=r.value,icon:F.value[2]},e.modelValue+1))),e.input!==!0){z=[];const{pgFrom:O,pgTo:te,marginalStyle:K}=i.value;if(i.value.boundaryStart===!0){const _=f.value===e.modelValue;v.push(L({key:"bns",style:K,disable:e.disable,label:f.value},f.value,_))}if(i.value.boundaryEnd===!0){const _=r.value===e.modelValue;s.unshift(L({key:"bne",style:K,disable:e.disable,label:r.value},r.value,_))}i.value.ellipsesStart===!0&&v.push(L({key:"bes",style:K,disable:e.disable,label:"…",ripple:!1},O-1)),i.value.ellipsesEnd===!0&&s.unshift(L({key:"bee",style:K,disable:e.disable,label:"…",ripple:!1},te+1));for(let _=O;_<=te;_++)z.push(L({key:`bpg${_}`,style:K,disable:e.disable,label:_},_,_===e.modelValue))}return $("div",{class:D.value,...g.value},[$("div",{class:"q-pagination__content row no-wrap items-center",style:U.value},[...v,e.input===!0?$(lt,{class:"inline",style:{width:`${l.value.length/1.5}em`},type:"number",dense:!0,value:y.value,disable:e.disable,dark:n.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:l.value,min:f.value,max:r.value,...ee.value}):$("div",{class:"q-pagination__middle row justify-center"},z),...s])])}}}),It={class:"text-bold"},Lt={class:"text-caption"},Mt={class:"q-mt-sm text-bold price-text"},Rt={class:"text-grey"},_t={class:"text-positive q-ml-sm"},Dt=fe({__name:"ProductCard",props:{product:{type:Object,required:!0},color:{type:String,default:"primary"},text:{type:String,default:"white"}},emits:["add-to-cart","view-product"],setup(e,{emit:P}){const C=P,d=u=>{C("add-to-cart",u)},n=u=>{C("view-product",u)},f=u=>u,r=u=>{const l=u.match(/[^.!?]*[.!?]/);return l?l[0]:u};return(u,l)=>(M(),Y(ut,{bordered:"",class:"product tw-w-full tw-max-w-72 tw-mx-auto !tw-bg-primary sm:tw-mx-none tw-transition tw-duration-200 tw-ease-in-out hover:tw-cursor-pointer hover:tw-scale-105 tw-shadow-none",onClick:l[1]||(l[1]=B=>n(e.product))},{default:ne(()=>[j(Bt,{src:f(e.product.image),alt:e.product.name,fit:"contain",class:"sm:tw-h-2/3 tw-w-full tw-max-h-1.5"},null,8,["src","alt"]),j(ot,{class:"tw-flex-grow q-px-sm !tw-pb-0"},{default:ne(()=>[X("div",It,oe(e.product.name||e.product.title),1),X("div",Lt,oe(r(e.product.description)),1)]),_:1}),j(nt,{class:"row justify-between items-center !tw-pt-0"},{default:ne(()=>[X("div",Mt,[e.product.discount?(M(),Z(ie,{key:0},[X("span",Rt,oe(me(we)(e.product.price)),1),X("span",_t,oe(me(we)(e.product.discountedPrice||e.product.price)),1)],64)):(M(),Z(ie,{key:1},[rt(oe(me(we)(e.product.price)),1)],64))]),j(ke,{color:e.color,"text-color":e.text,label:u.$t("products.addToCart"),class:"full-width q-mt-md !tw-py-4",onClick:l[0]||(l[0]=it(B=>d(e.product),["stop"]))},null,8,["color","text-color","label"])]),_:1})]),_:1}))}});let Ft=0;const Qt=["click","keydown"],jt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ft++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Et(e,P,C,d){const n=st(_e,he);if(n===he)return console.error("QTab/QRouteTab component needs to be child of QTabs"),he;const{proxy:f}=xe(),r=T(null),u=T(null),l=T(null),B=o(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),m=o(()=>n.currentModel.value===e.name),x=o(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(m.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),w=o(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=o(()=>e.disable===!0||n.hasFocus.value===!0||m.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function q(g,p){if(p!==!0&&r.value!==null&&r.value.focus(),e.disable!==!0){n.updateModel({name:e.name}),C("click",g);return}}function D(g){Re(g,[13,32])?q(g,!0):vt(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&n.onKbdNavigate(g.keyCode,f.$el)===!0&&ft(g),C("keydown",g)}function E(){const g=n.tabProps.value.narrowIndicator,p=[],R=$("div",{ref:l,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&p.push($(de,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&p.push($("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&p.push(e.alertIcon!==void 0?$(de,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):$("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&p.push(R);const I=[$("div",{class:"q-focus-helper",tabindex:-1,ref:r}),$("div",{class:w.value},gt(P.default,p))];return g===!1&&I.push(R),I}const U={name:o(()=>e.name),rootRef:u,tabIndicatorRef:l,routeData:d};De(()=>{n.unregisterTab(U)}),Fe(()=>{n.registerTab(U)});function F(g,p){const R={ref:u,class:x.value,tabindex:y.value,role:"tab","aria-selected":m.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:D,...p};return ct($(g,R,E()),[[dt,B.value]])}return{renderTab:F,$tabs:n}}const ve=Ce({name:"QTab",props:jt,emits:Qt,setup(e,{slots:P,emit:C}){const{renderTab:d}=Et(e,P,C);return()=>d("div")}});function Nt(e,P,C){const d=C===!0?["left","right"]:["top","bottom"];return`absolute-${P===!0?d[0]:d[1]}${e?` text-${e}`:""}`}const Ot=["left","center","right","justify"],je=Ce({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ot.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:P,emit:C}){const{proxy:d}=xe(),{$q:n}=d,{registerTick:f}=ye(),{registerTick:r}=ye(),{registerTick:u}=ye(),{registerTimeout:l,removeTimeout:B}=Le(),{registerTimeout:m,removeTimeout:x}=Le(),w=T(null),y=T(null),q=T(e.modelValue),D=T(!1),E=T(!0),U=T(!1),F=T(!1),g=[],p=T(0),R=T(!1);let I=null,N=null,i;const A=o(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Nt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Q=o(()=>{const t=p.value,a=q.value;for(let c=0;c<t;c++)if(g[c].name.value===a)return!0;return!1}),ee=o(()=>`q-tabs__content--align-${D.value===!0?"left":F.value===!0?"justify":e.align}`),L=o(()=>`q-tabs row no-wrap items-center q-tabs--${D.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),v=o(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ee.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),s=o(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),z=o(()=>e.vertical!==!0&&n.lang.rtl===!0),O=o(()=>bt===!1&&z.value===!0);J(z,le),J(()=>e.modelValue,t=>{te({name:t,setCurrent:!0,skipEmit:!0})}),J(()=>e.outsideArrows,K);function te({name:t,setCurrent:a,skipEmit:c}){q.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Ee(q.value,t),q.value=t))}function K(){f(()=>{w.value&&_({width:w.value.offsetWidth,height:w.value.offsetHeight})})}function _(t){if(s.value===void 0||y.value===null)return;const a=t[s.value.container],c=Math.min(y.value[s.value.scroll],Array.prototype.reduce.call(y.value.children,(S,h)=>S+(h[s.value.content]||0),0)),k=a>0&&c>a;D.value=k,k===!0&&r(le),F.value=a<parseInt(e.breakpoint,10)}function Ee(t,a){const c=t!=null&&t!==""?g.find(S=>S.name.value===t):null,k=a!=null&&a!==""?g.find(S=>S.name.value===a):null;if(ue===!0)ue=!1;else if(c&&k){const S=c.tabIndicatorRef.value,h=k.tabIndicatorRef.value;I!==null&&(clearTimeout(I),I=null),S.style.transition="none",S.style.transform="none",h.style.transition="none",h.style.transform="none";const b=S.getBoundingClientRect(),V=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${b.top-V.top}px,0) scale3d(1,${V.height?b.height/V.height:1},1)`:`translate3d(${b.left-V.left}px,0,0) scale3d(${V.width?b.width/V.width:1},1,1)`,u(()=>{I=setTimeout(()=>{I=null,h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}k&&D.value===!0&&ae(k.rootRef.value)}function ae(t){const{left:a,width:c,top:k,height:S}=y.value.getBoundingClientRect(),h=t.getBoundingClientRect();let b=e.vertical===!0?h.top-k:h.left-a;if(b<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),le();return}b+=e.vertical===!0?h.height-S:h.width-c,b>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),le())}function le(){const t=y.value;if(t===null)return;const a=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);z.value===!0?(E.value=Math.ceil(c+a.width)<t.scrollWidth-1,U.value=c>0):(E.value=c>0,U.value=e.vertical===!0?Math.ceil(c+a.height)<t.scrollHeight:Math.ceil(c+a.width)<t.scrollWidth)}function Te(t){N!==null&&clearInterval(N),N=setInterval(()=>{Ue(t)===!0&&H()},5)}function Pe(){Te(O.value===!0?Number.MAX_SAFE_INTEGER:0)}function qe(){Te(O.value===!0?0:Number.MAX_SAFE_INTEGER)}function H(){N!==null&&(clearInterval(N),N=null)}function Ne(t,a){const c=Array.prototype.filter.call(y.value.children,V=>V===a||V.matches&&V.matches(".q-tab.q-focusable")===!0),k=c.length;if(k===0)return;if(t===36)return ae(c[0]),c[0].focus(),!0;if(t===35)return ae(c[k-1]),c[k-1].focus(),!0;const S=t===(e.vertical===!0?38:37),h=t===(e.vertical===!0?40:39),b=S===!0?-1:h===!0?1:void 0;if(b!==void 0){const V=z.value===!0?-1:1,W=c.indexOf(a)+b*V;return W>=0&&W<k&&(ae(c[W]),c[W].focus({preventScroll:!0})),!0}}const Oe=o(()=>O.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Ue(t){const a=y.value,{get:c,set:k}=Oe.value;let S=!1,h=c(a);const b=t<h?-1:1;return h+=b*5,h<0?(S=!0,h=0):(b===-1&&h<=t||b===1&&h>=t)&&(S=!0,h=t),k(a,h),le(),S}function pe(t,a){for(const c in t)if(t[c]!==a[c])return!1;return!0}function ze(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const c=g.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:k,query:S}=d.$route,h=Object.keys(S).length;for(const b of c){const V=b.routeData.exact.value===!0;if(b.routeData[V===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:W,query:ge,matched:Xe,href:Je}=b.routeData.resolvedLink.value,be=Object.keys(ge).length;if(V===!0){if(W!==k||be!==h||pe(S,ge)===!1)continue;t=b.name.value;break}if(W!==""&&W!==k||be!==0&&pe(ge,S)===!1)continue;const G={matchedLen:Xe.length,queryDiff:h-be,hrefLen:Je.length-W.length};if(G.matchedLen>a.matchedLen){t=b.name.value,a=G;continue}else if(G.matchedLen!==a.matchedLen)continue;if(G.queryDiff<a.queryDiff)t=b.name.value,a=G;else if(G.queryDiff!==a.queryDiff)continue;G.hrefLen>a.hrefLen&&(t=b.name.value,a=G)}if(t===null&&g.some(b=>b.routeData===void 0&&b.name.value===q.value)===!0){ue=!1;return}te({name:t,setCurrent:!0})}function Ke(t){if(B(),R.value!==!0&&w.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&w.value.contains(a)===!0&&(R.value=!0,D.value===!0&&ae(a))}}function We(){l(()=>{R.value=!1},30)}function re(){Ae.avoidRouteWatcher===!1?m(ze):x()}function $e(){if(i===void 0){const t=J(()=>d.$route.fullPath,re);i=()=>{t(),i=void 0}}}function He(t){g.push(t),p.value++,K(),t.routeData===void 0||d.$route===void 0?m(()=>{if(D.value===!0){const a=q.value,c=a!=null&&a!==""?g.find(k=>k.name.value===a):null;c&&ae(c.rootRef.value)}}):($e(),t.routeData.hasRouterLink.value===!0&&re())}function Ge(t){g.splice(g.indexOf(t),1),p.value--,K(),i!==void 0&&t.routeData!==void 0&&(g.every(a=>a.routeData===void 0)===!0&&i(),re())}const Ae={currentModel:q,tabProps:A,hasFocus:R,hasActiveTab:Q,registerTab:He,unregisterTab:Ge,verifyRouteModel:re,updateModel:te,onKbdNavigate:Ne,avoidRouteWatcher:!1};mt(_e,Ae);function Be(){I!==null&&clearTimeout(I),H(),i!==void 0&&i()}let Ve,ue;return De(Be),ht(()=>{Ve=i!==void 0,Be()}),yt(()=>{Ve===!0&&($e(),ue=!0,re()),K()}),()=>$("div",{ref:w,class:L.value,role:"tablist",onFocusin:Ke,onFocusout:We},[$(wt,{onResize:_}),$("div",{ref:y,class:v.value,onScroll:le},Ct(P.default)),$(de,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:H,onMouseleavePassive:H,onTouchendPassive:H}),$(de,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(U.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:H,onMouseleavePassive:H,onTouchendPassive:H})])}}),Ut=fe({__name:"CategorySelect",props:{selectedCategory:{type:String,required:!0},categories:{type:Array,required:!0},color:{type:String,required:!0},text:{type:String,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:P}){const C=e,d=P,n=o({get:()=>C.selectedCategory,set:r=>{d("update:selectedCategory",r)}}),f=r=>r?r.split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" "):"";return(r,u)=>(M(),Z("div",null,[j(je,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),class:"q-mb-md gt-sm","active-color":e.color,"active-bg-color":e.color,"text-color":e.color,"inactive-color":e.color,align:"justify"},{default:ne(()=>[j(ve,{name:"all",label:r.$t("products.categories.allProducts")},null,8,["label"]),(M(!0),Z(ie,null,Se(e.categories,l=>(M(),Y(ve,{key:l,name:l,label:f(l)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),j(xt,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=l=>n.value=l),options:["all",...e.categories],class:"q-my-md lt-md",color:e.color,"text-color":e.text,label:r.$t("products.selectCategory"),outlined:"","option-label":l=>l==="all"?r.$t("products.categories.allProducts"):f(l)},null,8,["modelValue","options","color","text-color","label","option-label"])]))}}),zt=fe({__name:"ProductTabs",props:{selectedCategory:{type:String,required:!0},scrollOffset:{type:Number,default:0},categories:{type:Array,required:!0}},emits:["update:selectedCategory"],setup(e,{emit:P}){const C=e,d=P,n=Qe(),f=T(!1),r=T(null),u=T(C.selectedCategory),l=o(()=>({stickyBgColor:n.dark.isActive?"dark":"light",activeBgColor:(n.dark.isActive,"white"),activeTextColor:n.dark.isActive?"dark":"black",backgroundColor:n.dark.isActive?"white":"black",textColor:n.dark.isActive?"black":"white"}));J(()=>C.scrollOffset,m=>{f.value=m>70,f.value&&r.value?r.value.style.top="70px":r.value&&(r.value.style.top="initial")},{immediate:!0}),J(()=>C.selectedCategory,m=>{m!==u.value&&(u.value=m)}),J(()=>u.value,m=>{d("update:selectedCategory",m)});const B=m=>m.split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ");return(m,x)=>(M(),Z("div",{class:kt(["sticky tw-transition-all tw-duration-300",f.value?`tw-fixed tw-left-0 tw-w-screen tw-z-50 tw-px-3 tw-shadow-md !tw-py-0 !tw-text-xs tw-bg-[var(--q-bg-${l.value.stickyBgColor})] sticky-top`:""])},[j(je,{modelValue:u.value,"onUpdate:modelValue":x[0]||(x[0]=w=>u.value=w),"indicator-color":"transparent",class:"gt-sm !tw-max-w-screen-xl tw-mx-auto","active-color":l.value.activeTextColor,"active-bg-color":l.value.activeBgColor,"text-color":l.value.backgroundColor,"inactive-color":l.value.textColor,align:"justify"},{default:ne(()=>[j(ve,{name:"all",label:m.$t("products.categories.allProducts")},null,8,["label"]),(M(!0),Z(ie,null,Se(e.categories,w=>(M(),Y(ve,{key:w,name:w,label:B(w)},null,8,["name","label"]))),128))]),_:1},8,["modelValue","active-color","active-bg-color","text-color","inactive-color"]),j(Ut,{"selected-category":u.value,"onUpdate:selectedCategory":x[1]||(x[1]=w=>u.value=w),categories:e.categories,color:l.value.backgroundColor,text:l.value.textColor,class:"q-my-md lt-md"},null,8,["selected-category","categories","color","text"])],2))}}),Kt=St(zt,[["__scopeId","data-v-a58c8764"]]),Wt={class:"q-my-md tw-font-serif"},Ht={class:"tw-container tw-mx-auto tw-mb-8 grid justify-center"},Gt={class:"tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4"},ce=10,ta=fe({__name:"ProductsPage",props:{scrollOffset:{type:Number,required:!0}},setup(e){const P=e,C=Tt(),d=Qe(),n=Pt(),f=At(),{t:r}=qt(),u="https://e-comm-backend-16bba1769344.herokuapp.com",l=T([]),B=T(1),m=T("all"),x=T([]),w=T(!0),y=o(()=>({activeTextColor:d.dark.isActive?"dark":"black",backgroundColor:d.dark.isActive?"white":"black",textColor:d.dark.isActive?"black":"white",paginationColor:d.dark.isActive?"light":"dark",paginationTextColor:d.dark.isActive?"white":"black",paginationActiveColor:d.dark.isActive?"white":"dark",paginationActiveTextColor:d.dark.isActive?"black":"white"})),q=o(()=>l.value.length?m.value==="all"?l.value:l.value.filter(i=>i.category===m.value):[]),D=o(()=>q.value.slice((B.value-1)*ce,B.value*ce)),E=o(()=>Math.ceil(l.value.length/ce)),U=o(()=>P.scrollOffset>300),F=()=>{const i=document.querySelector(".q-page-container");i?i.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})},g=i=>{C.addItem({...i,quantity:1}),d.notify({color:"positive",position:"top",timeout:1e3,message:r("products.itemAdded"),icon:"check_circle"})},p=i=>{n.push(`/products/${i.id}`)},R=async i=>{m.value=i,B.value=1,await N(i)},I=async()=>{try{if(w.value=!0,f.isCategoryCacheValid()){const A=f.getCategoryCache();if(A){x.value=A.categories;return}}const i=await fetch(`${u}/products/categories`);if(!i.ok){if(console.warn(`API returned ${i.status} for categories`),x.value.length)return;x.value=["all"];return}x.value=await i.json(),f.setCategoryCache(x.value)}catch(i){console.error("Error fetching categories:",i)}finally{w.value=!1}},N=async(i="all")=>{d.loading.show();try{const A=i!=="all"?`product_${i}`:i;if(f.isCacheValid(A)){const L=f.getCache(A);if(L){l.value=L.products;return}}const Q=await fetch(`${u}/products${i!=="all"?`/category/${i}`:""}`);if(!Q.ok)throw new Error(`API returned ${Q.status}`);const ee=await Q.json();l.value=ee,f.setCache(ee,A)}catch(A){console.error("Error fetching products:",A)}finally{d.loading.hide()}};return Fe(()=>{I(),N()}),(i,A)=>(M(),Y($t,{padding:"",class:"tw-relative"},{default:ne(()=>[X("h5",Wt,oe(i.$t("products.title")),1),j(Kt,{"selected-category":m.value,categories:x.value,"scroll-offset":e.scrollOffset,"onUpdate:selectedCategory":R},null,8,["selected-category","categories","scroll-offset"]),j(pt,{class:"q-my-md"}),X("div",Ht,[X("div",Gt,[(M(!0),Z(ie,null,Se(D.value,Q=>(M(),Y(Dt,{key:Q.id,product:Q,color:y.value.backgroundColor,text:y.value.textColor,onAddToCart:g,onViewProduct:p},null,8,["product","color","text"]))),128))])]),l.value.length>ce?(M(),Y(Vt,{key:0,modelValue:B.value,"onUpdate:modelValue":[A[0]||(A[0]=Q=>B.value=Q),F],max:E.value,"boundary-numbers":"",class:"tw-py-8 tw-flex tw-justify-center tw-items-center !tw-gap-8",color:y.value.paginationColor,"text-color":y.value.paginationTextColor,"active-color":y.value.paginationActiveColor,"active-text-color":y.value.paginationActiveTextColor},null,8,["modelValue","max","color","text-color","active-color","active-text-color"])):Me("",!0),U.value?(M(),Y(ke,{key:1,class:"!tw-fixed !tw-bottom-12 !tw-right-4 !tw-p-2 tw-z-40",round:"",color:"white","text-color":"black",icon:"arrow_upward",onClick:F})):Me("",!0)]),_:1}))}});export{ta as default};
