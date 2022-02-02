(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{7496:function(e,n,t){"use strict";t.d(n,{UO:function(){return O},Mi:function(){return M},uf:function(){return I},Qh:function(){return _},Xc:function(){return A}});var i=t(5031),r=t(8554),a=t.n(r),o=t(4332),s=t(2748),l=t(7294);function u(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var d={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},h={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},m={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function p(e){var n;switch(null!=(n=null==e?void 0:e.direction)?n:"right"){case"right":return v;case"left":return f;case"bottom":return m;case"top":return h;default:return v}}var x={enter:{duration:.2,ease:d.easeOut},exit:{duration:.1,ease:d.easeIn}},y=function(e,n){return c({},e,{delay:(0,i.hj)(n)?n:null==n?void 0:n.enter})},g=function(e,n){return c({},e,{delay:(0,i.hj)(n)?n:null==n?void 0:n.exit})},b=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],E={exit:{height:{duration:.2,ease:d.ease},opacity:{duration:.3,ease:d.ease}},enter:{height:{duration:.3,ease:d.ease},opacity:{duration:.4,ease:d.ease}}},w={exit:function(e){var n,t,i=e.animateOpacity,r=e.startingHeight,a=e.transition,o=e.transitionEnd,s=e.delay;return c({},i&&{opacity:(t=r,null!=t&&parseInt(t.toString(),10)>0?1:0)},{overflow:"hidden",height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(n=null==a?void 0:a.exit)?n:g(E.exit,s)})},enter:function(e){var n,t=e.animateOpacity,i=e.endingHeight,r=e.transition,a=e.transitionEnd,o=e.delay;return c({},t&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(n=null==r?void 0:r.enter)?n:y(E.enter,o)})}},O=l.forwardRef((function(e,n){var t=e.in,r=e.unmountOnExit,d=e.animateOpacity,f=void 0===d||d,v=e.startingHeight,h=void 0===v?0:v,m=e.endingHeight,p=void 0===m?"auto":m,x=e.style,y=e.className,g=e.transition,E=e.transitionEnd,O=u(e,b),N=l.useState(!1),I=N[0],T=N[1];l.useEffect((function(){var e=setTimeout((function(){T(!0)}));return function(){return clearTimeout(e)}}),[]),(0,i.ZK)({condition:Boolean(h>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var k=parseFloat(h.toString())>0,_={startingHeight:h,endingHeight:p,animateOpacity:f,transition:I?g:{enter:{duration:0}},transitionEnd:a()(E,{enter:{overflow:"initial"},exit:r?void 0:{display:k?"block":"none"}})},C=!r||t,j=t||r?"enter":"exit";return l.createElement(o.M,{initial:!1,custom:_},C&&l.createElement(s.E.div,c({ref:n},O,{className:(0,i.cx)("chakra-collapse",y),style:c({overflow:"hidden",display:"block"},x),custom:_,variants:w,initial:!!r&&"exit",animate:j,exit:"exit"})))}));i.Ts&&(O.displayName="Collapse");var N=["unmountOnExit","in","className","transition","transitionEnd","delay"],I={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(e){var n,t=void 0===e?{}:e,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:1,transition:null!=(n=null==i?void 0:i.enter)?n:y(x.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(e){var n,t=void 0===e?{}:e,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:0,transition:null!=(n=null==i?void 0:i.exit)?n:g(x.exit,a),transitionEnd:null==r?void 0:r.exit}}}},T=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.className,d=e.transition,f=e.transitionEnd,v=e.delay,h=u(e,N),m=r||t?"enter":"exit",p=!t||r&&t,x={transition:d,transitionEnd:f,delay:v};return l.createElement(o.M,{custom:x},p&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-fade",a),custom:x},I,{animate:m},h)))}));i.Ts&&(T.displayName="Fade");var k=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],_={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(e){var n,t=e.reverse,i=e.initialScale,r=e.transition,a=e.transitionEnd,o=e.delay;return c({opacity:0},t?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:c({scale:i},null==a?void 0:a.exit)},{transition:null!=(n=null==r?void 0:r.exit)?n:g(x.exit,o)})},enter:function(e){var n,t=e.transitionEnd,i=e.transition,r=e.delay;return{opacity:1,scale:1,transition:null!=(n=null==i?void 0:i.enter)?n:y(x.enter,r),transitionEnd:null==t?void 0:t.enter}}}},C=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.reverse,d=void 0===a||a,f=e.initialScale,v=void 0===f?.95:f,h=e.className,m=e.transition,p=e.transitionEnd,x=e.delay,y=u(e,k),g=!t||r&&t,b=r||t?"enter":"exit",E={initialScale:v,reverse:d,transition:m,transitionEnd:p,delay:x};return l.createElement(o.M,{custom:E},g&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",h)},_,{animate:b,custom:E},y)))}));i.Ts&&(C.displayName="ScaleFade");var j=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],S={exit:{duration:.15,ease:d.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},P={exit:function(e){var n,t=e.direction,i=e.transition,r=e.transitionEnd,a=e.delay;return c({},p({direction:t}).exit,{transition:null!=(n=null==i?void 0:i.exit)?n:g(S.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(e){var n,t=e.direction,i=e.transitionEnd,r=e.transition,a=e.delay;return c({},p({direction:t}).enter,{transition:null!=(n=null==r?void 0:r.enter)?n:y(S.enter,a),transitionEnd:null==i?void 0:i.enter})}},M=l.forwardRef((function(e,n){var t=e.direction,r=void 0===t?"right":t,a=e.style,d=e.unmountOnExit,f=e.in,v=e.className,h=e.transition,m=e.transitionEnd,x=e.delay,y=u(e,j),g=p({direction:r}),b=Object.assign({position:"fixed"},g.position,a),E=!d||f&&d,w=f||d?"enter":"exit",O={transitionEnd:m,transition:h,direction:r,delay:x};return l.createElement(o.M,{custom:O},E&&l.createElement(s.E.div,c({},y,{ref:n,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:w,exit:"exit",custom:O,variants:P,style:b})))}));i.Ts&&(M.displayName="Slide");var D=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],A={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(e){var n,t=e.offsetX,i=e.offsetY,r=e.transition,a=e.transitionEnd,o=e.delay;return{opacity:0,x:t,y:i,transition:null!=(n=null==r?void 0:r.exit)?n:g(x.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(e){var n,t=e.transition,i=e.transitionEnd,r=e.delay;return{opacity:1,x:0,y:0,transition:null!=(n=null==t?void 0:t.enter)?n:y(x.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(e){var n,t=e.offsetY,i=e.offsetX,r=e.transition,a=e.transitionEnd,o=e.reverse,s=e.delay,l={x:i,y:t};return c({opacity:0,transition:null!=(n=null==r?void 0:r.exit)?n:g(x.exit,s)},o?c({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:c({},l,null==a?void 0:a.exit)})}}},F=l.forwardRef((function(e,n){var t=e.unmountOnExit,r=e.in,a=e.reverse,d=void 0===a||a,f=e.className,v=e.offsetX,h=void 0===v?0:v,m=e.offsetY,p=void 0===m?8:m,x=e.transition,y=e.transitionEnd,g=e.delay,b=u(e,D),E=!t||r&&t,w=r||t?"enter":"exit",O={offsetX:h,offsetY:p,reverse:d,transition:x,transitionEnd:y,delay:g};return l.createElement(o.M,{custom:O},E&&l.createElement(s.E.div,c({ref:n,className:(0,i.cx)("chakra-offset-slide",f),custom:O},A,{animate:w},b)))}));i.Ts&&(F.displayName="SlideFade")},5770:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return t(4632)}])},4632:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var i=t(5893),r=t(7294),a=[{id:1,question:"Will a beginner, with absolutely no knowledge of github, gain anything fruitful?",answer:"Yeah, definitely. The organization is meant to assist the beginners grow in the field of development. We\u2019ll have distinct projects appropriate both for beginners as well as the accolades and thereby we\u2019ll make sure that each and every participant gets to learn something new from the projects he or she is contributing for. "},{id:2,question:"Is there any registration fee?",answer:"No, there is no registration fees for participation. It is absolutely free of cost. "},{id:3,question:"Any age limit for participation?",answer:"No, there is no age limit for participation in GSSoC. It is open for all. "},{id:4,question:"How will we receive the prizes (if won) and certificate?",answer:"We\u2019ll be providing all the participants with the digital certificate. The prize money to all the concerned students will be sent to their bank accounts.We\u2019ll ask for the bank account details via an email after the conclusion of the event. "},{id:5,question:"By what time will the result come?",answer:"The results will be declared in the first week of June "},{id:6,question:"What minimum conditions should the project satisfy?",answer:"There are no such conditions that the projects need to satisfy. The mentors can propose the idea in any field that they specifically expertise in. "},{id:7,question:"Is it strictly for girls or can boys also participate?",answer:"GirlScript aims to assist anyone who is new in the field of development and it specifically supports an inclusive environment. Thereby GSSOC is open both for girls and for boys . Everyone can participate and contribute their part in the development of open source community and our initiative. "},{id:8,question:"Where do we start as a beginner to contribute properly in the projects?",answer:"We\u2019ll be providing you with the links on our official website to start with Github and various other development to make sure that everyone is able to aptly contribute for the projects. "},{id:9,question:"How will participants communicate with mentors and admins?",answer:"All communication will happen on the corresponding channel for the particular project in the official GSSOC \u201922 Discord server . "},{id:10,question:"How will I know that I am selected?",answer:"The participants will be notified through email and the invite to the Slack workspace will be sent to them. "},{id:11,question:"What is the criterion for selection as a participant?",answer:"This program is for beginners to get started with open source. The only criterion for selection are your dedication and enthusiasm to contribute to open source. "}],o=t(894),s=t(2846),l=t(7496),u=t(5031),c=t(6450);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function f(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function v(e,n,t){var i=e+1;return t&&i>=n&&(i=0),i}function h(e,n,t){var i=e-1;return t&&i<0&&(i=n),i}var m="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,p=function(){var e=this;this.descendants=new Map,this.register=function(n){var t;if(null!=n)return"object"==typeof(t=n)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?e.registerNode(n):function(t){e.registerNode(t,n)}},this.unregister=function(n){e.descendants.delete(n);var t=f(Array.from(e.descendants.keys()));e.assignIndex(t)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(n){e.descendants.forEach((function(e){var t=n.indexOf(e.node);e.index=t,e.node.dataset.index=e.index.toString()}))},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){return Array.from(e.descendants.values()).sort((function(e,n){return e.index-n.index}))},this.enabledValues=function(){return e.values().filter((function(e){return!e.disabled}))},this.item=function(n){if(0!==e.count())return e.values()[n]},this.enabledItem=function(n){if(0!==e.enabledCount())return e.enabledValues()[n]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var n=e.enabledValues().length-1;return e.enabledItem(n)},this.indexOf=function(n){var t,i;return n&&null!=(t=null==(i=e.descendants.get(n))?void 0:i.index)?t:-1},this.enabledIndexOf=function(n){return null==n?-1:e.enabledValues().findIndex((function(e){return e.node.isSameNode(n)}))},this.next=function(n,t){void 0===t&&(t=!0);var i=v(n,e.count(),t);return e.item(i)},this.nextEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=v(e.enabledIndexOf(i.node),e.enabledCount(),t);return e.enabledItem(r)}},this.prev=function(n,t){void 0===t&&(t=!0);var i=h(n,e.count()-1,t);return e.item(i)},this.prevEnabled=function(n,t){void 0===t&&(t=!0);var i=e.item(n);if(i){var r=h(e.enabledIndexOf(i.node),e.enabledCount()-1,t);return e.enabledItem(r)}},this.registerNode=function(n,t){if(n&&!e.descendants.has(n)){var i=f(Array.from(e.descendants.keys()).concat(n));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=d({node:n,index:-1},t);e.descendants.set(n,r),e.assignIndex(i)}}};var x=(0,c.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),y=x[0],g=x[1];var b=t(7375);function E(){return(E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var O=["onChange","defaultIndex","index","allowMultiple","allowToggle"],N=["isDisabled","isFocusable","id"],I=[y,function(){return g()},function(){return function(){var e=(0,r.useRef)(new p);return m((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=g(),t=(0,r.useState)(-1),i=t[0],a=t[1],o=(0,r.useRef)(null);m((function(){return function(){o.current&&n.unregister(o.current)}}),[]),m((function(){if(o.current){var e=Number(o.current.dataset.index);i==e||Number.isNaN(e)||a(e)}}));var s=e?n.register(e):n.register;return{descendants:n,index:i,enabledIndex:n.enabledIndexOf(o.current),register:(0,c.lq)(s,o)}}(e)}],T=I[0],k=I[2],_=I[3];function C(e){var n=e.onChange,t=e.defaultIndex,i=e.index,a=e.allowMultiple,o=e.allowToggle,s=w(e,O);!function(e){var n=e.index||e.defaultIndex,t=!(0,u.o8)(n)&&!(0,u.kJ)(n)&&e.allowMultiple;(0,u.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof n+","})}(e),function(e){(0,u.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var l=k(),c=(0,r.useState)(-1),d=c[0],f=c[1];(0,b.zq)((function(){f(-1)}));var v=(0,b.Tx)({value:i,defaultValue:function(){return a?null!=t?t:[]:null!=t?t:-1},onChange:n}),h=v[0],m=v[1];return{index:h,setIndex:m,htmlProps:s,getAccordionItemProps:function(e){var n=!1;null!==e&&(n=(0,u.kJ)(h)?h.includes(e):h===e);return{isOpen:n,onChange:function(n){if(null!==e)if(a&&(0,u.kJ)(h)){var t=n?(0,u.jX)(h,e):(0,u.cl)(h,e);m(t)}else n?m(e):o&&m(-1)}}},focusedIndex:d,setFocusedIndex:f,descendants:l}}var j=(0,c.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),S=j[0],P=j[1];function M(e){var n=e.isDisabled,t=e.isFocusable,i=e.id,a=w(e,N),o=P(),s=o.getAccordionItemProps,l=o.setFocusedIndex,d=(0,r.useRef)(null),f=(0,b.ZS)(i,"accordion-button","accordion-panel"),v=f[0],h=f[1];!function(e){(0,u.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var m=_({disabled:n&&!t}),p=m.register,x=m.index,y=m.descendants,g=s(-1===x?null:x),O=g.isOpen,I=g.onChange;!function(e){(0,u.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:O,isDisabled:n});var T=(0,r.useCallback)((function(){null==I||I(!O),l(x)}),[x,l,O,I]),k=(0,r.useCallback)((function(e){var n={ArrowDown:function(){var e=y.nextEnabled(x);e&&(0,u.T_)(e.node)},ArrowUp:function(){var e=y.prevEnabled(x);e&&(0,u.T_)(e.node)},Home:function(){var e=y.firstEnabled();e&&(0,u.T_)(e.node)},End:function(){var e=y.lastEnabled();e&&(0,u.T_)(e.node)}}[(0,u.uh)(e)];n&&(e.preventDefault(),n(e))}),[y,x]),C=(0,r.useCallback)((function(){l(x)}),[l,x]),j=(0,r.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),E({},e,{type:"button",ref:(0,c.lq)(p,d,t),id:v,disabled:!!n,"aria-expanded":!!O,"aria-controls":h,onClick:(0,u.v0)(e.onClick,T),onFocus:(0,u.v0)(e.onFocus,C),onKeyDown:(0,u.v0)(e.onKeyDown,k)})}),[v,n,O,T,C,k,h,p]),S=(0,r.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),E({},e,{ref:n,role:"region",id:h,"aria-labelledby":v,hidden:!O})}),[v,O,h]);return{isOpen:O,isDisabled:n,isFocusable:t,onOpen:function(){null==I||I(!0)},onClose:function(){null==I||I(!1)},getButtonProps:j,getPanelProps:S,htmlProps:a}}var D=["children","reduceMotion"],A=["htmlProps","descendants"],F=["htmlProps"],q=(0,s.Gp)((function(e,n){var t=e.children,i=e.reduceMotion,a=w(e,D),o=(0,s.jC)("Accordion",a),l=C((0,s.Lr)(a)),c=l.htmlProps,d=l.descendants,f=w(l,A),v=r.useMemo((function(){return E({},f,{reduceMotion:!!i})}),[f,i]);return r.createElement(T,{value:d},r.createElement(S,{value:v},r.createElement(s.Fo,{value:o},r.createElement(s.m$.div,E({ref:n},c,{className:(0,u.cx)("chakra-accordion",a.className)}),t))))}));u.Ts&&(q.displayName="Accordion");var H=(0,c.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),G=H[0],K=H[1],W=(0,s.Gp)((function(e,n){var t=e.children,i=e.className,a=M(e),o=a.htmlProps,l=w(a,F),c=E({},(0,s.yK)().container,{overflowAnchor:"none"}),d=r.useMemo((function(){return l}),[l]);return r.createElement(G,{value:d},r.createElement(s.m$.div,E({ref:n},o,{className:(0,u.cx)("chakra-accordion__item",i),__css:c}),(0,u.Pu)(t,{isExpanded:!!l.isOpen,isDisabled:!!l.isDisabled})))}));u.Ts&&(W.displayName="AccordionItem");var U=(0,s.Gp)((function(e,n){var t=(0,K().getButtonProps)(e,n),i=E({display:"flex",alignItems:"center",width:"100%",outline:0},(0,s.yK)().button);return r.createElement(s.m$.button,E({},t,{className:(0,u.cx)("chakra-accordion__button",e.className),__css:i}))}));u.Ts&&(U.displayName="AccordionButton");var R=(0,s.Gp)((function(e,n){var t=P().reduceMotion,i=K(),a=i.getPanelProps,o=i.isOpen,c=a(e,n),d=(0,u.cx)("chakra-accordion__panel",e.className),f=(0,s.yK)();t||delete c.hidden;var v=r.createElement(s.m$.div,E({},c,{__css:f.panel,className:d}));return t?v:r.createElement(l.UO,{in:o},v)}));u.Ts&&(R.displayName="AccordionPanel");var X=function(e){var n=K(),t=n.isOpen,i=n.isDisabled,a=P().reduceMotion,l=(0,u.cx)("chakra-accordion__icon",e.className),c=E({opacity:i?.4:1,transform:t?"rotate(-180deg)":void 0,transition:a?void 0:"transform 0.2s",transformOrigin:"center"},(0,s.yK)().icon);return r.createElement(o.JO,E({viewBox:"0 0 24 24","aria-hidden":!0,className:l,__css:c},e),r.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};u.Ts&&(X.displayName="AccordionIcon");var Y=t(8790),z=function(e){var n=e.question,t=e.answer,a=(0,r.useState)(!1);a[0],a[1];return(0,i.jsx)(q,{allowMultiple:!0,children:(0,i.jsxs)(W,{m:2,color:"orange",backgroundColor:"#1F2937",w:"container.sm",children:[(0,i.jsx)("h2",{children:(0,i.jsxs)(U,{children:[(0,i.jsx)(Y.xu,{flex:"1",textAlign:"left",children:n}),(0,i.jsx)(X,{})]})}),(0,i.jsx)(R,{pb:4,color:"white",children:t})]})})};function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var L=function(){var e=(0,r.useState)(a),n=e[0];return e[1],(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"flex flex-col items-center",children:[(0,i.jsx)("h1",{className:"flex flex-col text-orange-500 text-5xl font-bold m-3",children:"Frequently Asked Questions (FAQS)"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"flex flex-wrap w-85 justify-around gap-0",children:n.map((function(e){var n=e.id;return(0,i.jsx)(z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){B(e,n,t[n])}))}return e}({},e),n)}))})]})})}}},function(e){e.O(0,[527,774,888,179],(function(){return n=5770,e(e.s=n);var n}));var n=e.O();_N_E=n}]);