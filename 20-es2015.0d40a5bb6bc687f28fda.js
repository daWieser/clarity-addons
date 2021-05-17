(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{XjFn:function(e,n,t){"use strict";t.r(n),t.d(n,"NavigationDemoModule",function(){return h});var a=t("ofXK"),i=t("8MG2"),o=t("N+3j"),c=t("fXoL"),l=t("0G9f"),b=t("tyNb"),r=t("vAyd");let s=(()=>{class e extends o.a{constructor(){super("navigation"),this.contentPanelCodeExample='\n<div class="btn-group">\n    <button class="btn" (click)="leftContentPanel.toggle()">Show/Hide Left</button>\n    <button class="btn" (click)="rightContentPanel.toggle()">Show/Hide Right</button>\n</div>\n\n<clr-content-panel-container>\n    <h2>This is the page title</h2>\n    <span>This is the page content</span>\n    <clr-content-panel #leftContentPanel clrDirection="left">\n        <ng-container clr-content-panel-title>Left Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n    <clr-content-panel #rightContentPanel>\n        <ng-container clr-content-panel-title>Right Content Panel</ng-container>\n        <ng-container clr-content-panel-content>Content</ng-container>\n    </clr-content-panel>\n</clr-content-panel-container>\n',this.mainNavHtmlExample='\n<clr-main-nav-group clrTitle="Layouts" routerLinkActive="active">\n    <a class="nav-link" routerLink="/full-page-layouts/basepage-layout" routerLinkActive="active" clrMainNavGroupItem>Base Pagelayout</a>\n    <a class="nav-link" routerLink="/full-page-layouts/sidebarpage-layout" routerLinkActive="active" clrMainNavGroupItem>Sidebar Pagelayout</a>\n    <a class="nav-link" routerLink="/full-page-layouts/content-panel" routerLinkActive="active" clrMainNavGroupItem>Content Panel Layout</a>\n</clr-main-nav-group>\n'}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["clr-navigation-demo-docu"]],hostVars:4,hostBindings:function(e,n){2&e&&c.Cb("content-area",!0)("dox-content-panel",!0)},features:[c.wb],decls:210,vars:3,consts:[[3,"title"],[1,"component-summary"],["id","design-guidelines"],[1,"list"],["id","code-examples"],["id","examples"],["shape","display"],["routerLink","/full-page-layouts/content-panel","routerLinkActive","active"],[1,"clr-code"],[3,"clrCode"],["id","generic-pager-header",1,"component-summary"],["href","https://clarity.design/documentation/navigation"],["href","https://clarity.design/documentation/header"],["href","https://material.io/design/components/bottom-navigation.html"],["href","https://material.io/design/components/navigation-drawer.html"],["routerLink","/full-page-layouts/basepage-layout","routerLinkActive","active",1,"nav-link"],[1,"nav-text"]],template:function(e,n){1&e&&(c.Qb(0,"clr-doc-wrapper",0),c.Qb(1,"article"),c.Qb(2,"h2"),c.Bc(3,"Content Panel"),c.Pb(),c.Qb(4,"h5",1),c.Bc(5," The Content Panel provides additional, in most cases contextual information to the content-area. "),c.Pb(),c.Qb(6,"h3"),c.Bc(7,"Responsive Bahavior"),c.Pb(),c.Qb(8,"p"),c.Bc(9,"The sidebar uses on mobile devices the full page width. It is displayed as modal layer above the main content on larger screens. On medium sized desktops and above, the sidebar is a column next to the content. Note that it is always possible to hide or display the panel."),c.Pb(),c.Qb(10,"div",2),c.Qb(11,"h3"),c.Bc(12,"Usage"),c.Pb(),c.Qb(13,"ul",3),c.Qb(14,"li"),c.Bc(15,"Use to display supplemental content and features"),c.Pb(),c.Pb(),c.Qb(16,"h3"),c.Bc(17,"Behavior"),c.Pb(),c.Qb(18,"ul",3),c.Qb(19,"li"),c.Bc(20,"The content panel is not always visible, it appears on the right side next to the content-area and can be shown or hidden according to users needs."),c.Pb(),c.Pb(),c.Qb(21,"h3"),c.Bc(22,"Responsive Behavior"),c.Pb(),c.Qb(23,"p"),c.Bc(24,"\u22651200 px (Desktop, fullscreen)"),c.Pb(),c.Qb(25,"ul",3),c.Qb(26,"li"),c.Bc(27,"Content panel is displayed on the right-side next to the content-area"),c.Pb(),c.Qb(28,"li"),c.Bc(29,"The content panel remains visible while the user interacts with the primary content."),c.Pb(),c.Qb(30,"li"),c.Bc(31,"According to business needs the content panel can be shown automatically on resize or on user interaction, depending whether the content area or the content panel poses more important information to the user."),c.Pb(),c.Pb(),c.Qb(32,"p"),c.Bc(33,"\u2265768 px (Tablet, landscape)"),c.Pb(),c.Qb(34,"ul",3),c.Qb(35,"li"),c.Bc(36,"The content panel is displayed on the right-side overlapping the content-area and invoking a backdrop over the content-area."),c.Pb(),c.Qb(37,"li"),c.Bc(38,"Invoking and "),c.Pb(),c.Pb(),c.Qb(39,"p"),c.Bc(40,"default: \u2264 768px (Tablet, portrait)"),c.Pb(),c.Qb(41,"ul",3),c.Qb(42,"li"),c.Bc(43," The content panel is shown maximized, consuming the content-area's space. "),c.Pb(),c.Pb(),c.Pb(),c.Qb(44,"div",4),c.Qb(45,"h3",5),c.Bc(46,"Code & Examples"),c.Pb(),c.Qb(47,"h4"),c.Bc(48,"Demo"),c.Pb(),c.Qb(49,"div"),c.Lb(50,"clr-icon",6),c.Bc(51,"\xa0 "),c.Qb(52,"a",7),c.Qb(53,"span"),c.Bc(54,"Base Pagelayout with Content Panel"),c.Pb(),c.Pb(),c.Pb(),c.Qb(55,"p"),c.Bc(56," When implementing a content panel on your page, you will want to replace your default container div with a "),c.Qb(57,"code",8),c.Bc(58,"clr-content-panel-container"),c.Pb(),c.Bc(59,". Inside of it, you can place any content you want to - including one or multiple "),c.Qb(60,"code",8),c.Bc(61,"clr-content-panel"),c.Pb(),c.Bc(62,". "),c.Pb(),c.Qb(63,"p"),c.Bc(64," You can use the "),c.Qb(65,"code",8),c.Bc(66,"@ViewChild()"),c.Pb(),c.Bc(67," annotation to get a reference of your "),c.Qb(68,"code",8),c.Bc(69,"ClrContentPanel"),c.Pb(),c.Bc(70,", which will allow you to call its methods: "),c.Pb(),c.Qb(71,"ul",3),c.Qb(72,"li"),c.Qb(73,"code",8),c.Bc(74,"open()"),c.Pb(),c.Bc(75," - opens the content panel."),c.Pb(),c.Qb(76,"li"),c.Qb(77,"code",8),c.Bc(78,"close()"),c.Pb(),c.Bc(79," - closes the content panel."),c.Pb(),c.Qb(80,"li"),c.Qb(81,"code",8),c.Bc(82,"toggle()"),c.Pb(),c.Bc(83," - convenience method, either opens or closes the content panel depending on the current state of it. "),c.Pb(),c.Qb(84,"li"),c.Qb(85,"code",8),c.Bc(86,"isOpen()"),c.Pb(),c.Bc(87," - returns true if the content panel is open."),c.Pb(),c.Pb(),c.Qb(88,"p"),c.Bc(89," Following inputs & outputs are available: "),c.Pb(),c.Qb(90,"ul",3),c.Qb(91,"li"),c.Qb(92,"code",8),c.Bc(93,"[clrDirection]"),c.Pb(),c.Bc(94," - determines if the content panel is shown on the left or right side. Default is "),c.Qb(95,"code",8),c.Bc(96,"right"),c.Pb(),c.Bc(97,". "),c.Pb(),c.Qb(98,"li"),c.Qb(99,"code",8),c.Bc(100,"(clrClosed)"),c.Pb(),c.Bc(101," is fired every time the content panel is closed. "),c.Pb(),c.Qb(102,"li"),c.Qb(103,"code",8),c.Bc(104,"(clrOpened)"),c.Pb(),c.Bc(105," is fired every time the content panel is opened. "),c.Pb(),c.Qb(106,"li"),c.Bc(107," Adding any HTML with the attribute "),c.Qb(108,"code",8),c.Bc(109,"clr-content-panel-title"),c.Pb(),c.Bc(110," will set the title of the content panel. "),c.Pb(),c.Qb(111,"li"),c.Bc(112," Adding any HTML with the attribute "),c.Qb(113,"code",8),c.Bc(114,"clr-content-panel-content"),c.Pb(),c.Bc(115," will set the content of the content panel. "),c.Pb(),c.Pb(),c.Lb(116,"clr-code-snippet",9),c.Pb(),c.Qb(117,"h2"),c.Bc(118,"Main Navigation"),c.Pb(),c.Qb(119,"h5",10),c.Bc(120,"The Main Navigation consists of a classic mainmenu bar with dropdown submenus."),c.Pb(),c.Qb(121,"div",2),c.Qb(122,"h3"),c.Bc(123,"Design Guidelines"),c.Pb(),c.Qb(124,"p"),c.Bc(125,"The Main Navigation is an additional "),c.Qb(126,"a",11),c.Bc(127,"Navigation"),c.Pb(),c.Bc(128," pattern, it enhances Clarity's "),c.Qb(129,"a",12),c.Bc(130,"Header Nav"),c.Pb(),c.Bc(131," with dropdown submenus. "),c.Pb(),c.Qb(132,"h3"),c.Bc(133,"Behavior"),c.Pb(),c.Qb(134,"ul",3),c.Qb(135,"li"),c.Bc(136,"A Header Navigation item can either lead directly to a page, or contain a submenu dropdown that leads to a list of navigation links."),c.Pb(),c.Qb(137,"li"),c.Bc(138,"First and second navigation level are covered in the Main Navigation, responsive accessible in the hamburger-menu on the left side."),c.Pb(),c.Qb(139,"li"),c.Bc(140,"Clarity supports responsive navigation for two levels of navigation."),c.Pb(),c.Qb(141,"li"),c.Bc(142,"Main Navigation adds a third responsive navigation level (see Sidebar Pagelayout)"),c.Pb(),c.Pb(),c.Qb(143,"h3"),c.Bc(144,"Use when"),c.Pb(),c.Qb(145,"ul",3),c.Qb(146,"li"),c.Bc(147,"Your application is commonly used on desktop devices"),c.Pb(),c.Qb(148,"li"),c.Bc(149,"You have a dense information hierarchy, and need more than two levels of navigation responsive accessible"),c.Pb(),c.Pb(),c.Qb(150,"h3"),c.Bc(151,"Don't use when"),c.Pb(),c.Qb(152,"ul",3),c.Qb(153,"li"),c.Bc(154,"You are building a MobileFirst application with a fairly flat information hierarchy"),c.Pb(),c.Qb(155,"ul",3),c.Qb(156,"li"),c.Bc(157,"Consider using "),c.Qb(158,"a",12),c.Bc(159,"Header Nav"),c.Pb(),c.Pb(),c.Qb(160,"li"),c.Bc(161,"Consider using Material Design for a MobileFirst approach: "),c.Qb(162,"a",13),c.Bc(163,"Bottom-navigation"),c.Pb(),c.Bc(164," or "),c.Qb(165,"a",14),c.Bc(166,"navigation-drawer"),c.Pb(),c.Bc(167," should be preferred."),c.Pb(),c.Pb(),c.Qb(168,"li"),c.Bc(169,"Don't combine Main Navigation with Subnav Pattern."),c.Pb(),c.Pb(),c.Pb(),c.Qb(170,"div",4),c.Qb(171,"h3",5),c.Bc(172,"Code & Examples"),c.Pb(),c.Qb(173,"h4"),c.Bc(174,"Demo"),c.Pb(),c.Qb(175,"div"),c.Lb(176,"clr-icon",6),c.Bc(177,"\xa0 "),c.Qb(178,"a",15),c.Qb(179,"span",16),c.Bc(180,"Main Navigation in Base Pagelayout"),c.Pb(),c.Pb(),c.Pb(),c.Qb(181,"p"),c.Bc(182," Following interactions are available: "),c.Pb(),c.Qb(183,"ul"),c.Qb(184,"li"),c.Bc(185," To define the title of the group add a "),c.Qb(186,"code",8),c.Bc(187,"[clrTitle]"),c.Pb(),c.Bc(188," input to the component. "),c.Pb(),c.Qb(189,"li"),c.Bc(190," To add keyboard navigation to the elements in a group add "),c.Qb(191,"code",8),c.Bc(192,"clrMainNavGroupItem"),c.Pb(),c.Bc(193," to every navigatable item. "),c.Pb(),c.Pb(),c.Qb(194,"p"),c.Bc(195," It is crucial to set "),c.Qb(196,"code",8),c.Bc(197,'routerLinkActive="active"'),c.Pb(),c.Bc(198," on the component itself, to highlight the title as soon as a sublink is active. "),c.Pb(),c.Qb(199,"p"),c.Bc(200," On the links itself the class "),c.Qb(201,"code",8),c.Bc(202,"nav-link"),c.Pb(),c.Bc(203," has to be set for correct styling. Furthermore "),c.Qb(204,"code",8),c.Bc(205,'routerLinkActive="active"'),c.Pb(),c.Bc(206," should be set to highlight the links in the menu when they are active. "),c.Pb(),c.Qb(207,"p"),c.Bc(208," Examples can be found in all of the page layouts. Sample usage shown below: "),c.Pb(),c.Lb(209,"clr-code-snippet",9),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.hc("title",n.title),c.zb(116),c.hc("clrCode",n.contentPanelCodeExample),c.zb(93),c.hc("clrCode",n.mainNavHtmlExample))},directives:[l.a,i.B,b.f,b.e,r.a],encapsulation:2}),e})();var d=t("JsA7"),p=t("XPsC");let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[a.c,i.a,p.a,d.a,b.g.forChild([{path:"",component:s}])]]}),e})()}}]);