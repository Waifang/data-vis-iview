(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{733:function(e,t,a){var n=a(738);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(48).default)("309bcde4",n,!1,{})},734:function(e,t,a){var n=a(740);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(48).default)("9f04c74c",n,!1,{})},735:function(e,t,a){var n=a(742);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(48).default)("81bb6994",n,!1,{})},736:function(e,t,a){var n=a(747);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(48).default)("77ec0b88",n,!1,{})},737:function(e,t,a){"use strict";var n=a(733);a.n(n).a},738:function(e,t,a){(e.exports=a(47)(!1)).push([e.i,".anchor a {\n  opacity: 0;\n  font-size: 24px;\n  transition: opacity 0.2s ease-in-out;\n  margin-left: 5px;\n  position: relative;\n  top: 2px;\n}\n.anchor:hover a {\n  opacity: 1;\n}\n",""])},739:function(e,t,a){"use strict";var n=a(734);a.n(n).a},740:function(e,t,a){(e.exports=a(47)(!1)).push([e.i,"\ndiv[data-v-557e1337]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-557e1337], span.scale[data-v-557e1337], span.open-fiddle[data-v-557e1337]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-557e1337]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-557e1337]{\n    right: 50px;\n}\n.bg[data-v-557e1337] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-557e1337]{\n    right: 5px;\n}\nspan.copy[data-v-557e1337]:hover, span.scale[data-v-557e1337]:hover, span.open-fiddle[data-v-557e1337]:hover{\n    color: #5c6b77;\n}\n\n",""])},741:function(e,t,a){"use strict";var n=a(735);a.n(n).a},742:function(e,t,a){(e.exports=a(47)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},743:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"anchor"},[e.h1?a("h1",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h2?a("h2",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h3?a("h3",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h4?a("h4",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h5?a("h5",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h6?a("h6",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e._t("default"),e._v(" "),a("a",{attrs:{href:"#"+e.title_link}},[e._v("\n        #\n    ")])],2)};n._withStripped=!0;a(215);var o=a(745),i={props:{title:{type:String,default:""},h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}}},s=(a(737),a(3)),r=Object(s.a)(i,n,[],!1,null,null,null);r.options.__file="website/components/anchor/index.vue";t.a=r.exports},744:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("pre",{class:{bg:e.bg}},[a("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),a("span",{staticClass:"scale",on:{click:e.scale}},[a("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[a("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),a("span",{staticClass:"copy",on:{click:e.clip}},[a("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),a("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[a("pre",{class:{bg:e.bg}},[e._v("            "),a("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)};n._withStripped=!0;a(750),a(751),a(150),a(215);var o=a(752),i=a.n(o),s=(a(753),a(754)),r=a.n(s),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),a=new r.a(".copy",{text:function(){return t}});a.on("success",(function(t){t.clearSelection(),a.destroy(),e.copied=!0,"zh-CN"===e.docLang?e.$Message.success("代码已复制到剪贴板"):e.$Message.success("Code copied"),setTimeout((function(){e.copied=!1}),2e3)}))},scale:function(){this.openScale=!0},getSource:function(e,t){var a=new RegExp("<"+t+"[^>]*>"),n=e.match(a);return n?(n=n[0],e.slice(e.indexOf(n)+n.length,e.lastIndexOf("</"+t+">"))):""},openFiddle:function(){}}},d=(a(739),a(741),a(3)),c=Object(d.a)(l,n,[],!1,null,"557e1337",null);c.options.__file="website/components/code/index.vue";t.a=c.exports},746:function(e,t,a){"use strict";var n=a(736);a.n(n).a},747:function(e,t,a){(e.exports=a(47)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 10px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},748:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[a("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[a("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),a("header",{staticClass:"example-header"},[a("span",[e._v("\n                "+e._s(e.title)+"\n                "),a("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),a("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),a("div",{staticClass:"example-split"}),e._v(" "),a("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[a("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?a("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),a("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)};n._withStripped=!0;a(215);var o=a(745),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide:function(){return this.hideCode},isVertical:function(){return this.vertical},codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style:function(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode:function(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$nextTick((function(){var t=e.$children[0].$children[0].$el.clientHeight,a=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=a,a<=t&&!e.isCodeHide&&(e.showMore=!1),e.demo_height=e.isCodeHide?30:t,e.ready=!0}))}}},s=(a(746),a(3)),r=Object(s.a)(i,n,[],!1,null,null,null);r.options.__file="website/components/demo/index.vue";t.a=r.exports},769:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i-article",[a("article",[a("h1",[e._v("DataVis")]),e._v(" "),a("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),a("p",[e._v("\n            通过 json 配置，快速生成一个数据报表页面，可以支持"),a("strong",[e._v("数据概览卡片")]),e._v("、"),a("strong",[e._v("可视化图表")]),e._v("、"),a("strong",[e._v("数据表格和留存表格")]),e._v("。\n        ")]),e._v(" "),a("alert",[a("strong",[e._v("如果你希望更灵活的控制图表的布局，可以直接使用"),a("code",[e._v("DataVisGroup")]),e._v("和"),a("code",[e._v("DataVisItem")])])]),e._v(" "),a("div",{staticClass:"api"},[a("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),a("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("title")]),e._v(" "),a("td",[e._v("标题")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip")]),e._v(" "),a("td",[e._v("提示信息")]),e._v(" "),a("td",[e._v("Object")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip.title")]),e._v(" "),a("td",[e._v("提示信息-标题")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选")])]),e._v(" "),a("tr",[a("td",[e._v("tip.content")]),e._v(" "),a("td",[e._v("提示信息-内容")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("可选"),a("strong",[e._v("内部使用了v-html，注意XSS攻击")])])]),e._v(" "),a("tr",[a("td",[e._v("rows")]),e._v(" "),a("td",[e._v("图表的集合")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("\n                            必选, 值的类型为[[DataVisGroup...], [DataVisGroup...]]。"),a("br"),e._v("\n                            rows 的元素是数组，每个元素都是一系 DataVisGroup 的集合，其内部的元素会在一行内展示。"),a("br"),e._v("\n                            假如现在有三个 DataVisGroup, 希望第一行展示两个，第二行展示一个，则数据结构为 [[DataVisGroup0, DataVisGroup1], [DataVisGroup2]]。\n                            "),a("br"),e._v(" "),a("strong",[a("a",{attrs:{href:"/#/doc/DataVisGroup"}},[e._v("查看DataVisGroup了解详细配置项")])])])])])])],1),e._v(" "),a("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"基础用法",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("DataVis",{attrs:{config:e.code.simple.data.config},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("config")]),e._v("，即可控制图表的布局方式。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])};n._withStripped=!0;var o=a(749),i=a(743),s=a(744),r=a(748),l={},d={title:"整体趋势",tip:{title:"规则",content:"规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容"},rows:[[{display:"inline",conditions:[{key:"100060",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],charts:[{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]},{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]},{type:"card",label:"年活跃",data:[{label:"活跃用户数",value:22246150,unit:"人",showChange:!1},{label:"日环比",value:-4.88,unit:"%",showChange:!0},{label:"周同比",value:-1.36,unit:"%",showChange:!0}]}]}],[{charts:[{type:"echart",label:"折线图-多条",dataset:[{source:[{date:"Mon",sells:120,score:60},{date:"Tue",sells:200,score:70},{date:"Wed",sells:150,score:80},{date:"Thu",sells:80,score:90},{date:"Fri",sells:70,score:100},{date:"Sat",sells:110,score:110},{date:"Sun",sells:130,score:120}]}],series:[{name:"销量",type:"line"},{name:"得分",type:"line"}],xAxis:{type:"category"},yAxis:{}},{type:"echart",label:"折线图-多条",dataset:[{source:[{date:"Mon",sells:120,score:60},{date:"Tue",sells:200,score:70},{date:"Wed",sells:150,score:80},{date:"Thu",sells:80,score:90},{date:"Fri",sells:70,score:100},{date:"Sat",sells:110,score:110},{date:"Sun",sells:130,score:120}]}],series:[{name:"销量",type:"line"},{name:"得分",type:"line"}],xAxis:{type:"category"},yAxis:{}}]},{charts:[{type:"echart",label:"柱状图",xAxis:{type:"category"},yAxis:{},dataset:{source:[{date:"Mon",data:120},{date:"Tue",data:200},{date:"Wed",data:150},{date:"Thu",data:80},{date:"Fri",data:70},{date:"Sat",data:110},{date:"Sun",data:130}]},series:[{type:"bar"}]},{type:"echart",label:"同一组数据多条线",xAxis:{type:"category"},yAxis:{},dataset:{source:[{date:"Mon",sells:120,score:60},{date:"Tue",sells:200,score:70},{date:"Wed",sells:150,score:80},{date:"Thu",sells:80,score:90},{date:"Fri",sells:70,score:100},{date:"Sat",sells:110,score:110},{date:"Sun",sells:130,score:120}]},series:[{name:"销量",type:"bar"},{name:"得分",type:"bar"}]}]}],[{chartGroup:[{label:"新增留存",type:"retain",columns:[{title:"日期",key:"date"},{title:"用户数",key:"user_number"},{title:"1天后",key:"1"},{title:"2天后",key:"2"},{title:"3天后",key:"3"},{title:"4天后",key:"4"},{title:"5天后",key:"5"},{title:"6天后",key:"6"},{title:"7天后",key:"7"}],data:[{date:"2018-01-10",user_number:123456789,1:90.7,2:"",3:"",4:"",5:"",6:"",7:""},{date:"2018-01-09",user_number:123456789,1:60.34,2:55.22,3:"",4:"",5:"",6:"",7:""},{date:"2018-01-08",user_number:123456789,1:90.34,2:85.29,3:74.39,4:"",5:"",6:"",7:""},{date:"2018-01-07",user_number:123456789,1:60,2:55.01,3:44.49,4:33.29,5:"",6:"",7:""},{date:"2018-01-06",user_number:123456789,1:60.29,2:55.47,3:54.57,4:53.29,5:52.98,6:"",7:""},{date:"2018-01-05",user_number:123456789,1:90,2:85.23,3:74.48,4:63.47,5:52.77,6:40.22,7:""},{date:"2018-01-04",user_number:123456789,1:90.78,2:85.36,3:74.78,4:63.26,5:52.97,6:40.46,7:38.76},{date:"2018-01-03",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2}]}]}],[{chartGroup:[{label:"活跃留存",type:"retain",api:"/chartRetainApi"}]}],[{chartGroup:[{label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,downloadAble:!1,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0},{title:"Money",key:"money",defaultShow:!0},{title:"Name-api-1",key:"name-1",defaultShow:!0},{title:"Age-api-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-api-1",key:"address-1",defaultShow:!0},{title:"Date-api-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112.22223,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112.22223},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:null,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112}]},{label:"数据表格API",type:"table",customColumns:["name","age","address"],api:"/chartTableApi"}]}]]};l.data={config:d},l.code="\n\nconst config = "+JSON.stringify(d,null,4)+';\n<template>\n    <DataVis\n        :config="config"\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            config\n        };\n    }\n};\n<\/script>\n';var c={simple:l},p={components:{iArticle:o.a,inAnchor:i.a,iCode:s.a,Demo:r.a},data:function(){return{code:c}},methods:{handleFieldChange:function(e,t){console.log(e,t)}}},h=a(3),u=Object(h.a)(p,n,[],!1,null,null,null);u.options.__file="website/page/main-components/DataVis/index.vue";var v=u.exports;t.default=v}}]);