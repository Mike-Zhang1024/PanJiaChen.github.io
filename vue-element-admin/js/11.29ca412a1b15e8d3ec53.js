webpackJsonp([11,29],{298:function(t,e,n){var i=n(1)(n(562),n(763),null,null);t.exports=i.exports},352:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){return new s.default(function(e,n){c.default.create({baseURL:"https://api-prod",headers:{"X-Ivanka-Token":f.default.getters.token}})(t).then(function(i){var o=i.data;2e4!==o.code&&(console.log(t),(0,d.Message)({message:o.message,type:"error",duration:5e3}),50008!==o.code&&50014!==o.code&&50012!==o.code||((0,d.Message)({message:o.message,type:"error",duration:5e3}),f.default.dispatch("FedLogOut").then(function(){p.default.push({path:"/login"})})),n(o)),e(o)}).catch(function(t){(0,d.Message)({message:"发生异常错误,请刷新页面重试,或联系程序员",type:"error",duration:5e3}),console.log(t),n(t)})})}function r(t){return new s.default(function(e,n){c.default.create({timeout:2e3})(t).then(function(t){e(t.data)}).catch(function(t){(0,d.Message)({message:"发生异常错误,请刷新页面重试,或联系程序员",type:"error",duration:5e3}),console.log(t),n(t)})})}Object.defineProperty(e,"__esModule",{value:!0});var a=n(22),s=i(a);e.default=o,e.fetch=r;var l=n(59),c=i(l),d=n(60),u=n(32),f=i(u),h=n(31),p=i(h)},458:function(t,e,n){"use strict";function i(){return(0,r.fetch)({url:"/article/list",method:"get"})}function o(){return(0,r.fetch)({url:"/article/detail",method:"get"})}Object.defineProperty(e,"__esModule",{value:!0}),e.getList=i,e.getArticle=o;var r=n(352)},489:function(t,e,n){t.exports={default:n(490),__esModule:!0}},490:function(t,e,n){n(63),n(62),t.exports=n(491)},491:function(t,e,n){var i=n(8),o=n(111);t.exports=n(7).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},555:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(489),r=i(o),a=n(770),s=i(a);e.default={name:"twoDndList",components:{draggable:s.default},computed:{filterList2:function(){var t=this;return this.list2.filter(function(e){return!!t.isNotInList1(e)&&e})}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(e){return t.id!==e.id})},isNotInList2:function(t){return this.list2.every(function(e){return t.id!==e.id})},deleteEle:function(t){var e=!0,n=!1,i=void 0;try{for(var o,a=(0,r.default)(this.list1);!(e=(o=a.next()).done);e=!0){var s=o.value;if(s.id===t.id){var l=this.list1.indexOf(s);this.list1.splice(l,1);break}}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){this.list1.push(t)}}}},562:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(719),r=i(o),a=n(458);e.default={components:{DndList:r.default},data:function(){return{list1:[],list2:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,(0,a.getList)(this.listQuery).then(function(e){t.list1=e.data.splice(0,5),t.list2=e.data,console.log(t.list1,t.list2)})}}}},607:function(t,e,n){e=t.exports=n(289)(),e.push([t.i,'.twoDndList[data-v-1361f327]{background:#fff;padding-bottom:40px}.twoDndList[data-v-1361f327]:after{content:"";display:table;clear:both}.twoDndList .twoDndList-list[data-v-1361f327]{float:left;padding-bottom:30px}.twoDndList .twoDndList-list[data-v-1361f327]:first-of-type{margin-right:2%}.twoDndList .twoDndList-list .dragArea[data-v-1361f327]{margin-top:15px;min-height:50px;padding-bottom:30px}.list-complete-item[data-v-1361f327]{cursor:pointer;position:relative;font-size:14px;padding:5px 12px;margin-top:4px;border:1px solid #bfcbd9;transition:all 1s}.list-complete-item-handle[data-v-1361f327]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:50px}.list-complete-item-handle2[data-v-1361f327]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:20px}.list-complete-item.sortable-chosen[data-v-1361f327]{background:#4ab7bd}.list-complete-item.sortable-ghost[data-v-1361f327]{background:#30b08f}.list-complete-enter[data-v-1361f327],.list-complete-leave-active[data-v-1361f327]{opacity:0}',"",{version:3,sources:["/./src/components/twoDndList/index.vue"],names:[],mappings:"AACA,6BACE,gBAAiB,AACjB,mBAAqB,CACtB,AACD,mCACI,WAAY,AACZ,cAAe,AACf,UAAY,CACf,AACD,8CACI,WAAY,AACZ,mBAAqB,CACxB,AACD,4DACM,eAAiB,CACtB,AACD,wDACM,gBAAiB,AACjB,gBAAiB,AACjB,mBAAqB,CAC1B,AACD,qCACE,eAAgB,AAChB,kBAAmB,AACnB,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,4CACE,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,6CACE,gBAAiB,AACjB,uBAAwB,AACxB,mBAAoB,AACpB,iBAAmB,CACpB,AACD,qDACE,kBAAoB,CACrB,AACD,oDACE,kBAAoB,CACrB,AACD,mFACE,SAAW,CACZ",file:"index.vue",sourcesContent:['\n.twoDndList[data-v-1361f327] {\n  background: #fff;\n  padding-bottom: 40px;\n}\n.twoDndList[data-v-1361f327]:after {\n    content: "";\n    display: table;\n    clear: both;\n}\n.twoDndList .twoDndList-list[data-v-1361f327] {\n    float: left;\n    padding-bottom: 30px;\n}\n.twoDndList .twoDndList-list[data-v-1361f327]:first-of-type {\n      margin-right: 2%;\n}\n.twoDndList .twoDndList-list .dragArea[data-v-1361f327] {\n      margin-top: 15px;\n      min-height: 50px;\n      padding-bottom: 30px;\n}\n.list-complete-item[data-v-1361f327] {\n  cursor: pointer;\n  position: relative;\n  font-size: 14px;\n  padding: 5px 12px;\n  margin-top: 4px;\n  border: 1px solid #bfcbd9;\n  transition: all 1s;\n}\n.list-complete-item-handle[data-v-1361f327] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 50px;\n}\n.list-complete-item-handle2[data-v-1361f327] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.list-complete-item.sortable-chosen[data-v-1361f327] {\n  background: #4AB7BD;\n}\n.list-complete-item.sortable-ghost[data-v-1361f327] {\n  background: #30B08F;\n}\n.list-complete-enter[data-v-1361f327], .list-complete-leave-active[data-v-1361f327] {\n  opacity: 0;\n}\n'],sourceRoot:"webpack://"}])},662:function(t,e,n){var i=n(607);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(290)("6af92c45",i,!0)},699:function(t,e,n){var i,o;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";i=r,void 0!==(o="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=o)}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=C({},e),t[W]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var i in n)!(i in e)&&(e[i]=n[i]);at(e);for(var o in this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Q,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),ot.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),w&&w.state!==e&&(l(w,"display",e?"none":""),e||w.state&&(t.options.group.revertClone?(B.insertBefore(w,T),t._animate(y,w)):B.insertBefore(w,y)),w.state=e)}function n(t,e,n){if(t){n=n||H;do if(">*"===e&&t.parentNode===n||m(t,e))return t;while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,J)}function a(t,e,n){t.removeEventListener(e,n,J)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace($," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace($," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return H.defaultView&&H.defaultView.getComputedStyle?n=H.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function c(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,r,a){t=t||e[W];var s=H.createEvent("Event"),l=t.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=w,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[c]&&l[c].call(t,s)}function u(t,e,n,i,o,r,a){var s,l,c=t[W],d=c.options.onMove;return s=H.createEvent("Event"),s.initEvent("move",!0,!0),s.to=e,s.from=t,s.dragged=n,s.draggedRect=i,s.related=o||e,s.relatedRect=r||e.getBoundingClientRect(),t.dispatchEvent(s),d&&(l=d.call(c,s,a)),l}function f(t){t.draggable=!1}function h(){tt=!1}function p(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return(e.clientY-(i.top+i.height)>5||e.clientX-(i.right+i.width)>5)&&n}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function v(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!m(t,e)||n++;return n}function m(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function A(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function C(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function b(t){return Z?Z(t).clone(!0)[0]:G&&G.dom?G.dom(t).cloneNode(!0):t.cloneNode(!0)}function _(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&it.push(i)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var y,D,x,w,B,T,E,S,L,k,I,M,O,N,P,R,Y,X,F,j,U={},$=/\s+/g,V=/left|right|inline/,W="Sortable"+(new Date).getTime(),q=window,H=q.document,z=q.parseInt,Z=q.jQuery||q.Zepto,G=q.Polymer,J=!1,Q=!!("draggable"in H.createElement("div")),K=function(t){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(t=H.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),tt=!1,et=Math.abs,nt=Math.min,it=[],ot=[],rt=A(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[W],d=e.scrollSensitivity,u=e.scrollSpeed,f=t.clientX,h=t.clientY,p=window.innerWidth,g=window.innerHeight;if(L!==n&&(S=e.scroll,L=n,k=e.scrollFn,S===!0)){S=n;do if(S.offsetWidth<S.scrollWidth||S.offsetHeight<S.scrollHeight)break;while(S=S.parentNode)}S&&(i=S,o=S.getBoundingClientRect(),r=(et(o.right-f)<=d)-(et(o.left-f)<=d),a=(et(o.bottom-h)<=d)-(et(o.top-h)<=d)),r||a||(r=(p-f<=d)-(f<=d),a=(g-h<=d)-(h<=d),(r||a)&&(i=q)),U.vx===r&&U.vy===a&&U.el===i||(U.el=i,U.vx=r,U.vy=a,clearInterval(U.pid),i&&(U.pid=setInterval(function(){if(l=a?a*u:0,s=r?r*u:0,"function"==typeof k)return k.call(c,s,l,t);i===q?q.scrollTo(q.pageXOffset+s,q.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),at=function(t){function e(t,e){return void 0!==t&&t!==!0||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],c=(l||t).target,u=t.target.shadowRoot&&t.path[0]||c,f=r.filter;if(_(o),!y&&!("mousedown"===s&&0!==t.button||r.disabled)&&(c=n(c,r.draggable,o))&&E!==c){if(e=v(c,r.draggable),"function"==typeof f){if(f.call(this,t,c,this))return d(i,u,"filter",c,o,e),void(a&&t.preventDefault())}else if(f&&(f=f.split(",").some(function(t){if(t=n(u,t.trim(),o))return d(i,t,"filter",c,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(u,r.handle,o)||this._prepareDragStart(t,l,c,e)}},_prepareDragStart:function(t,e,n,i){var o,a=this,l=a.el,u=a.options,h=l.ownerDocument;n&&!y&&n.parentNode===l&&(X=t,B=l,y=n,D=y.parentNode,T=y.nextSibling,E=n,R=u.group,N=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,y.style["will-change"]="transform",o=function(){a._disableDelayedDrag(),y.draggable=a.nativeDraggable,s(y,u.chosenClass,!0),a._triggerDragStart(t,e),d(a,B,"choose",y,B,N)},u.ignore.split(",").forEach(function(t){c(y,t.trim(),f)}),r(h,"mouseup",a._onDrop),r(h,"touchend",a._onDrop),r(h,"touchcancel",a._onDrop),r(h,"pointercancel",a._onDrop),r(h,"selectstart",a),u.delay?(r(h,"mouseup",a._disableDelayedDrag),r(h,"touchend",a._disableDelayedDrag),r(h,"touchcancel",a._disableDelayedDrag),r(h,"mousemove",a._disableDelayedDrag),r(h,"touchmove",a._disableDelayedDrag),r(h,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(o,u.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(X={target:y,clientX:e.clientX,clientY:e.clientY},this._onDragStart(X,"touch")):this.nativeDraggable?(r(y,"dragend",this),r(B,"dragstart",this._onDragStart)):this._onDragStart(X,!0);try{H.selection?setTimeout(function(){H.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(B&&y){var e=this.options;s(y,e.ghostClass,!0),s(y,e.dragClass,!1),t.active=this,d(this,B,"start",y,B,N)}else this._nulling()},_emulateDragOver:function(){if(F){if(this._lastX===F.clientX&&this._lastY===F.clientY)return;this._lastX=F.clientX,this._lastY=F.clientY,K||l(x,"display","none");var t=H.elementFromPoint(F.clientX,F.clientY),e=t,n=ot.length;if(e)do{if(e[W]){for(;n--;)ot[n]({clientX:F.clientX,clientY:F.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);K||l(x,"display","")}},_onTouchMove:function(e){if(X){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-X.clientX+o.x,s=r.clientY-X.clientY+o.y,c=e.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!t.active){if(i&&nt(et(r.clientX-this._lastX),et(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),j=!0,F=r,l(x,"webkitTransform",c),l(x,"mozTransform",c),l(x,"msTransform",c),l(x,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!x){var t,e=y.getBoundingClientRect(),n=l(y),i=this.options;x=y.cloneNode(!0),s(x,i.ghostClass,!1),s(x,i.fallbackClass,!0),s(x,i.dragClass,!0),l(x,"top",e.top-z(n.marginTop,10)),l(x,"left",e.left-z(n.marginLeft,10)),l(x,"width",e.width),l(x,"height",e.height),l(x,"opacity","0.8"),l(x,"position","fixed"),l(x,"zIndex","100000"),l(x,"pointerEvents","none"),i.fallbackOnBody&&H.body.appendChild(x)||B.appendChild(x),t=x.getBoundingClientRect(),l(x,"width",2*e.width-t.width),l(x,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),R.checkPull(this,this,y,t)&&(w=b(y),w.draggable=!1,w.style["will-change"]="",l(w,"display","none"),s(w,this.options.chosenClass,!1),B.insertBefore(w,y),d(this,B,"clone",y)),s(y,i.dragClass,!0),e?("touch"===e?(r(H,"touchmove",this._onTouchMove),r(H,"touchend",this._onDrop),r(H,"touchcancel",this._onDrop),r(H,"pointermove",this._onTouchMove),r(H,"pointerup",this._onDrop)):(r(H,"mousemove",this._onTouchMove),r(H,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,y)),r(H,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var o,r,a,s,c=this.el,d=this.options,f=d.group,g=t.active,v=R===f,m=!1,A=d.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!d.dragoverBubble&&i.stopPropagation()),!y.animated&&(j=!0,g&&!d.disabled&&(v?A||(s=!B.contains(y)):Y===this||(g.lastPullMode=R.checkPull(this,g,y,i))&&f.checkPut(this,g,y,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(rt(i,d,this.el),tt)return;if(o=n(i.target,d.draggable,c),r=y.getBoundingClientRect(),Y!==this&&(Y=this,m=!0),s)return e(g,!0),D=B,void(w||T?B.insertBefore(y,w||T):A||B.appendChild(y));if(0===c.children.length||c.children[0]===x||c===i.target&&(o=p(c,i))){if(o){if(o.animated)return;a=o.getBoundingClientRect()}e(g,v),u(B,c,y,r,o,a,i)!==!1&&(y.contains(c)||(c.appendChild(y),D=c),this._animate(r,y),o&&this._animate(a,o))}else if(o&&!o.animated&&o!==y&&void 0!==o.parentNode[W]){I!==o&&(I=o,M=l(o),O=l(o.parentNode)),a=o.getBoundingClientRect();var C=a.right-a.left,b=a.bottom-a.top,_=V.test(M.cssFloat+M.display)||"flex"==O.display&&0===O["flex-direction"].indexOf("row"),E=o.offsetWidth>y.offsetWidth,S=o.offsetHeight>y.offsetHeight,L=(_?(i.clientX-a.left)/C:(i.clientY-a.top)/b)>.5,k=o.nextElementSibling,N=u(B,c,y,r,o,a,i),P=!1;if(N!==!1){if(tt=!0,setTimeout(h,30),e(g,v),1===N||N===-1)P=1===N;else if(_){var X=y.offsetTop,F=o.offsetTop;P=X===F?o.previousElementSibling===y&&!E||L&&E:o.previousElementSibling===y||y.previousElementSibling===o?(i.clientY-a.top)/b>.5:F>X}else m||(P=k!==y&&!S||L&&S);y.contains(c)||(P&&!k?c.appendChild(y):o.parentNode.insertBefore(y,P?k:o)),D=y.parentNode,this._animate(r,y),this._animate(a,o)}}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(H,"touchmove",this._onTouchMove),a(H,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(U.pid),clearTimeout(this._dragStartTimer),a(H,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(H,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(j&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),x&&x.parentNode.removeChild(x),B!==D&&"clone"===t.active.lastPullMode||w&&w.parentNode.removeChild(w),y&&(this.nativeDraggable&&a(y,"dragend",this),f(y),y.style["will-change"]="",s(y,this.options.ghostClass,!1),s(y,this.options.chosenClass,!1),B!==D?(P=v(y,i.draggable))>=0&&(d(null,D,"add",y,B,N,P),d(this,B,"remove",y,B,N,P),d(null,D,"sort",y,B,N,P),d(this,B,"sort",y,B,N,P)):y.nextSibling!==T&&(P=v(y,i.draggable))>=0&&(d(this,B,"update",y,B,N,P),d(this,B,"sort",y,B,N,P)),t.active&&(null!=P&&P!==-1||(P=N),d(this,B,"end",y,B,N,P),this.save()))),this._nulling()},_nulling:function(){B=y=D=x=T=w=E=S=L=X=F=j=P=I=M=Y=R=t.active=null,it.forEach(function(t){t.checked=!0}),it.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":y&&(this._onDragOver(t),o(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&at(n)},destroy:function(){var t=this.el;t[W]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),ot.splice(ot.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},r(H,"touchmove",function(e){t.active&&e.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J={capture:!1,passive:!1}}}))}catch(t){}return t.utils={on:r,off:a,css:l,find:c,is:function(t,e){return!!n(t,e,t)},extend:C,throttle:A,closest:n,toggleClass:s,clone:b,index:v},t.create=function(e,n){return new t(e,n)},t.version="1.5.1",t})},719:function(t,e,n){n(662);var i=n(1)(n(555),n(729),"data-v-1361f327",null);t.exports=i.exports},729:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twoDndList"},[n("div",{staticClass:"twoDndList-list",style:{width:t.width1}},[n("h3",[t._v(t._s(t.list1Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(e){return n("div",{staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle"},[t._v("["+t._s(e.author)+"] "+t._s(e.title))]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"0px"}},[n("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(n){t.deleteEle(e)}}},[n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),n("div",{staticClass:"twoDndList-list",style:{width:t.width2}},[n("h3",[t._v(t._s(t.list2Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.filterList2,options:{group:"article"}}},t._l(t.filterList2,function(e){return n("div",{staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle2",on:{click:function(n){t.pushEle(e)}}},[t._v(" ["+t._s(e.author)+"] "+t._s(e.title))])])}))],1)])},staticRenderFns:[]}},763:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[n("code",[t._v("拖拽https://github.com/SortableJS/Vue.Draggable 项目：Vue.Draggable")]),t._v(" "),n("div",{staticClass:"editor-container"},[n("DndList",{attrs:{list1:t.list1,list2:t.list2,list1Title:"头条列表",list2Title:"文章池"}})],1)])},staticRenderFns:[]}},770:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){n<t.children.length?t.insertBefore(e,t.children[n]):t.appendChild(e)}function r(t,e){return t.map(function(t){return t.elm}).indexOf(e)}function a(t,e){return t?Array.prototype.map.call(e,function(e){return r(t,e)}):[]}function s(t,e){this.$emit(t.toLowerCase(),e)}function l(t){var e=this;return function(n){null!==e.list&&e["onDrag"+t](n),s.call(e,t,n)}}var c=["Start","Add","Remove","Update","End"],d=["Choose","Sort","Filter","Clone"],u=["Move"].concat(c,d).map(function(t){return"on"+t}),f=null;return{props:{options:Object,list:{type:Array,required:!1,default:null},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null}},data:function(){return{transitionMode:!1}},render:function(t){if(this.$slots.default&&1===this.$slots.default.length){var e=this.$slots.default[0];e.componentOptions&&"transition-group"===e.componentOptions.tag&&(this.transitionMode=!0)}return t(this.element,null,this.$slots.default)},mounted:function(){var e=this,n={};c.forEach(function(t){n["on"+t]=l.call(e,t)}),d.forEach(function(t){n["on"+t]=s.bind(e,t)});var i=o({},this.options,n,{onMove:function(t){return e.onDragMove(t)}});this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return null!==this.options&&null!==this.options.group&&"clone"===this.options.group.pull}},watch:{options:function(t){for(var e in t)u.indexOf(e)==-1&&this._sortable.option(e,t[e])},list:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=a(t.getChildrenNodes(),t.rootContainer.children)})},getUnderlyingVm:function(t){var e=r(this.getChildrenNodes(),t);return{index:e,element:this.list[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},spliceList:function(){var t;(t=this.list).splice.apply(t,arguments)},updatePosition:function(t,e){this.list.splice(e,0,this.list.splice(t,1)[0])},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.list,a={list:r,component:i};return e!==n&&r&&i.getUnderlyingVm?o(i.getUnderlyingVm(n),a):a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),f=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)return void e(t.clone);var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.emitChanges({removed:o})},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return n.indexOf(f)!=-1?r:r+1},onDragMove:function(t){var e=this.move;if(!e||!this.list)return!0;var n=this.getRelatedContextFromMoveEvent(t),i=this.context;return o(i,{futureIndex:this.computeFutureIndex(n,t)}),o(t,{relatedContext:n,draggedContext:i}),e(t)},onDragEnd:function(t){this.computeIndexes(),f=null}}}}var r=n(699);t.exports=e(r)}()}});
//# sourceMappingURL=11.29ca412a1b15e8d3ec53.js.map