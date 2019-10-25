(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{sz7o:function(e,t,a){"use strict";a.r(t);var r=a("kDLi"),n=a("mrSG"),o=a("Obii"),i=function(e){function t(t){var a=e.call(this,t)||this;return a.data=[],t.jsonData.data&&(a.data=t.jsonData.data.map(function(e){return Object(o.toDataFrame)(e)})),a}return n.c(t,e),t.prototype.getQueryDisplayText=function(e){return e.data?"Panel Data: "+l(e.data):"Shared Data From: "+this.name+" ("+l(this.data)+")"},t.prototype.metricFindQuery=function(e,t){var a=this;return new Promise(function(e,t){var r,o,i,s,l=[];try{for(var u=n.i(a.data),d=u.next();!d.done;d=u.next()){var c=d.value;try{for(var h=(i=void 0,n.i(c.fields)),f=h.next();!f.done;f=h.next()){var p=f.value;l.push({text:p.name})}}catch(e){i={error:e}}finally{try{f&&!f.done&&(s=h.return)&&s.call(h)}finally{if(i)throw i.error}}}}catch(e){r={error:e}}finally{try{d&&!d.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}e(l)})},t.prototype.query=function(e){var t,a,r=[];try{for(var i=n.i(e.targets),s=i.next();!s.done;s=i.next()){var l=s.value,u=this.data;l.data&&(u=l.data.map(function(e){return Object(o.toDataFrame)(e)}));for(var d=0;d<u.length;d++)r.push(n.a({},u[d],{refId:l.refId}))}}catch(e){t={error:e}}finally{try{s&&!s.done&&(a=i.return)&&a.call(i)}finally{if(t)throw t.error}}return Promise.resolve({data:r})},t.prototype.testDatasource=function(){var e=this;return new Promise(function(t,a){var r,o,i=0,s=e.data.length+" Series:";try{for(var l=n.i(e.data),u=l.next();!u.done;u=l.next()){var d=u.value,c=d.length;s+=" ["+d.fields.length+" Fields, "+c+" Rows]",i+=c}}catch(e){r={error:e}}finally{try{u&&!u.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}i>0&&t({status:"success",message:s}),a({status:"error",message:"No Data Entered"})})},t}(r.DataSourceApi);function s(e){return e&&e.fields&&e.fields.length?e.hasOwnProperty("length")?e.length:e.fields[0].values.length:0}function l(e){if(!e||!e.length)return"";if(e.length>1){var t=e.reduce(function(e,t){return e+s(t)},0);return e.length+" Series, "+t+" Rows"}var a=e[0];if(!a.fields)return"Missing Fields";var r=s(a);return a.fields.length+" Fields, "+r+" Rows"}var u=a("q1tI"),d=a.n(u);function c(e){return e&&e.length?Object(o.toCSV)(e.map(function(t){return Object(o.toDataFrame)(e)})):""}var h=[{value:"panel",label:"Panel",description:"Save data in the panel configuration."},{value:"shared",label:"Shared",description:"Save data in the shared datasource object."}],f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={text:""},t.onSourceChange=function(e){var a=t.props,r=a.datasource,i=a.query,s=a.onChange,l=a.onRunQuery,u=void 0;if("panel"===e.value){if(i.data)return;(u=n.h(r.data))||(u=[new o.MutableDataFrame]),t.setState({text:Object(o.toCSV)(u)})}s(n.a({},i,{data:u})),l()},t.onSeriesParsed=function(e,a){var r=t.props,i=r.query,s=r.onChange,l=r.onRunQuery;t.setState({text:a}),e||(e=[new o.MutableDataFrame]),s(n.a({},i,{data:e})),l()},t}return n.c(t,e),t.prototype.onComponentDidMount=function(){var e=c(this.props.query.data);this.setState({text:e})},t.prototype.render=function(){var e=this.props,t=e.datasource,a=e.query,n=t.id,o=t.name,i=this.state.text,s=a.data?h[0]:h[1];return d.a.createElement("div",null,d.a.createElement("div",{className:"gf-form"},d.a.createElement(r.FormLabel,{width:4},"Data"),d.a.createElement(r.Select,{width:6,options:h,value:s,onChange:this.onSourceChange}),d.a.createElement("div",{className:"btn btn-link"},a.data?l(a.data):d.a.createElement("a",{href:"datasources/edit/"+n+"/"},o,": ",l(t.data),"   ",d.a.createElement("i",{className:"fa fa-pencil-square-o"})))),a.data&&d.a.createElement(r.TableInputCSV,{text:i,onSeriesParsed:this.onSeriesParsed,width:"100%",height:200}))},t}(u.PureComponent),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={text:""},t.onSeriesParsed=function(e,a){var r=t.props,i=r.options,s=r.onOptionsChange;e||(e=[new o.MutableDataFrame]);var l=n.a({},i.jsonData,{data:e});s(n.a({},i,{jsonData:l})),t.setState({text:a})},t}return n.c(t,e),t.prototype.componentDidMount=function(){var e=this.props.options;if(e.jsonData.data){var t=c(e.jsonData.data);this.setState({text:t})}},t.prototype.render=function(){var e=this.state.text;return d.a.createElement("div",null,d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("h4",null,"Shared Data:"),d.a.createElement("span",null,"Enter CSV"),d.a.createElement(r.TableInputCSV,{text:e,onSeriesParsed:this.onSeriesParsed,width:"100%",height:200})),d.a.createElement("div",{className:"grafana-info-box"},"This data is stored in the datasource json and is returned to every user in the initial request for any datasource. This is an appropriate place to enter a few values. Large datasets will perform better in other datasources.",d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("b",null,"NOTE:")," Changes to this data will only be reflected after a browser refresh."))},t}(u.PureComponent);a.d(t,"plugin",function(){return v});var v=new r.DataSourcePlugin(i).setConfigEditor(p).setQueryEditor(f)}}]);
//# sourceMappingURL=inputDatasourcePlugin.e402a76d33a475eefbc0.js.map