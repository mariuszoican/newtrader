(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={main:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/front/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},3840:function(e,t,n){e.exports=n.p+"img/diamond_locked.png"},"433f":function(e,t,n){e.exports=n.p+"img/diamond.png"},"475a":function(e,t,n){e.exports=n.p+"img/silver_locked.png"},"4e4b":function(e,t,n){e.exports=n.p+"img/platinum_locked.png"},5570:function(e,t,n){e.exports=n.p+"img/platinum.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{app:""}},[e.$store.getters.tradingAllowed()&&!e.$store.state.training?n("trade-allowed-dialog"):e._e(),e.$store.getters.showPredictionDlg()?n("prediction-dlg"):e._e(),e.$store.state.gamified?n("div",{},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__bounce animate__slow","leave-active-class":"animate__animated animate__fadeOutTopRight animate__slow"}},[e.isAwardGiven?n("award-given-block",{attrs:{awardGiven:e.awardGiven}}):e._e()],1)],1):e._e(),e.$store.state.training?n("v-system-bar",{staticClass:"d-flex justify-center",attrs:{app:"",dark:"",color:"red ",height:"30"}},[n("div",{staticClass:"text-center"},[n("b",[e._v("TRAINING ROUND")])])]):e._e(),e._e(),n("top-bar"),n("v-main",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{app:""}},[n("v-row",{staticStyle:{height:"calc(100%)"}},[n("market",{attrs:{name:"A"}}),n("market",{attrs:{name:"B"}})],1)],1),e.$store.state.gamified?e._e():n("i-bottom-bar")],1)},i=[],o=n("1da1"),c=n("5530"),s=(n("96cf"),n("d3b7"),n("ddb0"),n("b680"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{value:!0,dark:!1,opacity:0,"z-index":"10000"}},[n("div",{staticClass:"d-flex flex-column justify-center align-center"},[n("v-card",{attrs:{elevation:"3",width:"600"}},[n("v-card-title",{staticClass:"text-h5 mb-1 red white--text d-flex align-center justify-center text-center"},[e._v(" "+e._s(e.awardGiven.header)+" ")]),n("v-card-text",[n("v-img",{staticClass:"my-3",attrs:{contain:"",src:e.awardGiven.gif}}),n("h3",{staticClass:"text-center"},[e._v(e._s(e.awardGiven.message))])],1)],1)],1)])}),l=[],u={props:["awardGiven"],data:function(){return{}},mounted:function(){},methods:{}},d=u,f=n("2877"),m=n("6544"),p=n.n(m),v=n("b0af"),h=n("99d9"),g=n("adda"),b=n("a797"),k=Object(f["a"])(d,s,l,!1,null,null,null),w=k.exports;p()(k,{VCard:v["a"],VCardText:h["b"],VCardTitle:h["c"],VImg:g["a"],VOverlay:b["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"6","fill-height":""}},[n("div",{staticClass:"flex-grow-0 flex-shrink-0 text-h4",attrs:{id:"btns"}},[n("div",{staticClass:"my-3 font-weight-bold text-center"},[e._v("Stock "+e._s(e.name))]),n("pill",{attrs:{label:"Current price",value:e.market.currentPrice}})],1),n("div",{ref:"chartWrapper",staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{},attrs:{id:"chart"}},[n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],style:{height:e.chartHeight+"px"}},[n("highcharts",{ref:"priceGraph",staticClass:"hc",attrs:{constructorType:"stockChart",options:e.chartOptions,updateArgs:[!0,!0,!0]}})],1)]),n("div",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{id:"btns"}},[n("buy-sell-bar",{attrs:{market:e.market},on:{sell:e.sellClicked,buy:e.buyClicked}})],1),n("div",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{id:"btns"}},[n("info-bar",{attrs:{market:e.market}})],1)])},T=[],C=n("2909"),O=(n("99af"),n("cb29"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("pill",{attrs:{label:"Position",value:e.market.shares}})],1),n("v-col",[n("v-btn",{attrs:{color:e.colorBuy,disabled:!e.btnEnabled("buy")},on:{click:e.buy}},[e._v("Buy")])],1),n("v-col",[n("v-btn",{attrs:{color:e.colorSell,disabled:!e.btnEnabled("sell")},on:{click:e.sell}},[e._v("Sell")])],1)],1)}),E=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"mx-1   ",attrs:{outlined:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.label)+": ")])],1),n("v-list-item-action",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.value)+" ")])],1)],1)},x=[],y={props:["value","label"],data:function(){return{}},methods:{}},P=y,j=n("da13"),R=n("1800"),I=n("5d23"),D=n("8dd9"),M=Object(f["a"])(P,S,x,!1,null,null,null),N=M.exports;p()(M,{VListItem:j["a"],VListItemAction:R["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VSheet:D["a"]});var V=n("2f62"),U={props:["market"],components:{Pill:N},data:function(){return{}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["c"])(["isTransactionAllowed"])),Object(V["e"])(["gamified"])),{},{colorSell:function(){return this.gamified?"red":""},colorBuy:function(){return this.gamified?"green":""}}),methods:{btnEnabled:function(e){return this.isTransactionAllowed(this.market.name,e)},sell:function(){this.$emit("sell")},buy:function(){this.$emit("buy")}}},G=U,B=n("8336"),$=n("62ad"),H=n("0fd9"),L=Object(f["a"])(G,O,E,!1,null,null,null),Y=L.exports;p()(L,{VBtn:B["a"],VCol:$["a"],VRow:H["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("pill",{attrs:{label:" Purchase price",value:null!==e.market.purchasePrice?e.market.purchasePrice:"NA"}})],1),n("v-col",[n("pill",{attrs:{label:"Profit",value:null!==e.market.profit?e.market.profit:"NA"}})],1)],1)},W=[],z=n("2ef0"),F=n.n(z),q={props:["market"],components:{Pill:N},data:function(){return{}},methods:{}},J=q,X=Object(f["a"])(J,K,W,!1,null,null,null),Q=X.exports;p()(X,{VCol:$["a"],VRow:H["a"]});var Z=n("4452"),ee=n.n(Z),te={components:{highcharts:Z["Chart"],BuySellBar:Y,InfoBar:Q,Pill:N},props:["name"],data:function(){var e=[100].concat(Object(C["a"])(_.fill(Array(10),null)));return{chartHeight:0,prices:[],xAxis:{min:(new Date).getTime()},tickFrequency:window.tick_frequency,rawData:e,chartOptions:{chart:{events:{load:function(e){}}},events:{load:function(e){return function(){e.chart=this}}(this)},time:{useUTC:!1},rangeSelector:{enabled:!0,inputEnabled:!1,buttons:[{type:"second",count:10,text:"10s"},{type:"all",text:"All",title:"View all"}],selected:0},navigator:{enabled:!1},credits:{enabled:!1},series:[{type:"line",pointStart:(new Date).getTime(),pointInterval:1e3,name:"Stock price",data:e}]},onPause:!1}},watch:{"market.currentPrice":function(e){var t=e,n=this.$refs.priceGraph.chart.series[0];if(this.counter<this.rawData.length){var a=n.data[this.counter],r=a.x;a.y;this.$refs.priceGraph.chart.series[0].removePoint(this.counter,!1),t={x:r,y:e}}this.$refs.priceGraph.chart.series[0].addPoint(t,!1,!1,!0),this.$refs.priceGraph.chart.redraw()}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["e"])(["counter"])),Object(V["c"])(["getMarket"])),{},{market:function(){return this.getMarket(this.name)}}),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.onResize();case 1:case"end":return t.stop()}}),t)})))()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["d"])(["SET_MARKET_PROPERTY"])),Object(V["b"])(["setPrice","purchase","sell"])),{},{onResize:function(){var e=this;this.chartHeight=this.$refs.chartWrapper.clientHeight-50,this.$nextTick((function(){e.$refs.priceGraph.chart.setSize(null,e.chartHeight),e.$refs.priceGraph.chart.reflow()}))},sellClicked:function(){this.sell({market:this.name})},buyClicked:function(){this.purchase({market:this.name})}})},ne=te,ae=n("269a"),re=n.n(ae),ie=n("dc22"),oe=Object(f["a"])(ne,A,T,!1,null,null,null),ce=oe.exports;p()(oe,{VCol:$["a"]}),re()(oe,{Resize:ie["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"","clipped-left":"",height:"100"},scopedSlots:e._u([{key:"extension",fn:function(){return[n("timer",{attrs:{"what-to-do":"allowExitPermission","progress-message":"","show-progress":!0,"timer-finish":"You may leave the chat now or continue for as long as you like.",color:"blue"}})]},proxy:!0}])},[n("monitor"),n("instructions-dialog"),n("pill",{attrs:{label:"Cash",value:"$"+e.$store.state.cash}}),n("pill",{attrs:{label:"Round",value:e.getRoundInfo()}}),e._e(),n("pill",{attrs:{label:"N. transactions",value:e.nTransactions()()}}),e.gamified?n("v-spacer"):e._e(),n("div",{staticClass:"flex-grow-0 flex-shrink-0 d-flex align-center",staticStyle:{height:"100%"}},[e.gamified?n("award-block"):e._e(),e._e()],1)],1)},le=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mx-1",attrs:{color:"green white--text",small:""}},"v-btn",r,!1),a),[e._v(" Instructions ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Instructions ")]),n("v-card-text",{staticClass:"text-left",domProps:{innerHTML:e._s(e.instructions)}}),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.closeDialog}},[e._v(" Close ")])],1)],1)],1)],1)},de=[],fe={data:function(){return{dialog:!1,instructions:document.getElementById("instructions").innerHTML}},methods:{closeDialog:function(){this.dialog=!1}}},me=fe,pe=n("169a"),ve=n("ce7e"),he=n("2fa4"),ge=Object(f["a"])(me,ue,de,!1,null,null,null),be=ge.exports;p()(ge,{VBtn:B["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:pe["a"],VDivider:ve["a"],VSpacer:he["a"]});var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("countdown",{ref:"tickTimer",style:{width:"100%"},attrs:{autoStart:!0,leftTime:e.tickFrequency,speed:100},on:{finish:function(t){return e.toDo()}},scopedSlots:e._u([{key:"process",fn:function(t){var a=t.timeObj;return[n("v-progress-linear",{attrs:{width:"100%",height:"15px",color:e.color,value:a.leftTime/e.tickFrequency*100}})]}}])})},we=[],_e=1e3,Ae={name:"Timer",props:{progressMessage:String,whatToDo:String,color:String,timerFinish:String,showProgress:{type:Boolean,default:!0}},data:function(){return{tickFrequency:window.tickFrequency*_e}},computed:Object(c["a"])({},Object(V["e"])(["pause"])),watch:{pause:function(e){!0===e?this.$refs.tickTimer.stopCountdown():this.$refs.tickTimer.startCountdown(!0)}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["b"])(["nextTick"])),Object(V["d"])(["PAUSE"])),{},{toDo:function(){this.nextTick();var e=this;setTimeout((function(){e.pause||e.$refs.tickTimer.startCountdown(!0)}),500)}})},Te=Ae,Ce=n("8e36"),Oe=Object(f["a"])(Te,ke,we,!1,null,null,null),Ee=Oe.exports;p()(Oe,{VProgressLinear:Ce["a"]});var Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex"},e._l(e.awards,(function(t,a){return n("div",{key:a,staticClass:"d-flex flex-column"},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__flipInX animate__slow"}},[n("v-img",{key:e.getAward(t),staticClass:"mx-3",staticStyle:{width:"80px"},attrs:{contain:"",src:e.getAward(t)}})],1),n("div",{staticClass:"text-center font-weight-bold"},[e._v(e._s(e.awardSubtitle(a)))])],1)})),0)},xe=[],ye={components:{},data:function(){return{}},computed:Object(c["a"])({},Object(V["e"])(["awards","awardTrades"])),methods:{getAward:function(e){return e.lock?e.locked:e.unlocked},awardSubtitle:function(e){var t=this.awardTrades[e],n=1===t?"":"s";return"".concat(t," trade").concat(n)}}},Pe=ye,je=Object(f["a"])(Pe,Se,xe,!1,null,null,null),Re=je.exports;p()(je,{VImg:g["a"]});var Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},De=[],Me=(n("caad"),n("2532"),{props:["value","label"],data:function(){return{}},computed:Object(c["a"])(Object(c["a"])({},Object(V["e"])(["transactionCounter","awardTrades","awardGiven"])),Object(V["c"])(["nTransactions"])),watch:{"$store.state.marketA.priceDynamicCounter":function(e){var t=Math.abs(e);t>1&&this.addSnackMessage("A",e,t)},"$store.state.marketB.priceDynamicCounter":function(e){var t=Math.abs(e);t>1&&this.addSnackMessage("B",e,t)},"$store.state.ticks":{deep:!0,handler:function(e,t){var n=this.nTransactions();if(this.awardTrades.includes(n)&&this.$store.state.gamified){console.debug("SHIT HAPPENS",n,this.awardTrades,this.awardTrades.includes(n)),this.$confetti.start({defaultType:"heart"}),this.pause(),this.giveAward(),this.awardShow();var a=this;setTimeout((function(){a.$confetti.stop(),a.awardHide(),a.unpause()}),3e3)}}}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["b"])(["giveAward","nextTick"])),Object(V["d"])({awardShow:"AWARD_SHOW",awardHide:"AWARD_HIDE",pause:"PAUSE",unpause:"UNPAUSE",addSnackMessageToStore:"ADD_SNACK_MESSAGE",removeSnackMessage:"REMOVE_SNACK_MESSAGE"})),{},{addSnackMessage:function(e,t,n){var a=t>0?"up":"down",r=t>0?"green":"red",i="Alert: Stock ".concat(e," went ").concat(a," ").concat(n," times in a row");this.addSnackMessageToStore({message:i,color:r,top:!0,absolute:!0});var o=this;setTimeout((function(){return o.removeSnackMessage()}),3e3)}})}),Ne=Me,Ve=Object(f["a"])(Ne,Ie,De,!1,null,null,null),Ue=Ve.exports,Ge={components:{InstructionsDialog:be,AwardBlock:Re,Pill:N,Timer:Ee,Monitor:Ue},data:function(){return{}},computed:Object(c["a"])(Object(c["a"])({},Object(V["e"])({internalGamified:"gamified",counter:"counter"})),{},{gamified:{get:function(){return this.internalGamified},set:function(e){this.switchGamification()}}}),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["d"])({switchGamification:"SWITCH_GAMIFICATION"})),Object(V["c"])(["nTransactions"])),{},{getRoundInfo:function(){return"".concat(window.round_number," out of ").concat(window.num_rounds)},getPriceUpdatesLeft:function(){return"".concat(window.window.initialPricesA.length-this.counter," ")}})},Be=Ge,$e=n("40dc"),He=n("b73d"),Le=Object(f["a"])(Be,se,le,!1,null,null,null),Ye=Le.exports;p()(Le,{VAppBar:$e["a"],VSpacer:he["a"],VSwitch:He["a"]});var Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center d-flex justify-center align-center"},[n("v-snackbars",{attrs:{objects:e.objects},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.message;return[n("h3",{staticClass:"mb-2"},[e._v(e._s(a))])]}}])})],1)},We=[],ze=n("99dd"),Fe={components:{"v-snackbars":ze["a"]},data:function(){return{}},computed:Object(c["a"])({objects:{get:function(){return this.snackMessages},set:function(e){this.removeSnackMessage(e)}}},Object(V["e"])({objects:"snackMessages"})),mounted:function(){},methods:Object(c["a"])({},Object(V["d"])({removeSnackMessage:"REMOVE_SNACK_MESSAGE"}))},qe=Fe,Je=Object(f["a"])(qe,Ke,We,!1,null,null,null),Xe=Je.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"1000"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Predictions ")]),n("v-card-text",{staticClass:"text-left"},[n("v-sheet",{staticClass:"m-3 p-3",attrs:{outlined:"",rounded:"",elevation:"3"}},[n("h5",{},[e._v("How likely is Stock "),n("b",[e._v("A")]),e._v(" to go up next?")]),n("div",{staticClass:"m-5"},[n("vue-slider",{attrs:{min:1,max:5,marks:e.marks1,tooltip:"always","tooltip-placement":"bottom","tooltip-formatter":e.formatter1},on:{change:function(t){return e.setClicker(0)}},model:{value:e.stockUpA,callback:function(t){e.stockUpA=t},expression:"stockUpA"}})],1),n("h5",{staticClass:"mt-3"},[e._v("How confident are you in the assessment?")]),n("div",{staticClass:"m-3"},[n("vue-slider",{attrs:{min:1,max:5,marks:e.marks2,tooltip:"always","tooltip-placement":"bottom","tooltip-formatter":e.formatter2},on:{change:function(t){return e.setClicker(1)}},model:{value:e.confidenceA,callback:function(t){e.confidenceA=t},expression:"confidenceA"}})],1)]),n("v-sheet",{staticClass:"m-3 p-3",attrs:{outlined:"",rounded:"",elevation:"3"}},[n("h5",[e._v("How likely is Stock "),n("b",[e._v("B")]),e._v(" to go up next?")]),n("div",{staticClass:"m-5"},[n("vue-slider",{attrs:{min:1,max:5,marks:e.marks1,tooltip:"always","tooltip-placement":"bottom","tooltip-formatter":e.formatter1},on:{change:function(t){return e.setClicker(2)}},model:{value:e.stockUpB,callback:function(t){e.stockUpB=t},expression:"stockUpB"}})],1),n("h5",{staticClass:"mt-3"},[e._v("How confident are you in the assessment?")]),n("div",{staticClass:"m-3"},[n("vue-slider",{attrs:{min:1,max:5,marks:e.marks2,tooltip:"always","tooltip-placement":"bottom","tooltip-formatter":e.formatter2},on:{change:function(t){return e.setClicker(3)}},model:{value:e.confidenceB,callback:function(t){e.confidenceB=t},expression:"confidenceB"}})],1)])],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",disabled:!e.allClicked},on:{click:e.closeDialog}},[e._v(" Submit ")])],1)],1)],1)],1)},Ze=[],et=(n("a434"),n("4971")),tt=n.n(et),nt=(n("24df"),{components:{VueSlider:tt.a},data:function(){return{marks1:{1:"Very unlikely (1)",2:"Unlikely (2)",3:"Neither likely nor unlikely",4:"Likely (4)",5:"Very likely (5)"},marks2:{1:"Very unconfident  (1)",2:"2",3:"3",4:"4",5:"Very confident (5)"},tooltips2:{1:"Very unconfident  (1)",2:"Somewhat unconfident (2)",3:"Neither confident nor unconfident (3)",4:"Somewhat confident (4)",5:"Very confident (5)"},clickers:[0,0,0,0],dialog:!0,stockUpA:3,confidenceA:1,stockUpB:3,confidenceB:1}},mounted:function(){this.PAUSE()},computed:{allClicked:function(){return F.a.every(this.clickers,(function(e){return 1===e}))}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({formatter1:function(e){return this.marks1[e]},formatter2:function(e){return this.tooltips2[e]},setClicker:function(e){this.clickers.splice(e,1,1)}},Object(V["b"])(["nextTick","sendMessage"])),Object(V["d"])(["PAUSE"])),{},{closeDialog:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.stockUpA,a=e.stockUpB,r=e.confidenceA,i=e.confidenceB,t.next=3,e.sendMessage({name:"PREDICTIONS_SENT",action:"predictions_send",stockUpA:n,stockUpB:a,confidenceA:r,confidenceB:i});case 3:e.nextTick(),e.dialog=!1;case 5:case"end":return t.stop()}}),t)})))()}})}),at=nt,rt=Object(f["a"])(at,Qe,Ze,!1,null,null,null),it=rt.exports;p()(rt,{VBtn:B["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:pe["a"],VDivider:ve["a"],VSheet:D["a"],VSpacer:he["a"]});var ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 red"},[e._v(" Information ")]),n("v-card-text",{staticClass:"my-3 text-center text-h5"},[e._v(" Trade is now allowed! "),e.$store.state.gamified?n("span",[e._v("Complete your trades to earn your badges!")]):e._e()]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.closeDialog}},[e._v(" Continue ")])],1)],1)],1)],1)},ct=[],st={data:function(){return{dialog:!0}},mounted:function(){this.PAUSE()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["b"])(["nextTick","sendMessage"])),Object(V["d"])(["PAUSE"])),{},{closeDialog:function(){this.nextTick(),this.dialog=!1}})},lt=st,ut=Object(f["a"])(lt,ot,ct,!1,null,null,null),dt=ut.exports;p()(ut,{VBtn:B["a"],VCard:v["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VDialog:pe["a"],VDivider:ve["a"],VSpacer:he["a"]});var ft={name:"App",components:{AwardGivenBlock:w,PredictionDlg:it,TradeAllowedDialog:dt,Market:ce,TopBar:Ye,IBottomBar:Xe},data:function(){return{timeInTrade:0,sample:{colors:["red","green","blue"],interval:3e3,transition:{duration:1e3}},startTime:new Date,endTime:null,timeSpent:null,reset:!1,messageMoveDelay:5e3,dialog:!1,tweenedPrice:null,stockInterval:null,awardsGiven:[],awards:{4:{id:0,img:"https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/stock_trader_trade_exchange-256.png",name:"Level I",brief:"Level I Badge: Trading intern",desc:["Level up! Doing well 👍","Way to go -- stay strong! 💎🤲","You are definitely going places! 🙌"]},9:{id:1,img:"https://cdn2.iconfinder.com/data/icons/financial-strategy-20/496/trader-bitcoin-cryptocurrency-investment-businessman-1024.png",name:"Level II",brief:"Level II Badge: Trading manager",desc:["Level up again! You belong on the trading floor 🤑","Nerves of steel: stocks are going strong! 📈","Bulls 🐂 are in the arena. Good job!","Have you ever thought of opening your own trading firm?"]},19:{id:2,img:"https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/217-512.png",name:"Level III",brief:"Level III Badge: Money Boss",desc:["You are the money-maker! 💰","Diamond hands 💎🤲 Impressive run!","To the moon! 🚀 🚀 🚀"]}}}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["e"])(["isAwardGiven","awardGiven","counter","socket"])),Object(V["c"])(["showPredictionDlg","endGame","fullLoteryProb"])),{},{getMenuStyle:function(){return this.training?{top:"25px"}:null},awardTimes:function(){return F.a.keys(this.awards)},pconfig:function(){return"fountain"==this.particle_type?{}:this.heartConfig},formattedTween:function(){return this.tweenedPrice?this.tweenedPrice.toFixed(2):this.currentPrice.toFixed(2)}}),watch:{"socket.isConnected":function(e){1==e&&this.sendMessage({name:"GAME_STARTS"})},dialog:function(e){this.onPause=e},counter:function(e){e>=window.initialPricesA.length&&document.getElementById("form").submit()}},mounted:function(){this.SET_START_TIME()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(V["b"])(["sendMessage"])),Object(V["d"])(["SET_START_TIME"])),{},{tweenUpd:function(e){this.tweenedPrice=F.a.round(this.tweenedPrice,2)},sell:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}})},mt=ft,pt=(n("034f"),n("7496")),vt=n("f6c4"),ht=n("afd9"),gt=Object(f["a"])(mt,r,i,!1,null,null,null),bt=gt.exports;p()(gt,{VApp:pt["a"],VMain:vt["a"],VRow:H["a"],VSystemBar:ht["a"]});var kt=n("f309");a["default"].use(kt["a"]);var wt=new kt["a"]({icons:{iconfont:"mdi"}}),_t=n("ea7f"),At=n.n(_t),Tt=n("37d8"),Ct=n.n(Tt),Ot=n("b408"),Et=n.n(Ot),St=(n("77ed"),n("5c51")),xt=n("c986"),yt=n.n(xt),Pt=n("890b"),jt=n.n(Pt),Rt=(n("bf40"),n("d81d"),n("2af1"),[{name:"bronze",lock:!0,locked:n("58c7"),unlocked:n("8d31"),header:"Congratulations! You've earned a bronze badge!",message:"Level up! Doing well 👍",gif:window.bronzeGifPath},{name:"silver",lock:!0,locked:n("475a"),unlocked:n("8e3c"),header:"Congratulations! You've earned a silver badge!",message:"You belong on the trading floor! 📈",gif:window.silverGifPath},{name:"gold",lock:!0,locked:n("e0d4"),unlocked:n("caf4"),header:"Congratulations! You've earned a gold badge!",message:"You are the money maker! 💰",gif:window.goldGifPath},{name:"platinum",lock:!0,locked:n("4e4b"),unlocked:n("5570"),header:"Congratulations! You've earned a platinum badge!",message:"You are definitely going places! 👐",gif:window.platinumGifPath},{name:"diamond",lock:!0,locked:n("3840"),unlocked:n("433f"),header:"Congratulations! You've earned a diamond badge!",message:"The Wolf of Wall Street  ☝️",gif:window.diamondGifPath}]),It=Rt,Dt=n("a959");a["default"].use(V["a"]);var Mt=new V["a"].Store({state:{ticks:F.a.map(window.initialPricesA,(function(e){return{tick:e,tradeA:0,tradeB:0}})),baseLotteryProb:.02,tradeHappened:!1,snackMessages:[],startTime:new Date,showPredictionAt:window.predictionAt,tradingAt:window.tradingAt,isAwardGiven:!1,awardGiven:{},training:window.training||!1,gamified:!0,transactionCounter:0,awardTrades:window.awardsAt||[10,20,30,40,50],awards:It,counter:window.counter||0,cash:50,pause:!1,marketA:{name:"A",currentPrice:100,initialPrices:window.initialPricesA,prices:[100],shares:1,purchasePrice:100,profit:0,priceDynamicCounter:0},marketB:{name:"B",currentPrice:100,initialPrices:window.initialPricesB,prices:[[(new Date).getTime(),100]],shares:1,purchasePrice:100,profit:0,priceDynamicCounter:0},socket:{isConnected:!1,message:"",reconnectError:!1}},mutations:{TRADING_TICK_INCREASE:function(e,t){e.ticks[e.counter]["trade".concat(t)]=1},SET_START_TIME:function(e){e.startTime=new Date},ADD_SNACK_MESSAGE:function(e,t){e.snackMessages.push(t)},REMOVE_SNACK_MESSAGE:function(e){console.debug("REOMVOE SNAKC RIEACH"),e.snackMessages.splice(0,1)},UNLOCK_AWARD:function(e,t){e.awards[t].lock=!1},INCREASE_TRANSACTION_COUNTER:function(e){e.transactionCounter++},INCREASE_COUNTER:function(e){e.counter++},SET_MARKET_PROPERTY:function(e,t){var n=t.market,a=t.key,r=t.value;e["market".concat(n)][a]=r},ADD_PRICE_TO_HISTORY:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].prices.push(a)},UPDATE_PRICE:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].currentPrice=a},UPDATE_PROFIT:function(e,t){var n=t.market,a=t.profit;e["market".concat(n)].profit=a},SELL_SHARE:function(e,t){var n=t.market;e["market".concat(n)].shares=0},BUY_SHARE:function(e,t){var n=t.market;e["market".concat(n)].shares=1},SET_PURCHASE_PRICE:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].purchasePrice=a},UPDATE_DYNAMIC_COUNTER:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].priceDynamicCounter=a},PAUSE:function(e){e.pause=!0},UNPAUSE:function(e){e.pause=!1},UPDATE_CASH:function(e,t){var n=t.value;e.cash+=n},SWITCH_GAMIFICATION:function(e){e.gamified=!e.gamified},AWARD_SHOW:function(e){e.isAwardGiven=!0},AWARD_HIDE:function(e){e.isAwardGiven=!1},PROVIDE_GIVEN_AWARD:function(e,t){e.awardGiven=t},SOCKET_ONOPEN:function(e,t){a["default"].prototype.$socket=t.currentTarget,e.socket.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.socket.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){e.socket.message=t,console.debug("MESSAGE",t)},SOCKET_RECONNECT:function(e,t){console.info(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.socket.reconnectError=!0}},actions:{getServerConfirmation:function(e,t){console.debug(t)},giveAward:function(e){var t=e.commit,n=e.state,a=e.getters,r=a.nTransactions(),i=n.awardTrades.indexOf(r);if(i>=0){var o=n.awards[i];t("UNLOCK_AWARD",i),t("PROVIDE_GIVEN_AWARD",o)}},nextTick:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=e.dispatch,r=e.state,i=e.getters,n("INCREASE_COUNTER"),o=i.getMarket("A"),c=i.getMarket("B"),s=o.initialPrices[r.counter],l=c.initialPrices[r.counter],a("setPrice",{market:"A",value:s}),a("setPrice",{market:"B",value:l}),n("UNPAUSE");case 9:case"end":return t.stop()}}),t)})))()},setPrice:function(e,t){var n=e.commit,a=e.getters,r=t.market,i=t.value,o=a.getMarket(r),c=o.shares,s=o.purchasePrice,l=o.currentPrice,u=o.priceDynamicCounter,d=i-l;if(0!==u&&d*u<0?n("UPDATE_DYNAMIC_COUNTER",{market:r,value:Math.sign(d)}):d>0?n("UPDATE_DYNAMIC_COUNTER",{market:r,value:u+1}):d<0&&n("UPDATE_DYNAMIC_COUNTER",{market:r,value:u-1}),n("ADD_PRICE_TO_HISTORY",{market:r,value:i}),n("UPDATE_PRICE",{market:r,value:i}),null!==s&&c&&c>0){var f=i-s;n("UPDATE_PROFIT",{market:r,profit:f})}},increaseTradedTicks:function(e,t){e.state;var n=e.commit,a=t.market;n("TRADING_TICK_INCREASE",a)},purchase:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=e.getters,i=e.dispatch,o=t.market,!r.isTransactionAllowed(o,"buy")){n.next=14;break}return a("INCREASE_TRANSACTION_COUNTER"),i("increaseTradedTicks",{market:o}),c=r.getMarket(o),a("BUY_SHARE",{market:o}),s=c.currentPrice,a("SET_PURCHASE_PRICE",{market:o,value:s}),a("UPDATE_CASH",{value:-s}),l=0,a("UPDATE_PROFIT",{market:o,profit:l}),n.next=14,i("sendMessage",{name:"buy",market:o});case 14:case"end":return n.stop()}}),n)})))()},sell:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=e.getters,i=e.dispatch,o=t.market,!r.isTransactionAllowed(o,"sell")){n.next=14;break}return a("INCREASE_TRANSACTION_COUNTER"),i("increaseTradedTicks",{market:o}),a("SELL_SHARE",{market:o}),c=r.getMarket(o),s=null,a("SET_PURCHASE_PRICE",{market:o,value:s}),a("UPDATE_CASH",{value:c.currentPrice}),l=null,a("UPDATE_PROFIT",{market:o,profit:l}),n.next=14,i("sendMessage",{name:"sell",market:o});case 14:case"end":return n.stop()}}),n)})))()},sendMessage:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,i=r.counter,o=r.startTime,s=r.cash,e.next=4,a["default"].prototype.$socket.sendObj(Object(c["a"])({tick_number:i,balance:s,secs_since_round_starts:Object(Dt["a"])(new Date,o)},n));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{nTransactions:function(e){var t=e.ticks;return function(){var e=F.a.sum(F.a.map(t,(function(e){return e.tradeA}))),n=F.a.sum(F.a.map(t,(function(e){return e.tradeB})));return e+n}},fullLoteryProb:function(e,t){var n=e.baseLotteryProb,a=t.nTransactions;return function(){return F.a.round(n*a()*100,1)}},showPredictionDlg:function(e){var t=e.showPredictionAt,n=e.counter;return function(){return n===t}},tradingAllowed:function(e){var t=e.tradingAt,n=e.counter;return function(){return n>=t}},endGame:function(e){var t=e.counter;return function(){return t>=10}},isTransactionAllowed:function(e,t){return function(e,n){var a=t.getMarket(e),r=t.tradingAllowed();return!!r&&("buy"===n?0===a.shares:"sell"===n&&1===a.shares)}},getMarket:function(e){return function(t){return e["market".concat(t)]}}}});a["default"].prototype.$gamified=window.gamified,a["default"].use(St["a"]),a["default"].use(yt.a,"vac"),a["default"].use(jt.a),Ct()(At.a),a["default"].use(ee.a),a["default"].config.productionTip=!1;var Nt="https:"===window.location.protocol?"wss":"ws",Vt=Nt+"://"+window.location.host+window.socket_path;console.debug("WASPATH",Vt),a["default"].use(Et.a,Vt,{store:Mt,format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),new a["default"]({vuetify:wt,store:Mt,render:function(e){return e(bt)}}).$mount("#app")},"58c7":function(e,t,n){e.exports=n.p+"img/bronze_locked.png"},"85ec":function(e,t,n){},"8d31":function(e,t,n){e.exports=n.p+"img/bronze.png"},"8e3c":function(e,t,n){e.exports=n.p+"img/silver.png"},caf4:function(e,t,n){e.exports=n.p+"img/gold.png"},e0d4:function(e,t,n){e.exports=n.p+"img/gold_locked.png"}});