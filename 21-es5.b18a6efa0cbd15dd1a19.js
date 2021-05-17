!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/lUI":function(i,c,r){"use strict";r.r(c),r.d(c,"NotificationDemoModule",function(){return T});var b=r("ofXK"),a=r("3Pt+"),l=r("8MG2"),s=r("6Y1o"),p=r("N+3j"),u=r("fXoL"),f=r("0G9f"),d=r("vAyd");function m(e,t){1&e&&(u.Ob(0,33),u.Bc(1," Danger "),u.Nb())}function g(e,t){1&e&&(u.Ob(0,33),u.Bc(1," Warning "),u.Nb())}function h(e,t){1&e&&(u.Ob(0,33),u.Bc(1," Info "),u.Nb())}function P(e,t){1&e&&(u.Ob(0,33),u.Bc(1," Success "),u.Nb())}function Q(e,t){if(1&e){var n=u.Rb();u.Ob(0,33),u.Bc(1," Complex notification "),u.Qb(2,"button",22),u.Xb("click",function(){return u.tc(n),u.Zb().log()}),u.Bc(3,"Log console"),u.Pb(),u.Nb()}}var y,B,v=((y=function(i){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(l,i);var c,r,b,a=o(l);function l(t){var n;return e(this,l),(n=a.call(this,"notification")).notificationService=t,n.codeExample='\n\n<button class="btn" (click)="openNotify(example, { timeout: clrExampleTimeout, notificationType: clrExampleType,\n    dismissable: clrExampleDismissable, progressbar: clrExampleProgressbar })">Show Notification</button>\n<ng-template #example>\n    <ng-container clr-notification-message>\n        Some Information\n        <button class="btn btn-info-outline" (click)="showAlert()">Show Alert</button>\n    </ng-container>\n</ng-template>\n',n.codeExampleTS='\nonClose(): void {\n    console.log("notification closed");\n}\n\nopenNotify(content, options): void {\n    this.notificationService.openNotification(content, options).result.then(this.onClose);\n}\n',n.codeExampleString='\n<button class="btn" (click)="openString()">Show Notification from String</button>\n',n.codeExampleStringTS='\nopenString(): void {\n    this.notificationService.openNotification("This is a string message", {progressbar: true, dismissable: true});\n}\n',n.clrExampleTimeout=2e3,n.clrExampleType="info",n.clrExampleDismissable=!0,n.clrExampleProgressbar=!0,n}return c=l,(r=[{key:"onClose",value:function(){console.log("notification closed")}},{key:"openNotify",value:function(e,t){this.notificationService.openNotification(e,t).result.then(this.onClose)}},{key:"openString",value:function(){this.notificationService.openNotification("This is a string message",{progressbar:!0,dismissable:!0})}},{key:"log",value:function(){console.log("log from notification")}}])&&t(c.prototype,r),b&&t(c,b),l}(p.a)).\u0275fac=function(e){return new(e||y)(u.Kb(s.z))},y.\u0275cmp=u.Eb({type:y,selectors:[["clr-notification-demo-docu"]],hostVars:4,hostBindings:function(e,t){2&e&&u.Cb("content-area",!0)("dox-content-panel",!0)},features:[u.yb([s.z]),u.wb],decls:182,vars:11,consts:[[3,"title"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"btn","btn-danger",3,"click"],["exampleDanger",""],[1,"btn","btn-warning",3,"click"],["exampleWarning",""],[1,"btn","btn-primary",3,"click"],["exampleInfo",""],[1,"btn","btn-success",3,"click"],["exampleSuccess",""],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[3,"clrCode"],[3,"clrCode","clrLanguage"],[1,"btn-group"],[1,"btn",3,"click"],["clrForm","","clrLayout","vertical"],["clrInput","","type","number","id","clr-timeout","name","clr-timeout",3,"ngModel","ngModelChange"],["clrSelect","","id","clr-type","name","clr-type",3,"ngModel","ngModelChange"],["value","info"],["value","warning"],["value","success"],["value","danger"],["clrCheckbox","","type","checkbox","name","clr-dismissable",3,"ngModel","ngModelChange"],["clrCheckbox","","type","checkbox","name","clr-progressbar",3,"ngModel","ngModelChange"],["example",""],["clr-notification-message",""]],template:function(e,t){if(1&e){var n=u.Rb();u.Qb(0,"clr-doc-wrapper",0),u.Qb(1,"article"),u.Qb(2,"h5",1),u.Bc(3,"Notifications are shown to inform the user of a particular event or completed action."),u.Pb(),u.Qb(4,"div",2),u.Qb(5,"h3"),u.Bc(6,"Notification Types"),u.Pb(),u.Qb(7,"p"),u.Bc(8," There are four different sub-types of notifications: error, warning, info, and success. "),u.Pb(),u.Qb(9,"p"),u.Qb(10,"b"),u.Bc(11,"Error"),u.Pb(),u.Lb(12,"br"),u.Bc(13," Reserved for errors, malfunctions, as well as critical issues like license expiration. "),u.Lb(14,"br"),u.Qb(15,"button",3),u.Xb("click",function(){u.tc(n);var e=u.pc(18);return t.openNotify(e,{timeout:3e3,notificationType:"danger",dismissable:!1,progressbar:!1})}),u.Bc(16,"Show Error Notification"),u.Pb(),u.zc(17,m,2,0,"ng-template",null,4,u.Ac),u.Pb(),u.Qb(19,"p"),u.Qb(20,"b"),u.Bc(21,"Warning"),u.Pb(),u.Lb(22,"br"),u.Bc(23," Reserved for warnings: a message that needs the user attention and aknowledgment but might not cause errors. "),u.Lb(24,"br"),u.Qb(25,"button",5),u.Xb("click",function(){u.tc(n);var e=u.pc(28);return t.openNotify(e,{timeout:3e3,notificationType:"warning",dismissable:!1,progressbar:!1})}),u.Bc(26,"Show Warning Notification"),u.Pb(),u.zc(27,g,2,0,"ng-template",null,6,u.Ac),u.Pb(),u.Qb(29,"p"),u.Qb(30,"b"),u.Bc(31,"Info"),u.Pb(),u.Lb(32,"br"),u.Bc(33," Provides info to users in context. Shouldn\u2019t be overused to replace regular content. "),u.Lb(34,"br"),u.Qb(35,"button",7),u.Xb("click",function(){u.tc(n);var e=u.pc(38);return t.openNotify(e,{timeout:3e3,notificationType:"info",dismissable:!1,progressbar:!1})}),u.Bc(36,"Show Info Notification"),u.Pb(),u.zc(37,h,2,0,"ng-template",null,8,u.Ac),u.Pb(),u.Qb(39,"p"),u.Qb(40,"b"),u.Bc(41,"Success"),u.Pb(),u.Lb(42,"br"),u.Bc(43," Reserved to provide to a static persistent success message. "),u.Lb(44,"br"),u.Qb(45,"button",9),u.Xb("click",function(){u.tc(n);var e=u.pc(48);return t.openNotify(e,{timeout:3e3,notificationType:"success",dismissable:!1,progressbar:!1})}),u.Bc(46,"Show Success Notification"),u.Pb(),u.zc(47,P,2,0,"ng-template",null,10,u.Ac),u.Pb(),u.Qb(49,"h2"),u.Bc(50,"Angular Component"),u.Pb(),u.Qb(51,"p"),u.Bc(52," Notifications will be opened by a service, not by including the notification component in the markup. That way it's possible to use the same markup for multiple notification instances. "),u.Pb(),u.Qb(53,"p"),u.Bc(54," The service will be called with two parameters. The first one defines the content of the notification as a template or string. The second parameter defines the options for the notification, described below. "),u.Pb(),u.Qb(55,"p"),u.Bc(56," The service will return a "),u.Qb(57,"code",11),u.Bc(58,"ClrNotificationRef"),u.Pb(),u.Bc(59," containing a promise "),u.Qb(60,"code",11),u.Bc(61,"result"),u.Pb(),u.Bc(62," which will get resolved after the notification was closed. "),u.Pb(),u.Qb(63,"h3"),u.Bc(64,"Summary of Options"),u.Pb(),u.Qb(65,"table",12),u.Qb(66,"thead"),u.Qb(67,"tr"),u.Qb(68,"th",13),u.Bc(69,"Input"),u.Pb(),u.Qb(70,"th",14),u.Bc(71,"Values"),u.Pb(),u.Qb(72,"th",15),u.Bc(73,"Default"),u.Pb(),u.Qb(74,"th",13),u.Bc(75,"Effect"),u.Pb(),u.Pb(),u.Pb(),u.Qb(76,"tbody"),u.Qb(77,"tr"),u.Qb(78,"td",13),u.Qb(79,"b"),u.Bc(80,"timeout"),u.Pb(),u.Qb(81,"div",16),u.Bc(82,"Type: Number"),u.Pb(),u.Qb(83,"div",16),u.Bc(84,"Default: 2000"),u.Pb(),u.Pb(),u.Qb(85,"td",14),u.Bc(86,"Javascript Number"),u.Pb(),u.Qb(87,"td",15),u.Bc(88,"2000"),u.Pb(),u.Qb(89,"td",13),u.Bc(90,"Time in ms when the notification will be closed automatically. 0 means it stays open until user closes it manually."),u.Pb(),u.Pb(),u.Qb(91,"tr"),u.Qb(92,"td",13),u.Qb(93,"b"),u.Bc(94,"notificationType"),u.Pb(),u.Qb(95,"div",16),u.Bc(96,"Type: String"),u.Pb(),u.Qb(97,"div",16),u.Bc(98,'Default: "info"'),u.Pb(),u.Pb(),u.Qb(99,"td",14),u.Bc(100,'"info", "warning", "success", "danger"'),u.Pb(),u.Qb(101,"td",15),u.Bc(102,'"info"'),u.Pb(),u.Qb(103,"td",13),u.Bc(104," Defines the type of notification. "),u.Pb(),u.Pb(),u.Qb(105,"tr"),u.Qb(106,"td",13),u.Qb(107,"b"),u.Bc(108,"dismissable"),u.Pb(),u.Qb(109,"div",16),u.Bc(110,"Type: Boolean"),u.Pb(),u.Qb(111,"div",16),u.Bc(112,"Default: false"),u.Pb(),u.Pb(),u.Qb(113,"td",14),u.Bc(114,"true, false"),u.Pb(),u.Qb(115,"td",15),u.Bc(116,"false"),u.Pb(),u.Qb(117,"td",13),u.Bc(118," Defines whether the notification is closable by the user manually. "),u.Pb(),u.Pb(),u.Qb(119,"tr"),u.Qb(120,"td",13),u.Qb(121,"b"),u.Bc(122,"progressbar"),u.Pb(),u.Qb(123,"div",16),u.Bc(124,"Type: Boolean"),u.Pb(),u.Qb(125,"div",16),u.Bc(126,"Default: false"),u.Pb(),u.Pb(),u.Qb(127,"td",14),u.Bc(128,"true, false"),u.Pb(),u.Qb(129,"td",15),u.Bc(130,"false"),u.Pb(),u.Qb(131,"td",13),u.Bc(132," Defines whether the progressbar (until notification closes automatically) will be shown. "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(133,"div",17),u.Qb(134,"h3",18),u.Bc(135,"Code & Examples"),u.Pb(),u.Qb(136,"h4"),u.Bc(137,"Notification from String"),u.Pb(),u.Qb(138,"p"),u.Bc(139,"For simple messages a string can be provided to the notification service."),u.Pb(),u.Lb(140,"clr-code-snippet",19),u.Lb(141,"clr-code-snippet",20),u.Qb(142,"div",21),u.Qb(143,"button",22),u.Xb("click",function(){return t.openString()}),u.Bc(144,"Show Notification from String"),u.Pb(),u.Pb(),u.Qb(145,"h4"),u.Bc(146,"Notification from ng-template"),u.Pb(),u.Qb(147,"p"),u.Bc(148,"For more complex notifications (including buttons etc.) an instance to a TemplateRef can be provided as content."),u.Pb(),u.Lb(149,"clr-code-snippet",19),u.Lb(150,"clr-code-snippet",20),u.Qb(151,"form",23),u.Qb(152,"clr-input-container"),u.Qb(153,"label"),u.Bc(154,"Timeout"),u.Pb(),u.Qb(155,"input",24),u.Xb("ngModelChange",function(e){return t.clrExampleTimeout=e}),u.Pb(),u.Pb(),u.Qb(156,"clr-select-container"),u.Qb(157,"label"),u.Bc(158,"Type"),u.Pb(),u.Qb(159,"select",25),u.Xb("ngModelChange",function(e){return t.clrExampleType=e}),u.Qb(160,"option",26),u.Bc(161,"Info"),u.Pb(),u.Qb(162,"option",27),u.Bc(163,"Warning"),u.Pb(),u.Qb(164,"option",28),u.Bc(165,"Success"),u.Pb(),u.Qb(166,"option",29),u.Bc(167,"Danger"),u.Pb(),u.Pb(),u.Pb(),u.Lb(168,"br"),u.Qb(169,"clr-checkbox-wrapper"),u.Qb(170,"label"),u.Bc(171,"Dismissable"),u.Pb(),u.Qb(172,"input",30),u.Xb("ngModelChange",function(e){return t.clrExampleDismissable=e}),u.Pb(),u.Pb(),u.Qb(173,"clr-checkbox-wrapper"),u.Qb(174,"label"),u.Bc(175,"Progressbar"),u.Pb(),u.Qb(176,"input",31),u.Xb("ngModelChange",function(e){return t.clrExampleProgressbar=e}),u.Pb(),u.Pb(),u.Pb(),u.Qb(177,"div",21),u.Qb(178,"button",22),u.Xb("click",function(){u.tc(n);var e=u.pc(181);return t.openNotify(e,{timeout:t.clrExampleTimeout,notificationType:t.clrExampleType,dismissable:t.clrExampleDismissable,progressbar:t.clrExampleProgressbar})}),u.Bc(179,"Show Notification"),u.Pb(),u.Pb(),u.zc(180,Q,4,0,"ng-template",null,32,u.Ac),u.Pb(),u.Pb(),u.Pb()}2&e&&(u.hc("title",t.title),u.zb(140),u.hc("clrCode",t.codeExampleString),u.zb(1),u.hc("clrCode",t.codeExampleStringTS)("clrLanguage","typescript"),u.zb(8),u.hc("clrCode",t.codeExample),u.zb(1),u.hc("clrCode",t.codeExampleTS)("clrLanguage","typescript"),u.zb(5),u.hc("ngModel",t.clrExampleTimeout),u.zb(4),u.hc("ngModel",t.clrExampleType),u.zb(13),u.hc("ngModel",t.clrExampleDismissable),u.zb(4),u.hc("ngModel",t.clrExampleProgressbar))},directives:[f.a,d.a,a.A,a.o,a.p,l.y,l.H,l.F,l.G,s.U,a.t,a.b,l.E,a.n,a.q,l.X,a.x,l.W,a.s,a.B,l.j,a.a,l.h],styles:["#clr-type[_ngcontent-%COMP%]{width:160px}"]}),y),w=r("JsA7"),x=r("tyNb"),S=r("XPsC"),T=((B=function t(){e(this,t)}).\u0275fac=function(e){return new(e||B)},B.\u0275mod=u.Ib({type:B}),B.\u0275inj=u.Hb({imports:[[b.c,l.a,s.b,S.a,w.a,x.g.forChild([{path:"",component:v}]),a.h]]}),B)}}])}();