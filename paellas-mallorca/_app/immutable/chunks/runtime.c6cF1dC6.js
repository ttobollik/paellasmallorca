var gt=Array.isArray,At=Array.from,St=Object.defineProperty,an=Object.getOwnPropertyDescriptor,Bn=Object.getOwnPropertyDescriptors,Rt=Object.prototype,Ot=Array.prototype,Vn=Object.getPrototypeOf;const xt=()=>{};function Dt(n){return n()}function Gn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,vn=4,M=8,tn=16,m=32,$=64,x=128,B=256,p=512,S=1024,Y=2048,b=4096,j=8192,Kn=16384,pn=32768,kt=65536,$n=1<<18,hn=1<<19,on=Symbol("$state"),It=Symbol("legacy props"),Nt=Symbol("");function dn(n){return n===this.v}function Zn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yn(n){return!Zn(n,this.v)}function Wn(n){throw new Error("effect_in_teardown")}function zn(){throw new Error("effect_in_unowned_derived")}function Jn(n){throw new Error("effect_orphan")}function Qn(){throw new Error("effect_update_depth_exceeded")}function bt(){throw new Error("hydration_failed")}function Pt(n){throw new Error("props_invalid_value")}function Ct(){throw new Error("state_descriptors_fixed")}function Ft(){throw new Error("state_prototype_fixed")}function Xn(){throw new Error("state_unsafe_local_read")}function nt(){throw new Error("state_unsafe_mutation")}let Z=!1;function qt(){Z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:dn,version:0}}function Lt(n){return tt(rn(n))}function Mt(n,t=!1){var e;const r=rn(n);return t||(r.equals=yn),Z&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function tt(n){return o!==null&&o.f&E&&(T===null?ht([n]):T.push(n)),n}function Yt(n,t){return o!==null&&ln()&&o.f&(E|tn)&&(T===null||!T.includes(n))&&nt(),rt(n,t)}function rt(n,t){return n.equals(t)||(n.v=t,n.version=Ln(),En(n,S),ln()&&a!==null&&a.f&p&&!(a.f&m)&&(c!==null&&c.includes(n)?(g(a,S),z(a)):A===null?dt([n]):A.push(n))),t}function En(n,t){var r=n.reactions;if(r!==null)for(var e=ln(),s=r.length,l=0;l<s;l++){var u=r[l],i=u.f;i&S||!e&&u===a||(g(u,t),i&(p|x)&&(i&E?En(u,Y):z(u)))}}const jt=1,Ht=2,Ut=4,Bt=8,Vt=16,Gt=1,Kt=2,et="[",st="[!",lt="]",wn={},$t=Symbol();function Tn(n){console.warn("hydration_mismatch")}let O=!1;function Zt(n){O=n}let w;function F(n){if(n===null)throw Tn(),wn;return w=n}function Wt(){return F(D(w))}function zt(n){if(O){if(D(w)!==null)throw Tn(),wn;w=n}}function Jt(n=1){if(O){for(var t=n,r=w;t--;)r=D(r);w=r}}function Qt(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===lt){if(n===0)return t;n-=1}else(r===et||r===st)&&(n+=1)}var e=D(t);t.remove(),t=e}}var fn,mn,gn;function Xt(){if(fn===void 0){fn=window;var n=Element.prototype,t=Node.prototype;mn=an(t,"firstChild").get,gn=an(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function J(n=""){return document.createTextNode(n)}function Q(n){return mn.call(n)}function D(n){return gn.call(n)}function nr(n,t){if(!O)return Q(n);var r=Q(w);if(r===null)r=w.appendChild(J());else if(t&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function tr(n,t){if(!O){var r=Q(n);return r instanceof Comment&&r.data===""?D(r):r}return w}function rr(n,t=1,r=!1){let e=O?w:n;for(var s;t--;)s=e,e=D(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var u=J();return e===null?s==null||s.after(u):e.before(u),F(u),u}return F(e),e}function er(n){n.textContent=""}function ut(n){var t=E|S;a===null?t|=x:a.f|=hn;var r=o!==null&&o.f&E?o:null;const e={children:null,ctx:_,deps:null,equals:dn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??a};return r!==null&&(r.children??(r.children=[])).push(e),e}function sr(n){const t=ut(n);return t.equals=yn,t}function An(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?en(e):C(e)}}}function at(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function Sn(n){var t,r=a;K(at(n));try{An(n),t=Mn(n)}finally{K(r)}return t}function Rn(n){var t=Sn(n),r=(k||n.f&x)&&n.deps!==null?Y:p;g(n,r),n.equals(t)||(n.v=t,n.version=Ln())}function en(n){An(n),L(n,0),g(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function On(n){a===null&&o===null&&Jn(),o!==null&&o.f&x&&zn(),sn&&Wn()}function ot(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&$)!==0,l=a,u={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{_n(!0),W(u),u.f|=Kn}catch(f){throw C(u),f}finally{_n(i)}}else t!==null&&z(u);var y=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&hn)===0;if(!y&&!s&&e&&(l!==null&&ot(u,l),o!==null&&o.f&E)){var h=o;(h.children??(h.children=[])).push(u)}return u}function lr(n){const t=P(M,null,!1);return g(t,p),t.teardown=n,t}function ur(n){On();var t=a!==null&&(a.f&m)!==0&&_!==null&&!_.m;if(t){var r=_;(r.e??(r.e=[])).push({fn:n,effect:a,reaction:o})}else{var e=xn(n);return e}}function ar(n){return On(),it(n)}function or(n){const t=P($,n,!0);return()=>{C(t)}}function xn(n){return P(vn,n,!1)}function it(n){return P(M,n,!0)}function ir(n){return ft(n)}function ft(n,t=0){return P(M|tn|t,n,!0)}function fr(n,t=!0){return P(M|m,n,!0,t)}function Dn(n){var t=n.teardown;if(t!==null){const r=sn,e=o;cn(!0),G(null);try{t.call(null)}finally{cn(r),G(e)}}}function kn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)en(t[r])}}function In(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;C(r,t),r=e}}function _t(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||C(t),t=r}}function C(n,t=!0){var r=!1;if((t||n.f&$n)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}In(n,t&&!r),kn(n),L(n,0),g(n,j);var u=n.transitions;if(u!==null)for(const y of u)y.stop();Dn(n);var i=n.parent;i!==null&&i.first!==null&&Nn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Nn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function _r(n,t){var r=[];bn(n,r,!0),ct(r,()=>{C(n),t&&t()})}function ct(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function bn(n,t,r){if(!(n.f&b)){if(n.f^=b,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&pn)!==0||(e.f&m)!==0;bn(e,t,l?r:!1),e=s}}}function cr(n){Pn(n,!0)}function Pn(n,t){if(n.f&b){H(n)&&W(n),n.f^=b;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&pn)!==0||(r.f&m)!==0;Pn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let V=!1,X=[];function Cn(){V=!1;const n=X.slice();X=[],Gn(n)}function vr(n){V||(V=!0,queueMicrotask(Cn)),X.push(n)}function vt(){V&&Cn()}const Fn=0,pt=1;let U=Fn,q=!1,I=!1,sn=!1;function _n(n){I=n}function cn(n){sn=n}let R=[],N=0;let o=null;function G(n){o=n}let a=null;function K(n){a=n}let T=null;function ht(n){T=n}let c=null,d=0,A=null;function dt(n){A=n}let qn=0,k=!1,_=null;function Ln(){return++qn}function ln(){return!Z||_!==null&&_.l===null}function H(n){var u,i;var t=n.f;if(t&S)return!0;if(t&Y){var r=n.deps,e=(t&x)!==0;if(r!==null){var s;if(t&B){for(s=0;s<r.length;s++)((u=r[s]).reactions??(u.reactions=[])).push(n);n.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rn(l),e&&a!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(n))&&(l.reactions??(l.reactions=[])).push(n),l.version>n.version)return!0}}e||g(n,p)}return!1}function yt(n,t,r){throw n}function Mn(n){var un;var t=c,r=d,e=A,s=o,l=k,u=T,i=_,y=n.f;c=null,d=0,A=null,o=y&(m|$)?null:n,k=!I&&(y&x)!==0,T=null,_=n.ctx;try{var h=(0,n.fn)(),f=n.deps;if(c!==null){var v;if(L(n,d),f!==null&&d>0)for(f.length=d+c.length,v=0;v<c.length;v++)f[d+v]=c[v];else n.deps=f=c;if(!k)for(v=d;v<f.length;v++)((un=f[v]).reactions??(un.reactions=[])).push(n)}else f!==null&&d<f.length&&(L(n,d),f.length=d);return h}finally{c=t,d=r,A=e,o=s,k=l,T=u,_=i}}function Et(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&E&&(c===null||!c.includes(t))&&(g(t,Y),t.f&(x|B)||(t.f^=B),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Et(n,r[e])}function W(n){var t=n.f;if(!(t&j)){g(n,p);var r=a;a=n;try{t&tn?_t(n):In(n),kn(n),Dn(n);var e=Mn(n);n.teardown=typeof e=="function"?e:null,n.version=qn}catch(s){yt(s)}finally{a=r}}}function Yn(){N>1e3&&(N=0,Qn()),N++}function jn(n){var t=n.length;if(t!==0){Yn();var r=I;I=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var l=[];Hn(s,l),wt(l)}}finally{I=r}}}function wt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|b))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nn(e):e.fn=null))}}function Tt(){if(q=!1,N>1001)return;const n=R;R=[],jn(n),q||(N=0)}function z(n){U===Fn&&(q||(q=!0,queueMicrotask(Tt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&($|m)){if(!(r&p))return;t.f^=p}}R.push(t)}function Hn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,u=l&&(s&p)!==0;if(!u&&!(s&b))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&vn&&e.push(r);var y=r.next;if(y===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=y}for(var f=0;f<e.length;f++)i=e[f],t.push(i),Hn(i,t)}function Un(n){var t=U,r=R;try{Yn();const s=[];U=pt,R=s,q=!1,jn(r);var e=n==null?void 0:n();return vt(),(R.length>0||s.length>0)&&Un(),N=0,e}finally{U=t,R=r}}async function pr(){await Promise.resolve(),Un()}function hr(n){var f;var t=n.f,r=(t&E)!==0;if(r&&t&j){var e=Sn(n);return en(n),e}if(o!==null){T!==null&&T.includes(n)&&Xn();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&a!==null&&a.f&p&&!(a.f&m)&&A.includes(n)&&(g(a,S),z(a))}else if(r&&n.deps===null)for(var l=n,u=l.parent,i=l;u!==null;)if(u.f&E){var y=u;i=y,u=y.parent}else{var h=u;(f=h.deriveds)!=null&&f.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(l=n,H(l)&&Rn(l)),n.v}function dr(n){const t=o;try{return o=null,n()}finally{o=t}}const mt=~(S|Y|p);function g(n,t){n.f=n.f&mt|t}function yr(n,t=!1,r){_={p:_,c:null,e:null,m:!1,s:n,x:null,l:null},Z&&!t&&(_.l={s:null,u:null,r1:[],r2:rn(!1)})}function Er(n){const t=_;if(t!==null){n!==void 0&&(t.x=n);const u=t.e;if(u!==null){var r=a,e=o;t.e=null;try{for(var s=0;s<u.length;s++){var l=u[s];K(l.effect),G(l.reaction),xn(l.fn)}}finally{K(r),G(e)}}_=t.p,t.m=!0}return n||{}}function wr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&on in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=Vn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{w as $,Ut as A,m as B,yn as C,jt as D,Vt as E,Mt as F,ar as G,ur as H,_ as I,Gn as J,Dt as K,Nt as L,wr as M,yr as N,ir as O,Ht as P,Er as Q,$ as R,on as S,nr as T,$t as U,zt as V,lr as W,Wt as X,Q as Y,Gt as Z,Kt as _,Bn as a,J as a0,F as a1,St as a2,G as a3,o as a4,Xt as a5,et as a6,D as a7,wn as a8,Zt as a9,lt as aa,Tn as ab,bt as ac,er as ad,At as ae,or as af,fr as ag,xt as ah,ft as ai,st as aj,Qt as ak,cr as al,_r as am,pn as an,xn as ao,it as ap,vr as aq,Un as ar,pr as as,Lt as at,Zn as au,Ot as b,rn as c,Ct as d,qt as e,tr as f,Vn as g,O as h,Yt as i,an as j,hr as k,a as l,Ft as m,Jt as n,Rt as o,gt as p,Pt as q,kt as r,rr as s,K as t,Z as u,Bt as v,It as w,dr as x,ut as y,sr as z};