(window.webpackJsonp=window.webpackJsonp||[]).push([[4,14],{"3Q5D":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),o=n("zdiy"),l=n.n(o),s=n("NXk7"),c=n("HJRA"),u=n("vHOe"),d=function(e){function t(t){var n=e.call(this,t)||this;return n.importAll=function(){n.importNext(0)},n.importNext=function(e){var t=n.state.dashboards;return n.import(t[e],!0).then(function(){return e+1<t.length?new Promise(function(t){setTimeout(function(){n.importNext(e+1).then(function(){t()})},500)}):Promise.resolve()})},n.import=function(e,t){var r=n.props,i=r.plugin,o=r.datasource,u={pluginId:i.id,path:e.path,overwrite:t,inputs:[]};return o&&u.inputs.push({name:"*",type:"datasource",pluginId:o.meta.id,value:o.name}),Object(s.b)().post("/api/dashboards/import",u).then(function(t){c.a.emit("alert-success",["Dashboard Imported",e.title]),l()(e,t),n.setState({dashboards:a.h(n.state.dashboards)})})},n.remove=function(e){Object(s.b)().delete("/api/dashboards/"+e.importedUri).then(function(){e.imported=!1,n.setState({dashboards:a.h(n.state.dashboards)})})},n.state={loading:!0,dashboards:[]},n}return a.c(t,e),t.prototype.componentDidMount=function(){return a.b(this,void 0,void 0,function(){var e,t=this;return a.d(this,function(n){return e=this.props.plugin.id,Object(s.b)().get("/api/plugins/"+e+"/dashboards").then(function(e){t.setState({dashboards:e,loading:!1})}),[2]})})},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.dashboards;return t?i.a.createElement("div",null,"loading..."):n&&n.length?i.a.createElement("div",{className:"gf-form-group"},i.a.createElement(u.a,{dashboards:n,onImport:this.import,onRemove:this.remove})):i.a.createElement("div",null,"No dashboards are included with this plugin")},t}(r.PureComponent)},"4HI1":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),o=n("BkRI"),l=n.n(o),s=n("zdiy"),c=n.n(s),u=n("kDLi"),d=n("Obii"),p=n("t8hP"),m=n("NXk7"),f=n("PAeb"),h=function(e){function t(t){var n=e.call(this,t)||this;return n.preUpdateHook=function(){return Promise.resolve()},n.postUpdateHook=function(){return Promise.resolve()},n.update=function(){var e=n.model.id;n.preUpdateHook().then(function(){var t=c()({enabled:n.model.enabled,pinned:n.model.pinned,jsonData:n.model.jsonData,secureJsonData:n.model.secureJsonData},{});return Object(m.b)().post("/api/plugins/"+e+"/settings",t)}).then(n.postUpdateHook).then(function(e){window.location.href=window.location.href})},n.setPreUpdateHook=function(e){n.preUpdateHook=e},n.setPostUpdateHook=function(e){n.postUpdateHook=e},n.importDashboards=function(){return Object(d.deprecationWarning)("AppConfig","importDashboards()"),Promise.resolve()},n.enable=function(){n.model.enabled=!0,n.model.pinned=!0,n.update()},n.disable=function(){n.model.enabled=!1,n.model.pinned=!1,n.update()},n.state={angularCtrl:null,refresh:0},n}return a.c(t,e),t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({refresh:e.state.refresh+1})},5)},t.prototype.componentDidUpdate=function(e){if(this.element&&!this.state.angularCtrl){this.model=l()(this.props.app.meta);var t={ctrl:this},n=Object(p.getAngularLoader)().load(this.element,t,'<plugin-component type="app-config-ctrl"></plugin-component>');this.setState({angularCtrl:n})}},t.prototype.render=function(){var e=this,t=this.model,n=Object(f.css)({marginRight:"8px"});return i.a.createElement("div",null,i.a.createElement("div",{ref:function(t){return e.element=t}}),i.a.createElement("br",null),i.a.createElement("br",null),t&&i.a.createElement("div",{className:"gf-form"},!t.enabled&&i.a.createElement(u.Button,{variant:"primary",onClick:this.enable,className:n},"Enable"),t.enabled&&i.a.createElement(u.Button,{variant:"primary",onClick:this.update,className:n},"Update"),t.enabled&&i.a.createElement(u.Button,{variant:"danger",onClick:this.disable,className:n},"Disable")))},t}(r.PureComponent)},"OG+f":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),o=n("Obii"),l=n("t8hP"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isError:!1,isLoading:!1,help:""},t.loadHelp=function(){var e=t.props,n=e.plugin,a=e.type;t.setState({isLoading:!0}),Object(l.getBackendSrv)().get("/api/plugins/"+n.id+"/markdown/"+a).then(function(e){var n=Object(o.renderMarkdown)(e);""===e&&"help"===a?t.setState({isError:!1,isLoading:!1,help:t.constructPlaceholderInfo()}):t.setState({isError:!1,isLoading:!1,help:n})}).catch(function(){t.setState({isError:!0,isLoading:!1})})},t}return a.c(t,e),t.prototype.componentDidMount=function(){this.loadHelp()},t.prototype.constructPlaceholderInfo=function(){return"No plugin help or readme markdown file was found"},t.prototype.render=function(){this.props.type;var e=this.state,t=e.isError,n=e.isLoading,a=e.help;return n?i.a.createElement("h2",null,"Loading help..."):t?i.a.createElement("h3",null,"'Error occurred when loading help'"):i.a.createElement("div",{className:"markdown-html",dangerouslySetInnerHTML:{__html:a}})},t}(r.PureComponent)},Xzuj:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"getAppPluginPageError",function(){return h});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),o=n("0cfB"),l=n("/MKj"),s=n("ZGyg"),c=n("okuo"),u=n("Vw/f"),d=n("kDLi"),p=n("kYMR"),m=n("lJbD"),f=n("HJRA");function h(e){return e?e.type!==d.PluginType.app?"Plugin must be an app":e.enabled?null:"Application Not Enabled":"Unknown Plugin"}var g=function(e){function t(t){var n=e.call(this,t)||this;return n.onNavChanged=function(e){n.setState({nav:e})},n.state={loading:!0,nav:Object(p.getLoadingNav)()},n}return a.c(t,e),t.prototype.componentDidMount=function(){return a.b(this,void 0,void 0,function(){var e,t,n=this;return a.d(this,function(a){switch(a.label){case 0:e=this.props.pluginId,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Object(c.a)(e).then(function(e){var t=h(e);return t?(f.a.emit("alert-error",[t]),n.setState({nav:Object(m.b)(t)}),null):Object(u.a)(e)})];case 2:return t=a.sent(),this.setState({plugin:t,loading:!1}),[3,4];case 3:return a.sent(),this.setState({plugin:null,loading:!1,nav:Object(m.a)()}),[3,4];case 4:return[2]}})})},t.prototype.render=function(){var e=this.props,t=e.path,n=e.query,a=this.state,r=a.loading,o=a.plugin,l=a.nav;return o&&!o.root?i.a.createElement("div",null,"No Root App"):i.a.createElement(s.a,{navModel:l},i.a.createElement(s.a.Contents,{isLoading:r},!r&&o&&i.a.createElement(o.root,{meta:o.meta,query:n,path:t,onNavChanged:this.onNavChanged})))},t}(r.Component);t.default=Object(o.hot)(e)(Object(l.b)(function(e){return{pluginId:e.location.routeParams.pluginId,slug:e.location.routeParams.slug,query:e.location.query,path:e.location.path}})(g))}.call(this,n("3UD+")(e))},kYMR:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"getLoadingNav",function(){return N});var a=n("mrSG"),r=n("q1tI"),i=n.n(r),o=n("0cfB"),l=n("/MKj"),s=n("J2m7"),c=n.n(s),u=n("GQ3c"),d=n("kDLi"),p=n("ZGyg"),m=n("okuo"),f=n("Vw/f"),h=n("lJbD"),g=n("OG+f"),b=n("4HI1"),v=n("3Q5D"),y=n("HJRA"),E=n("ZFWI"),k=n("M6S6");function N(){var e={text:"Loading...",icon:"icon-gf icon-gf-panel"};return{node:e,main:e}}function P(e){return Object(m.a)(e).then(function(t){return t.type===d.PluginType.app?Object(f.a)(t):t.type===d.PluginType.datasource?Object(f.b)(t):t.type===d.PluginType.panel?Object(f.c)(e).then(function(t){return Object(m.a)(e).then(function(e){return t.meta=a.a({},e,t.meta),t})}):t.type===d.PluginType.renderer?Promise.resolve({meta:t}):Promise.reject("Unknown Plugin type: "+t.type)})}var I="readme",S="dashboards",w="config",j=function(e){function t(t){var n=e.call(this,t)||this;return n.showUpdateInfo=function(){y.a.emit("show-modal",{src:"public/app/features/plugins/partials/update_instructions.html",model:n.state.plugin.meta})},n.state={loading:!0,nav:N(),defaultPage:I},n}return a.c(t,e),t.prototype.componentDidMount=function(){return a.b(this,void 0,void 0,function(){var e,t,n,r,i,o,l,s,u,p;return a.d(this,function(m){switch(m.label){case 0:return e=this.props,t=e.pluginId,n=e.path,r=e.query,i=e.$contextSrv,o=E.a.appSubUrl,[4,P(t)];case 1:return(l=m.sent())?(s=function(e,t,n,r,i){var o,l,s,u=e.meta,p=[];p.push({text:"Readme",icon:"fa fa-fw fa-file-text-o",url:""+t+n+"?page="+I,id:I});if(i&&u.type===d.PluginType.app){if(e.angularConfigCtrl&&(p.push({text:"Config",icon:"gicon gicon-cog",url:""+t+n+"?page="+w,id:w}),s=w),e.configPages)try{for(var m=a.i(e.configPages),f=m.next();!f.done;f=m.next()){var h=f.value;p.push({text:h.title,icon:h.icon,url:n+"?page="+h.id,id:h.id}),s||(s=h.id)}}catch(e){o={error:e}}finally{try{f&&!f.done&&(l=m.return)&&l.call(m)}finally{if(o)throw o.error}}c()(u.includes,{type:d.PluginIncludeType.dashboard})&&p.push({text:"Dashboards",icon:"gicon gicon-dashboard",url:""+t+n+"?page="+S,id:S})}s||(s=p[0].id);var g={text:u.name,img:u.info.logos.large,subTitle:u.info.author.name,breadcrumbs:[{title:"Plugins",url:"/plugins"}],url:""+t+n,children:O(r.page,p,s)};return{defaultPage:s,nav:{node:g,main:g}}}(l,o,n,r,i.hasRole("Admin")),u=s.defaultPage,p=s.nav,this.setState({loading:!1,plugin:l,defaultPage:u,nav:p}),[2]):(this.setState({loading:!1,nav:Object(h.a)()}),[2])}})})},t.prototype.componentDidUpdate=function(e){var t=e.query.page,n=this.props.query.page;if(t!==n){var r=this.state,i=r.nav,o=r.defaultPage,l=a.a({},i.node,{children:O(n,i.node.children,o)});this.setState({nav:{node:l,main:l}})}},t.prototype.renderBody=function(){var e,t,n=this.props.query,r=this.state,o=r.plugin,l=r.nav;if(!o)return i.a.createElement(k.a,{severity:u.AppNotificationSeverity.Error,title:"Plugin Not Found"});var s=l.main.children.find(function(e){return e.active});if(s){if(o.configPages)try{for(var c=a.i(o.configPages),p=c.next();!p.done;p=c.next()){var m=p.value;if(m.id===s.id)return i.a.createElement(m.body,{plugin:o,query:n})}}catch(t){e={error:t}}finally{try{p&&!p.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}if(o.meta.type===d.PluginType.app){if(s.id===S)return i.a.createElement(v.a,{plugin:o.meta});if(s.id===w&&o.angularConfigCtrl)return i.a.createElement(b.a,{app:o})}}return i.a.createElement(g.a,{plugin:o.meta,type:"help"})},t.prototype.renderVersionInfo=function(e){return e.info.version?i.a.createElement("section",{className:"page-sidebar-section"},i.a.createElement("h4",null,"Version"),i.a.createElement("span",null,e.info.version),e.hasUpdate&&i.a.createElement("div",null,i.a.createElement(d.Tooltip,{content:e.latestVersion,theme:"info",placement:"top"},i.a.createElement("a",{href:"#",onClick:this.showUpdateInfo},"Update Available!")))):null},t.prototype.renderSidebarIncludeBody=function(e){if(e.type===d.PluginIncludeType.page){var t=this.state.plugin.meta.id,n=e.name.toLowerCase().replace(" ","-");return i.a.createElement("a",{href:"plugins/"+t+"/page/"+n},i.a.createElement("i",{className:C(e.type)}),e.name)}return i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:C(e.type)}),e.name)},t.prototype.renderSidebarIncludes=function(e){var t=this;return e&&e.length?i.a.createElement("section",{className:"page-sidebar-section"},i.a.createElement("h4",null,"Includes"),i.a.createElement("ul",{className:"ui-list plugin-info-list"},e.map(function(e){return i.a.createElement("li",{className:"plugin-info-list-item",key:e.name},t.renderSidebarIncludeBody(e))}))):null},t.prototype.renderSidebarDependencies=function(e){return e?i.a.createElement("section",{className:"page-sidebar-section"},i.a.createElement("h4",null,"Dependencies"),i.a.createElement("ul",{className:"ui-list plugin-info-list"},i.a.createElement("li",{className:"plugin-info-list-item"},i.a.createElement("img",{src:"public/img/grafana_icon.svg"}),"Grafana ",e.grafanaVersion),e.plugins&&e.plugins.map(function(e){return i.a.createElement("li",{className:"plugin-info-list-item",key:e.name},i.a.createElement("i",{className:C(e.type)}),e.name," ",e.version)}))):null},t.prototype.renderSidebarLinks=function(e){return e.links&&e.links.length?i.a.createElement("section",{className:"page-sidebar-section"},i.a.createElement("h4",null,"Links"),i.a.createElement("ul",{className:"ui-list"},e.links.map(function(e){return i.a.createElement("li",{key:e.url},i.a.createElement("a",{href:e.url,className:"external-link",target:"_blank",rel:"noopener"},e.name))}))):null},t.prototype.render=function(){var e=this.state,t=e.loading,n=e.nav,a=e.plugin,r=this.props.$contextSrv.hasRole("Admin");return i.a.createElement(p.a,{navModel:n},i.a.createElement(p.a.Contents,{isLoading:t},!t&&i.a.createElement("div",{className:"sidebar-container"},i.a.createElement("div",{className:"sidebar-content"},a.loadError&&i.a.createElement(k.a,{severity:u.AppNotificationSeverity.Error,title:"Error Loading Plugin",body:i.a.createElement(i.a.Fragment,null,"Check the server startup logs for more information. ",i.a.createElement("br",null),"If this plugin was loaded from git, make sure it was compiled.")}),this.renderBody()),i.a.createElement("aside",{className:"page-sidebar"},a&&i.a.createElement("section",{className:"page-sidebar-section"},this.renderVersionInfo(a.meta),r&&this.renderSidebarIncludes(a.meta.includes),this.renderSidebarDependencies(a.meta.dependencies),this.renderSidebarLinks(a.meta.info))))))},t}(r.PureComponent);function O(e,t,n){var r=!1,i=e||n,o=t.map(function(e){var t=!r&&i===e.id;return t&&(r=!0),a.a({},e,{active:t})});return r||(o[0].active=!0),o}function C(e){switch(e){case"datasource":return"gicon gicon-datasources";case"panel":return"icon-gf icon-gf-panel";case"app":return"icon-gf icon-gf-apps";case"page":return"icon-gf icon-gf-endpoint-tiny";case"dashboard":return"gicon gicon-dashboard";default:return"icon-gf icon-gf-apps"}}t.default=Object(o.hot)(e)(Object(l.b)(function(e){return{pluginId:e.location.routeParams.pluginId,query:e.location.query,path:e.location.path}})(j))}.call(this,n("3UD+")(e))},vHOe:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.dashboards,n=e.onImport,a=e.onRemove;return r.a.createElement("table",{className:"filter-table"},r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{key:e.dashboardId+"-"+t},r.a.createElement("td",{className:"width-1"},r.a.createElement("i",{className:"gicon gicon-dashboard"})),r.a.createElement("td",null,e.imported?r.a.createElement("a",{href:e.importedUrl},e.title):r.a.createElement("span",null,e.title)),r.a.createElement("td",{style:{textAlign:"right"}},e.imported?r.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(e,!0)}},function(e){return e.revision!==e.importedRevision?"Update":"Re-import"}(e)):r.a.createElement("button",{className:"btn btn-secondary btn-small",onClick:function(){return n(e,!1)}},"Import"),e.imported&&r.a.createElement("button",{className:"btn btn-danger btn-small",onClick:function(){return a(e)}},r.a.createElement("i",{className:"fa fa-trash"}))))})))}}}]);
//# sourceMappingURL=AppRootPage.e402a76d33a475eefbc0.js.map