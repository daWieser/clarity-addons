(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{bVhy:function(t,n,e){"use strict";e.r(n),e.d(n,"BasepageLayoutDemoModule",function(){return Q});var o=e("ofXK"),c=e("tyNb"),i=e("8MG2"),r=e("6Y1o"),a=e("fXoL"),l=e("2HPr");const s=["leftContentPanel"],b=["rightContentPanel"];function h(t,n){if(1&t&&a.Lb(0,"clr-history-pinned",7),2&t){const t=a.Zb();a.hc("clrUsername","admin")("clrContext",t.context)("clrDomain","porscheinformatik.github.io")}}function u(t,n){1&t&&(a.Qb(0,"span"),a.Bc(1,"Base Pagelayout"),a.Pb())}function f(t,n){1&t&&(a.Qb(0,"span"),a.Bc(1,"Command bar"),a.Pb())}function m(t,n){1&t&&(a.Qb(0,"span"),a.Bc(1,"Content Panel"),a.Pb())}function g(t,n){if(1&t&&a.Lb(0,"clr-history",8),2&t){const t=a.Zb();a.hc("clrUsername","admin")("clrContext",t.context)("clrDomain","porscheinformatik.github.io")}}function d(t,n){1&t&&(a.Qb(0,"clr-button"),a.Bc(1,"Command1"),a.Pb())}function p(t,n){1&t&&(a.Qb(0,"clr-button"),a.Bc(1,"Command2"),a.Pb())}function P(t,n){if(1&t){const t=a.Rb();a.Qb(0,"clr-button",13),a.Xb("click",function(){return a.tc(t),a.Zb(2).toggleRightPanel()}),a.Bc(1,"Show/Hide Right"),a.Pb()}}function C(t,n){if(1&t){const t=a.Rb();a.Qb(0,"clr-button",14),a.Xb("click",function(){return a.tc(t),a.Zb(2).toggleLeftPanel()}),a.Bc(1,"Show/Hide Left "),a.Pb()}2&t&&a.hc("clrInMenu",!0)}function w(t,n){if(1&t&&(a.Qb(0,"clr-button-group",9),a.zc(1,d,2,0,"clr-button",2),a.zc(2,p,2,0,"clr-button",2),a.zc(3,P,2,0,"clr-button",10),a.zc(4,C,2,1,"clr-button",11),a.Qb(5,"clr-button",12),a.Bc(6,"Command3"),a.Pb(),a.Pb()),2&t){const t=a.Zb();a.hc("clrMenuPosition","bottom-right"),a.zb(1),a.hc("ngIf",!t.withContentPanel),a.zb(1),a.hc("ngIf",!t.withContentPanel),a.zb(1),a.hc("ngIf",t.withContentPanel),a.zb(1),a.hc("ngIf",t.withContentPanel),a.zb(1),a.hc("clrInMenu",!0)}}function y(t,n){if(1&t&&(a.Qb(0,"span"),a.Bc(1),a.Pb()),2&t){const t=a.Zb(2);a.zb(1),a.Dc(" for submenu ",t.id,"")}}function z(t,n){if(1&t&&(a.Qb(0,"div",15),a.Qb(1,"div",16),a.Bc(2," This is the page content"),a.zc(3,y,2,1,"span",2),a.Pb(),a.Pb()),2&t){const t=a.Zb();a.zb(3),a.hc("ngIf",t.id)}}function I(t,n){1&t&&(a.Qb(0,"clr-content-panel-container"),a.Qb(1,"h2"),a.Bc(2,"Content Area"),a.Pb(),a.Qb(3,"clr-content-panel",17,18),a.Ob(5,19),a.Bc(6,"Left Content Panel"),a.Nb(),a.Ob(7,20),a.Bc(8,"Content"),a.Nb(),a.Pb(),a.Qb(9,"clr-content-panel",null,21),a.Ob(11,19),a.Bc(12,"Right Content Panel"),a.Nb(),a.Ob(13,20),a.Bc(14,"Content"),a.Nb(),a.Pb(),a.Pb())}let D=(()=>{class t{constructor(t,n){this.router=t,this.historyService=n,this.withCommandBar=!1,this.withContentPanel=!1,this.withHistory=!1,this.context={applicationName:"ADDONS"}}ngOnInit(){this.withCommandBar=this.collectRouteData("withCommand")[0],this.withContentPanel=this.collectRouteData("withPanel")[0],this.withHistory=this.collectRouteData("withHistory")[0],this.id=this.collectRouteData("id")[0],this.withHistory&&(this.historyService.addHistoryEntry({username:"admin",pageName:"DocPage",url:"https://porscheinformatik.github.io/clarity-addons/documentation/latest/get-started",title:"DocPage",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io"),this.historyService.addHistoryEntry({username:"admin",pageName:"SourcePage",url:"https://github.com/porscheinformatik/clarity-addons",title:"SourcePage",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io"),this.historyService.addHistoryEntry({username:"admin",pageName:"GitHub",url:"https://github.com/porscheinformatik/clarity-addons",title:"GitHub",context:{applicationName:"ADDONS"}},"porscheinformatik.github.io"),this.historyService.setHistoryPinned("admin",!0,"porscheinformatik.github.io"))}toggleLeftPanel(){this.leftContentPanel.toggle()}toggleRightPanel(){this.rightContentPanel.toggle()}collectRouteData(t){let n=this.router.routerState.snapshot.root,e=[];for(;n;)n.data&&n.data[t]&&e.push(n.data[t]),n=n.firstChild;return e}}return t.\u0275fac=function(n){return new(n||t)(a.Kb(c.d),a.Kb(r.r))},t.\u0275cmp=a.Eb({type:t,selectors:[["clr-basepage-layout-demo"]],viewQuery:function(t,n){if(1&t&&(a.Gc(s,1),a.Gc(b,1)),2&t){let t;a.oc(t=a.Yb())&&(n.leftContentPanel=t.first),a.oc(t=a.Yb())&&(n.rightContentPanel=t.first)}},features:[a.yb([r.r])],decls:14,vars:8,consts:[[3,"clrUsername","clrContext","clrDomain",4,"ngIf"],[1,"content-header"],[4,"ngIf"],[1,"command-bar"],["class","history-bar",3,"clrUsername","clrContext","clrDomain",4,"ngIf"],[3,"clrMenuPosition",4,"ngIf"],["class","content-container",4,"ngIf"],[3,"clrUsername","clrContext","clrDomain"],[1,"history-bar",3,"clrUsername","clrContext","clrDomain"],[3,"clrMenuPosition"],[3,"click",4,"ngIf"],[3,"clrInMenu","click",4,"ngIf"],[3,"clrInMenu"],[3,"click"],[3,"clrInMenu","click"],[1,"content-container"],[1,"content-area"],["clrDirection","left"],["leftContentPanel",""],["clr-content-panel-title",""],["clr-content-panel-content",""],["rightContentPanel",""]],template:function(t,n){1&t&&(a.Qb(0,"clr-main-container"),a.Lb(1,"clr-demo-menu"),a.zc(2,h,1,3,"clr-history-pinned",0),a.Qb(3,"div",1),a.Lb(4,"clr-back-button"),a.Qb(5,"h2"),a.zc(6,u,2,0,"span",2),a.zc(7,f,2,0,"span",2),a.zc(8,m,2,0,"span",2),a.Pb(),a.Qb(9,"div",3),a.zc(10,g,1,3,"clr-history",4),a.zc(11,w,7,6,"clr-button-group",5),a.Pb(),a.Pb(),a.zc(12,z,4,1,"div",6),a.zc(13,I,15,0,"clr-content-panel-container",2),a.Pb()),2&t&&(a.zb(2),a.hc("ngIf",n.withHistory),a.zb(4),a.hc("ngIf",!n.withCommandBar&&!n.withContentPanel),a.zb(1),a.hc("ngIf",n.withCommandBar&&!n.withContentPanel),a.zb(1),a.hc("ngIf",n.withCommandBar&&n.withContentPanel),a.zb(2),a.hc("ngIf",n.withHistory),a.zb(1),a.hc("ngIf",n.withCommandBar),a.zb(1),a.hc("ngIf",!n.withContentPanel),a.zb(1),a.hc("ngIf",n.withContentPanel))},directives:[i.I,i.cb,l.a,o.q,r.c,r.q,r.p,i.g,i.f,r.h,r.g],encapsulation:2}),t})();var B=e("fTK2");let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({imports:[[o.c,i.a,B.a,c.g.forChild([{path:"",component:D,outlet:"fullpage"}]),r.b]]}),t})()}}]);