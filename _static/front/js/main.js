(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={main:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static/front/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0b2f":function(e,t,n){e.exports=n.p+"img/bronze.gif"},3840:function(e,t,n){e.exports=n.p+"img/diamond_locked.png"},"433f":function(e,t,n){e.exports=n.p+"img/diamond.png"},"475a":function(e,t,n){e.exports=n.p+"img/silver_locked.png"},"48cc":function(e,t,n){e.exports=n.p+"img/silver.gif"},"4e4b":function(e,t,n){e.exports=n.p+"img/platinum_locked.png"},5570:function(e,t,n){e.exports=n.p+"img/platinum.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{app:""}},[e.$store.getters.tradingAllowed()&&!e.$store.state.training?n("trade-allowed-dialog"):e._e(),e.$store.getters.showPredictionDlg()?n("prediction-dlg"):e._e(),e.$store.state.gamified?n("div",{},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__bounce animate__slow","leave-active-class":"animate__animated animate__fadeOutTopRight animate__slow"}},[e.isAwardGiven?n("award-given-block",{attrs:{awardGiven:e.awardGiven}}):e._e()],1)],1):e._e(),e.$store.state.training?n("v-system-bar",{staticClass:"d-flex justify-center",attrs:{app:"",dark:"",color:"red ",height:"30"}},[n("div",{staticClass:"text-center"},[n("b",[e._v("TRAINING ROUND")])])]):n("v-system-bar",{staticClass:"d-flex justify-center",attrs:{app:"",dark:"",height:"50"}},[n("div",{staticClass:"text-center text-h5"},[e.$store.state.gamified?n("b",[e._v("Odds to win E$1,000 sweepstake: "+e._s(e.fullLoteryProb())+" in 1000")]):e._e()])]),n("top-bar"),n("v-main",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{app:""}},[n("v-row",{staticStyle:{height:"100%"},attrs:{"fill-height":""}},[n("market",{attrs:{name:"A"}}),n("market",{attrs:{name:"B"}})],1)],1)],1)},i=[],o=n("1da1"),c=n("5530"),s=(n("96cf"),n("d3b7"),n("ddb0"),n("b680"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-overlay",{attrs:{value:!0,dark:!1,opacity:0,"z-index":"10000"}},[n("div",{staticClass:"d-flex flex-column justify-center align-center"},[n("v-card",{attrs:{elevation:"3",width:"600"}},[n("v-card-title",{staticClass:"d-flex align-center justify-center text-center"},[n("v-img",{staticClass:"mx-3",attrs:{contain:"",src:e.awardGiven.gif}})],1),n("v-card-text",[n("h3",{staticClass:"text-center"},[e._v(e._s(e.awardGiven.message))])])],1)],1)])}),l=[],u={props:["awardGiven"],data:function(){return{}},mounted:function(){},methods:{}},d=u,f=n("2877"),p=n("6544"),m=n.n(p),v=n("b0af"),g=n("99d9"),h=n("adda"),b=n("a797"),k=Object(f["a"])(d,s,l,!1,null,null,null),w=k.exports;m()(k,{VCard:v["a"],VCardText:g["b"],VCardTitle:g["c"],VImg:h["a"],VOverlay:b["a"]});var T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{staticClass:"d-flex flex-column",attrs:{cols:"6","fill-height":""}},[n("div",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{id:"btns"}},[e._v(" Stock "+e._s(e.name)+". "),n("pill",{attrs:{label:"Current price",value:e.market.currentPrice}})],1),n("div",{ref:"chartWrapper",staticClass:"flex-grow-1 flex-shrink-0",staticStyle:{},attrs:{id:"chart"}},[n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.onResize,expression:"onResize"}],style:{height:e.chartHeight+"px"}},[n("highcharts",{ref:"priceGraph",staticClass:"hc",attrs:{constructorType:"stockChart",options:e.chartOptions,updateArgs:[!0,!0,!0]}})],1)]),n("div",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{id:"btns"}},[n("buy-sell-bar",{attrs:{market:e.market},on:{sell:e.sellClicked,buy:e.buyClicked}})],1),n("div",{staticClass:"flex-grow-0 flex-shrink-0",attrs:{id:"btns"}},[n("info-bar",{attrs:{market:e.market}})],1)])},x=[],A=n("2909"),O=(n("99af"),n("cb29"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("pill",{attrs:{label:"Position",value:e.market.shares}})],1),n("v-col",[n("v-btn",{attrs:{disabled:!e.btnEnabled("buy")},on:{click:e.buy}},[e._v("Buy")])],1),n("v-col",[n("v-btn",{attrs:{disabled:!e.btnEnabled("sell")},on:{click:e.sell}},[e._v("Sell")])],1)],1)}),C=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",{staticClass:"mx-1   ",attrs:{outlined:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.label)+": ")])],1),n("v-list-item-action",{staticClass:"font-weight-bold"},[e._v(" "+e._s(e.value)+" ")])],1)],1)},y=[],S={props:["value","label"],data:function(){return{}},methods:{}},P=S,R=n("da13"),j=n("1800"),I=n("5d23"),D=n("8dd9"),V=Object(f["a"])(P,E,y,!1,null,null,null),N=V.exports;m()(V,{VListItem:R["a"],VListItemAction:j["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VSheet:D["a"]});var U=n("2f62"),M={props:["market"],components:{Pill:N},data:function(){return{}},computed:Object(c["a"])({},Object(U["c"])(["isTransactionAllowed"])),methods:{btnEnabled:function(e){return this.isTransactionAllowed(this.market.name,e)},sell:function(){this.$emit("sell")},buy:function(){this.$emit("buy")}}},B=M,$=n("8336"),G=n("62ad"),H=n("0fd9"),L=Object(f["a"])(B,O,C,!1,null,null,null),W=L.exports;m()(L,{VBtn:$["a"],VCol:G["a"],VRow:H["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("pill",{attrs:{label:" Purchase price",value:null!==e.market.purchasePrice?e.market.purchasePrice:"NA"}})],1),n("v-col",[n("pill",{attrs:{label:"Profit",value:null!==e.market.profit?e.market.profit:"NA"}})],1)],1)},F=[],z=n("2ef0"),K=n.n(z),q={props:["market"],components:{Pill:N},data:function(){return{}},methods:{}},J=q,X=Object(f["a"])(J,Y,F,!1,null,null,null),Q=X.exports;m()(X,{VCol:G["a"],VRow:H["a"]});var Z=n("4452"),ee=n.n(Z),te={components:{highcharts:Z["Chart"],BuySellBar:W,InfoBar:Q,Pill:N},props:["name"],data:function(){var e=[100].concat(Object(A["a"])(_.fill(Array(10),null)));return{chartHeight:0,prices:[],xAxis:{min:(new Date).getTime()},tickFrequency:window.tick_frequency,rawData:e,chartOptions:{chart:{events:{load:function(e){}}},yAxis:{min:25,max:175},events:{load:function(e){return function(){e.chart=this}}(this)},time:{useUTC:!1},rangeSelector:{enabled:!0,inputEnabled:!1,buttons:[{type:"second",count:10,text:"10s"},{type:"all",text:"All",title:"View all"}],selected:0},navigator:{enabled:!1},credits:{enabled:!1},series:[{type:"line",pointStart:(new Date).getTime(),pointInterval:1e3,name:"Stock price",data:e}]},onPause:!1}},watch:{"market.currentPrice":function(e){var t=e,n=this.$refs.priceGraph.chart.series[0];if(this.counter<this.rawData.length){var a=n.data[this.counter],r=a.x;a.y;this.$refs.priceGraph.chart.series[0].removePoint(this.counter,!1),t={x:r,y:e}}this.$refs.priceGraph.chart.series[0].addPoint(t,!1,!1,!0),this.$refs.priceGraph.chart.redraw()}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["e"])(["counter"])),Object(U["c"])(["getMarket"])),{},{market:function(){return this.getMarket(this.name)}}),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.onResize();case 1:case"end":return t.stop()}}),t)})))()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["d"])(["SET_MARKET_PROPERTY"])),Object(U["b"])(["setPrice","purchase","sell"])),{},{onResize:function(){var e=this;this.chartHeight=this.$refs.chartWrapper.clientHeight-50,this.$nextTick((function(){e.$refs.priceGraph.chart.setSize(null,e.chartHeight),e.$refs.priceGraph.chart.reflow()}))},sellClicked:function(){this.sell({market:this.name})},buyClicked:function(){this.purchase({market:this.name})}})},ne=te,ae=n("269a"),re=n.n(ae),ie=n("dc22"),oe=Object(f["a"])(ne,T,x,!1,null,null,null),ce=oe.exports;m()(oe,{VCol:G["a"]}),re()(oe,{Resize:ie["a"]});var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"","clipped-left":""},scopedSlots:e._u([{key:"extension",fn:function(){return[n("timer",{attrs:{"what-to-do":"allowExitPermission","progress-message":"","show-progress":!0,"timer-finish":"You may leave the chat now or continue for as long as you like.",color:"blue"}})]},proxy:!0}])},[n("monitor"),n("instructions-dialog"),n("pill",{attrs:{label:"Cash",value:"$"+e.$store.state.cash}}),n("pill",{attrs:{label:"Round",value:e.getRoundInfo()}}),n("pill",{attrs:{label:"Price updates left",value:e.getPriceUpdatesLeft()}}),e.gamified?e._e():n("div",{staticClass:"flex-grow-1 flex-shrink-0 d-flex p-1",staticStyle:{height:"100%"}},[n("v-sheet",{staticClass:"\n        flex-grow-1 flex-shrink-0\n        d-flex\n        flex-column\n        justify-center\n        align-center\n      ",attrs:{elevation:"3",outlined:"",rounded:""}},[n("div",[e._v(e._s(e.msg()("A")))]),n("div",[e._v(e._s(e.msg()("B")))])])],1),e.gamified?n("v-spacer"):e._e(),n("div",{staticClass:"flex-grow-0 flex-shrink-0 d-flex align-center",staticStyle:{height:"100%"}},[e.gamified?n("award-block"):e._e(),e._e()],1)],1)},le=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{width:"800"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mx-1",attrs:{color:"green white--text",small:""}},"v-btn",r,!1),a),[e._v(" Instructions ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Instructions ")]),n("v-card-text",{staticClass:"text-left",domProps:{innerHTML:e._s(e.instructions)}}),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.closeDialog}},[e._v(" Close ")])],1)],1)],1)],1)},de=[],fe={data:function(){return{dialog:!1,instructions:document.getElementById("instructions").innerHTML}},methods:{closeDialog:function(){this.dialog=!1}}},pe=fe,me=n("169a"),ve=n("ce7e"),ge=n("2fa4"),he=Object(f["a"])(pe,ue,de,!1,null,null,null),be=he.exports;m()(he,{VBtn:$["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:me["a"],VDivider:ve["a"],VSpacer:ge["a"]});var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("countdown",{ref:"tickTimer",style:{width:"100%"},attrs:{autoStart:!0,leftTime:e.tickFrequency,speed:100},on:{finish:function(t){return e.toDo()}},scopedSlots:e._u([{key:"process",fn:function(t){var a=t.timeObj;return[n("v-progress-linear",{attrs:{width:"100%",height:"15px",color:e.color,value:a.leftTime/e.tickFrequency*100}})]}}])})},we=[],_e=1e3,Te={name:"Timer",props:{progressMessage:String,whatToDo:String,color:String,timerFinish:String,showProgress:{type:Boolean,default:!0}},data:function(){return{tickFrequency:window.tickFrequency*_e}},computed:Object(c["a"])({},Object(U["e"])(["pause"])),watch:{pause:function(e){!0===e?this.$refs.tickTimer.stopCountdown():this.$refs.tickTimer.startCountdown(!0)}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["b"])(["nextTick"])),Object(U["d"])(["PAUSE"])),{},{toDo:function(){this.nextTick();var e=this;setTimeout((function(){e.pause||e.$refs.tickTimer.startCountdown(!0)}),500)}})},xe=Te,Ae=n("8e36"),Oe=Object(f["a"])(xe,ke,we,!1,null,null,null),Ce=Oe.exports;m()(Oe,{VProgressLinear:Ae["a"]});var Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex"},e._l(e.awards,(function(t,a){return n("div",{key:a,staticStyle:{width:"60px"}},[n("transition",{attrs:{"enter-active-class":"animate__animated animate__flipInX animate__slow"}},[n("v-img",{key:e.getAward(t),staticClass:"mx-3",attrs:{contain:"",src:e.getAward(t)}})],1)],1)})),0)},ye=[],Se={components:{},data:function(){return{}},computed:Object(c["a"])({},Object(U["e"])(["awards"])),methods:{getAward:function(e){return e.lock?e.locked:e.unlocked}}},Pe=Se,Re=Object(f["a"])(Pe,Ee,ye,!1,null,null,null),je=Re.exports;m()(Re,{VImg:h["a"]});var Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},De=[],Ve=(n("caad"),n("2532"),{props:["value","label"],data:function(){return{}},computed:Object(c["a"])({},Object(U["e"])(["transactionCounter","awardTrades","awardGiven"])),watch:{transactionCounter:function(e){if(this.awardTrades.includes(e)){this.$store.state.gamified&&this.$confetti.start({defaultType:"heart"}),this.giveAward(),this.awardShow();var t=this;setTimeout((function(){t.$confetti.stop(),t.awardHide()}),2e3)}}},methods:Object(c["a"])(Object(c["a"])({},Object(U["b"])(["giveAward"])),Object(U["d"])({awardShow:"AWARD_SHOW",awardHide:"AWARD_HIDE"}))}),Ne=Ve,Ue=Object(f["a"])(Ne,Ie,De,!1,null,null,null),Me=Ue.exports,Be={components:{InstructionsDialog:be,AwardBlock:je,Pill:N,Timer:Ce,Monitor:Me},data:function(){return{}},computed:Object(c["a"])(Object(c["a"])({},Object(U["e"])({internalGamified:"gamified",counter:"counter"})),{},{gamified:{get:function(){return this.internalGamified},set:function(e){this.switchGamification()}}}),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["d"])({switchGamification:"SWITCH_GAMIFICATION"})),Object(U["c"])(["msg"])),{},{getRoundInfo:function(){return"".concat(window.round_number," out of ").concat(window.num_rounds)},getPriceUpdatesLeft:function(){return"".concat(window.window.initialPricesA.length-this.counter," ")}})},$e=Be,Ge=n("40dc"),He=n("b73d"),Le=Object(f["a"])($e,se,le,!1,null,null,null),We=Le.exports;m()(Le,{VAppBar:Ge["a"],VSheet:D["a"],VSpacer:ge["a"],VSwitch:He["a"]});var Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[e._v(" Predictions ")]),n("v-card-text",{staticClass:"text-left"},[n("v-sheet",{staticClass:"m-3 p-3",attrs:{outlined:"",rounded:"",elevation:"3"}},[n("h5",[e._v("How likely is Stock "),n("b",[e._v("A")]),e._v(" to go up next?")]),n("v-slider",{attrs:{label:"0",min:"0",max:"5"},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.stockUpA,callback:function(t){e.stockUpA=t},expression:"stockUpA"}}),n("h5",[e._v("How confident are you in the assessment?")]),n("v-slider",{attrs:{label:"0",min:"0",max:"5"},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.confidenceA,callback:function(t){e.confidenceA=t},expression:"confidenceA"}})],1),n("v-sheet",{staticClass:"m-3 p-3",attrs:{outlined:"",rounded:"",elevation:"3"}},[n("h5",[e._v("How likely is Stock "),n("b",[e._v("B")]),e._v(" to go up next?")]),n("v-slider",{attrs:{label:"0",min:"0",max:"5"},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.stockUpB,callback:function(t){e.stockUpB=t},expression:"stockUpB"}}),n("h5",[e._v("How confident are you in the assessment?")]),n("v-slider",{attrs:{label:"0",min:"0",max:"5"},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.confidenceB,callback:function(t){e.confidenceB=t},expression:"confidenceB"}})],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.closeDialog}},[e._v(" Submit ")])],1)],1)],1)],1)},Fe=[],ze={data:function(){return{dialog:!0,stockUpA:0,confidenceA:0,stockUpB:0,confidenceB:0}},mounted:function(){this.PAUSE()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["b"])(["nextTick","sendMessage"])),Object(U["d"])(["PAUSE"])),{},{closeDialog:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.stockUpA,a=e.stockUpB,r=e.confidenceA,i=e.confidenceB,t.next=3,e.sendMessage({name:"PREDICTIONS_SENT",action:"predictions_send",stockUpA:n,stockUpB:a,confidenceA:r,confidenceB:i});case 3:e.nextTick(),e.dialog=!1;case 5:case"end":return t.stop()}}),t)})))()}})},Ke=ze,qe=n("ba0d"),Je=Object(f["a"])(Ke,Ye,Fe,!1,null,null,null),Xe=Je.exports;m()(Je,{VBtn:$["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:me["a"],VDivider:ve["a"],VSheet:D["a"],VSlider:qe["a"],VSpacer:ge["a"]});var Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 red"},[e._v(" Information ")]),n("v-card-text",{staticClass:"my-3 text-center text-h5"},[e._v(" Trade is now allowed! ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.closeDialog}},[e._v(" Continue ")])],1)],1)],1)],1)},Ze=[],et={data:function(){return{dialog:!0}},mounted:function(){this.PAUSE()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["b"])(["nextTick","sendMessage"])),Object(U["d"])(["PAUSE"])),{},{closeDialog:function(){this.nextTick(),this.dialog=!1}})},tt=et,nt=Object(f["a"])(tt,Qe,Ze,!1,null,null,null),at=nt.exports;m()(nt,{VBtn:$["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:me["a"],VDivider:ve["a"],VSpacer:ge["a"]});var rt={name:"App",components:{AwardGivenBlock:w,PredictionDlg:Xe,TradeAllowedDialog:at,Market:ce,TopBar:We},data:function(){return{timeInTrade:0,sample:{colors:["red","green","blue"],interval:3e3,transition:{duration:1e3}},startTime:new Date,endTime:null,timeSpent:null,reset:!1,messageMoveDelay:5e3,dialog:!1,tweenedPrice:null,stockInterval:null,awardsGiven:[],awards:{4:{id:0,img:"https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/stock_trader_trade_exchange-256.png",name:"Level I",brief:"Level I Badge: Trading intern",desc:["Level up! Doing well 👍","Way to go -- stay strong! 💎🤲","You are definitely going places! 🙌"]},9:{id:1,img:"https://cdn2.iconfinder.com/data/icons/financial-strategy-20/496/trader-bitcoin-cryptocurrency-investment-businessman-1024.png",name:"Level II",brief:"Level II Badge: Trading manager",desc:["Level up again! You belong on the trading floor 🤑","Nerves of steel: stocks are going strong! 📈","Bulls 🐂 are in the arena. Good job!","Have you ever thought of opening your own trading firm?"]},19:{id:2,img:"https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/217-512.png",name:"Level III",brief:"Level III Badge: Money Boss",desc:["You are the money-maker! 💰","Diamond hands 💎🤲 Impressive run!","To the moon! 🚀 🚀 🚀"]}}}},computed:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["e"])(["isAwardGiven","awardGiven","counter","socket"])),Object(U["c"])(["showPredictionDlg","endGame","fullLoteryProb"])),{},{getMenuStyle:function(){return this.training?{top:"25px"}:null},awardTimes:function(){return K.a.keys(this.awards)},pconfig:function(){return"fountain"==this.particle_type?{}:this.heartConfig},formattedTween:function(){return this.tweenedPrice?this.tweenedPrice.toFixed(2):this.currentPrice.toFixed(2)}}),watch:{"socket.isConnected":function(e){1==e&&this.sendMessage({name:"GAME_STARTS"})},dialog:function(e){this.onPause=e},counter:function(e){e>=window.initialPricesA.length&&document.getElementById("form").submit()}},mounted:function(){this.SET_START_TIME()},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(U["b"])(["sendMessage"])),Object(U["d"])(["SET_START_TIME"])),{},{tweenUpd:function(e){this.tweenedPrice=K.a.round(this.tweenedPrice,2)},sell:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}})},it=rt,ot=(n("034f"),n("7496")),ct=n("f6c4"),st=n("afd9"),lt=Object(f["a"])(it,r,i,!1,null,null,null),ut=lt.exports;m()(lt,{VApp:ot["a"],VMain:ct["a"],VRow:H["a"],VSystemBar:st["a"]});var dt=n("f309");a["default"].use(dt["a"]);var ft=new dt["a"]({icons:{iconfont:"mdi"}}),pt=n("ea7f"),mt=n.n(pt),vt=n("37d8"),gt=n.n(vt),ht=n("b408"),bt=n.n(ht),kt=n("467a"),wt=(n("77ed"),n("5c51")),_t=n("c986"),Tt=n.n(_t),xt=n("890b"),At=n.n(xt),Ot=(n("bf40"),[{name:"bronze",lock:!0,locked:n("58c7"),unlocked:n("8d31"),message:"Level up! Doing well 👍",gif:n("0b2f")},{name:"silver",lock:!0,locked:n("475a"),unlocked:n("8e3c"),message:"You belong on the trading floor! 📈",gif:n("48cc")},{name:"gold",lock:!0,locked:n("e0d4"),unlocked:n("caf4"),message:"You are the money maker! 💰",gif:n("c816")},{name:"platinum",lock:!0,locked:n("4e4b"),unlocked:n("5570"),message:"You are definitely going places! 👐",gif:n("c638")},{name:"diamond",lock:!0,locked:n("3840"),unlocked:n("433f"),message:"The Wolf of Wall Street  ☝️",gif:n("deeb")}]),Ct=Ot,Et=n("a959");a["default"].use(U["a"]);var yt=new U["a"].Store({state:{baseLotteryProb:.02,tradeHappened:!1,tradingTicksCounter:0,startTime:new Date,showPredictionAt:window.predictionAt,tradingAt:window.tradingAt,isAwardGiven:!1,awardGiven:{},training:!1,gamified:window.gamified||!1,transactionCounter:0,awardTrades:[10,20,30,40,50],awards:Ct,counter:window.counter||0,cash:50,pause:!1,marketA:{name:"A",currentPrice:100,initialPrices:window.initialPricesA,prices:[100],shares:1,purchasePrice:100,profit:0,priceDynamicCounter:0},marketB:{name:"B",currentPrice:100,initialPrices:window.initialPricesB,prices:[[(new Date).getTime(),100]],shares:1,purchasePrice:100,profit:0,priceDynamicCounter:0},socket:{isConnected:!1,message:"",reconnectError:!1}},mutations:{SWITCH_TRADE_EVENT:function(e,t){e.tradeHappened=t},TRADING_TICK_INCREASE:function(e){e.tradingTicksCounter++},SET_START_TIME:function(e){e.startTime=new Date},UNLOCK_AWARD:function(e,t){e.awards[t].lock=!1},INCREASE_TRANSACTION_COUNTER:function(e){e.transactionCounter++},INCREASE_COUNTER:function(e){e.counter++},SET_MARKET_PROPERTY:function(e,t){var n=t.market,a=t.key,r=t.value;e["market".concat(n)][a]=r},ADD_PRICE_TO_HISTORY:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].prices.push(a)},UPDATE_PRICE:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].currentPrice=a},UPDATE_PROFIT:function(e,t){var n=t.market,a=t.profit;e["market".concat(n)].profit=a},SELL_SHARE:function(e,t){var n=t.market;e["market".concat(n)].shares=0},BUY_SHARE:function(e,t){var n=t.market;e["market".concat(n)].shares=1},SET_PURCHASE_PRICE:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].purchasePrice=a},UPDATE_DYNAMIC_COUNTER:function(e,t){var n=t.market,a=t.value;e["market".concat(n)].priceDynamicCounter=a},PAUSE:function(e){e.pause=!0},UNPAUSE:function(e){e.pause=!1},UPDATE_CASH:function(e,t){var n=t.value;e.cash+=n},SWITCH_GAMIFICATION:function(e){e.gamified=!e.gamified},AWARD_SHOW:function(e){e.isAwardGiven=!0},AWARD_HIDE:function(e){e.isAwardGiven=!1},PROVIDE_GIVEN_AWARD:function(e,t){e.awardGiven=t},SOCKET_ONOPEN:function(e,t){a["default"].prototype.$socket=t.currentTarget,e.socket.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.socket.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){e.socket.message=t,console.debug("MESSAGE",t)},SOCKET_RECONNECT:function(e,t){console.info(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.socket.reconnectError=!0}},actions:{getServerConfirmation:function(e,t){console.debug(t)},giveAward:function(e){var t=e.commit,n=e.state,a=n.awardTrades.indexOf(n.transactionCounter);if(a>=0){var r=n.awards[a];t("UNLOCK_AWARD",a),t("PROVIDE_GIVEN_AWARD",r)}},nextTick:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=e.dispatch,r=e.state,i=e.getters,n("INCREASE_COUNTER"),n("SWITCH_TRADE_EVENT",!1),o=i.getMarket("A"),c=i.getMarket("B"),s=o.initialPrices[r.counter],l=c.initialPrices[r.counter],a("setPrice",{market:"A",value:s}),a("setPrice",{market:"B",value:l}),n("UNPAUSE");case 10:case"end":return t.stop()}}),t)})))()},setPrice:function(e,t){var n=e.commit,a=e.getters,r=t.market,i=t.value,o=a.getMarket(r),c=o.shares,s=o.purchasePrice,l=o.currentPrice,u=o.priceDynamicCounter,d=i-l;if(n("UPDATE_DYNAMIC_COUNTER",d>=0&&u>=0?{market:r,value:u+1}:d<0&&u<0?{market:r,value:u-1}:{market:r,value:0}),n("ADD_PRICE_TO_HISTORY",{market:r,value:i}),n("UPDATE_PRICE",{market:r,value:i}),null!==s&&c&&c>0){var f=i-s;n("UPDATE_PROFIT",{market:r,profit:f})}},increaseTradedTicks:function(e){var t=e.state,n=e.commit,a=t.tradeHappened;a||(n("TRADING_TICK_INCREASE"),n("SWITCH_TRADE_EVENT",!0))},purchase:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=e.getters,i=e.dispatch,o=t.market,!r.isTransactionAllowed(o,"buy")){n.next=14;break}return a("INCREASE_TRANSACTION_COUNTER"),i("increaseTradedTicks"),c=r.getMarket(o),a("BUY_SHARE",{market:o}),s=c.currentPrice,a("SET_PURCHASE_PRICE",{market:o,value:s}),a("UPDATE_CASH",{value:-s}),l=0,a("UPDATE_PROFIT",{market:o,profit:l}),n.next=14,i("sendMessage",{name:"buy",market:o});case 14:case"end":return n.stop()}}),n)})))()},sell:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,i,o,c,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=e.getters,i=e.dispatch,o=t.market,!r.isTransactionAllowed(o,"sell")){n.next=14;break}return a("INCREASE_TRANSACTION_COUNTER"),i("increaseTradedTicks"),a("SELL_SHARE",{market:o}),c=r.getMarket(o),s=null,a("SET_PURCHASE_PRICE",{market:o,value:s}),a("UPDATE_CASH",{value:c.currentPrice}),l=null,a("UPDATE_PROFIT",{market:o,profit:l}),n.next=14,i("sendMessage",{name:"sell",market:o});case 14:case"end":return n.stop()}}),n)})))()},sendMessage:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,i=r.counter,o=r.startTime,s=r.cash,e.next=4,a["default"].prototype.$socket.sendObj(Object(c["a"])({tick_number:i,balance:s,secs_since_round_starts:Object(Et["a"])(new Date,o)},n));case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},getters:{msg:function(e,t){return function(e){var n=t.getMarket(e),a=n.priceDynamicCounter,r=Math.abs(a);if(r<2)return"";var i=a>0?"up":"down",o="Alert: Stock ".concat(e," went ").concat(i," ").concat(r," times in a row");return console.debug("MSG",o),o}},fullLoteryProb:function(e){var t=e.baseLotteryProb,n=e.tradingTicksCounter;return function(){return K.a.round(t*n*100,1)}},showPredictionDlg:function(e){var t=e.showPredictionAt,n=e.counter;return function(){return n===t}},tradingAllowed:function(e){var t=e.tradingAt,n=e.counter;return function(){return n>=t}},endGame:function(e){var t=e.counter;return function(){return t>=10}},isTransactionAllowed:function(e,t){return function(n,a){var r=t.getMarket(n),i=t.tradingAllowed();return!!i&&("buy"===a?0===r.shares&&r.currentPrice<=e.cash:"sell"===a&&1===r.shares)}},getMarket:function(e){return function(t){return e["market".concat(t)]}}}});a["default"].use(kt["a"]),a["default"].prototype.$gamified=window.gamified,a["default"].use(wt["a"]),a["default"].use(Tt.a,"vac"),a["default"].use(At.a),gt()(mt.a),a["default"].use(ee.a),a["default"].config.productionTip=!1;var St="https:"===window.location.protocol?"wss":"ws",Pt=St+"://"+window.location.host+window.socket_path;console.debug("WASPATH",Pt),a["default"].use(bt.a,Pt,{store:yt,format:"json",reconnection:!0,reconnectionAttempts:5,reconnectionDelay:3e3}),new a["default"]({vuetify:ft,store:yt,render:function(e){return e(ut)}}).$mount("#app")},"58c7":function(e,t,n){e.exports=n.p+"img/bronze_locked.png"},"85ec":function(e,t,n){},"8d31":function(e,t,n){e.exports=n.p+"img/bronze.png"},"8e3c":function(e,t,n){e.exports=n.p+"img/silver.png"},c638:function(e,t,n){e.exports=n.p+"img/platinum.gif"},c816:function(e,t,n){e.exports=n.p+"img/gold.gif"},caf4:function(e,t,n){e.exports=n.p+"img/gold.png"},deeb:function(e,t,n){e.exports=n.p+"img/diamond.gif"},e0d4:function(e,t,n){e.exports=n.p+"img/gold_locked.png"}});