(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{SH1n:function(e,r,b){"use strict";b.r(r),b.d(r,"BreadcrumbDemoModule",function(){return h});var c=b("ofXK"),a=b("8MG2"),t=b("6Y1o"),n=b("N+3j"),i=b("fXoL"),o=b("0G9f"),d=b("vAyd");let l=(()=>{class e extends n.a{constructor(e){super("breadcrumb"),this.breadcrumbService=e,this.htmlExample="\n<clr-breadcrumb></clr-breadcrumb>\n",this.angularExample='\nconst breadcrumb1: ClrBreadcrumbModel = { label: "Home", url: "/" }\nconst breadcrumb2: ClrBreadcrumbModel = { label: "Parent", url: "/" }\nconst breadcrumb3: ClrBreadcrumbModel = { label: "Current Page" }\nthis.breadcrumbService.updateBreadcrumb([\n    breadcrumb1, breadcrumb2, breadcrumb3\n]);\n'}ngOnInit(){this.breadcrumbService.updateBreadcrumb([{label:"Home",url:"/"},{label:"Parent",url:"/"},{label:"Current Page"}])}}return e.\u0275fac=function(r){return new(r||e)(i.Kb(t.e))},e.\u0275cmp=i.Eb({type:e,selectors:[["clr-breadcrumb-demo"]],hostVars:4,hostBindings:function(e,r){2&e&&i.Cb("content-area",!0)("dox-content-panel",!0)},features:[i.wb],decls:73,vars:4,consts:[[3,"title"],["id","generic-pager-header",1,"component-summary"],["id","design-guidelines"],[1,"row"],[1,"col-md-12","col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],[1,"clrweb-DoxMedia-img","breadcrumb-demo"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],[1,"clrweb-DoxMedia-img","breadcrumb-demo-long"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","/"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"clrweb-DoxMedia"],[3,"clrCode","clrLanguage"],[3,"clrCode"]],template:function(e,r){1&e&&(i.Qb(0,"clr-doc-wrapper",0),i.Qb(1,"article"),i.Qb(2,"h5",1),i.Bc(3," Breadcrumbs are a type of secondary navigation scheme that reveals the user\u2019s location in a site or web app. "),i.Pb(),i.Qb(4,"div",2),i.Qb(5,"h3"),i.Bc(6,"Design Guidelines"),i.Pb(),i.Qb(7,"p"),i.Bc(8,"The use of breadcrumbs have been widely discussed in several ui/ux communities. Some users stick to them, others don't even recognize them."),i.Pb(),i.Qb(9,"p"),i.Bc(10,"For complex business applications, that provide a clear hierarchical structure (with parent-child relation between pages, which are probably deeply nested) the use can be justified."),i.Pb(),i.Qb(11,"p"),i.Bc(12,"Avoided should be solutions with historical breadcrumbs, since they are very seldom used, may lead to cycles inside the breadcrumb-trail and basically duplicate the browser's back functionality."),i.Pb(),i.Qb(13,"h3"),i.Bc(14,"Use when"),i.Pb(),i.Qb(15,"p"),i.Bc(16,"Your application provides a clear hierarchical structure. "),i.Lb(17,"br"),i.Bc(18," The site structure is deeply nested and the primary navigation scheme is not sufficient."),i.Pb(),i.Qb(19,"h3"),i.Bc(20,"Don't use when"),i.Pb(),i.Qb(21,"p"),i.Bc(22,"Your information architecture represent a network instead of a hierarchical tree of pages."),i.Lb(23,"br"),i.Bc(24," In that case you can not clearly name the current page's parent, and the breadcrumb trail can not represent the path the user has been taken through the application. "),i.Pb(),i.Pb(),i.Qb(25,"div",3),i.Qb(26,"div",4),i.Qb(27,"div",5),i.Qb(28,"div",6),i.Qb(29,"div",7),i.Lb(30,"clr-breadcrumb"),i.Pb(),i.Pb(),i.Qb(31,"div",8),i.Qb(32,"h6",9),i.Bc(33,"Do"),i.Pb(),i.Qb(34,"p"),i.Bc(35," Use breadcrumbs as hierarchical path to the current displayed page. "),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(36,"div",4),i.Qb(37,"div",10),i.Qb(38,"div",6),i.Qb(39,"div",11),i.Qb(40,"ol",12),i.Qb(41,"li",13),i.Qb(42,"a",14),i.Bc(43,"Page before last"),i.Pb(),i.Pb(),i.Qb(44,"li",13),i.Qb(45,"a",14),i.Bc(46,"Last page"),i.Pb(),i.Pb(),i.Qb(47,"li",13),i.Bc(48,"Current Page"),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(49,"div",8),i.Qb(50,"h6",9),i.Bc(51,"Don't"),i.Pb(),i.Qb(52,"p"),i.Bc(53," Don't use historical breadcrumbs as browsing history. "),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(54,"div",15),i.Qb(55,"h3",16),i.Bc(56,"Code & Examples"),i.Pb(),i.Qb(57,"p"),i.Bc(58," To set the breadcrumbs, the service "),i.Qb(59,"code",17),i.Bc(60,"ClrBreadcrumbService"),i.Pb(),i.Bc(61," in conjunction with "),i.Qb(62,"code",17),i.Bc(63,"ClrBreadcrumbModel"),i.Pb(),i.Bc(64," has to be used. "),i.Pb(),i.Qb(65,"div",18),i.Qb(66,"div",6),i.Qb(67,"div",7),i.Lb(68,"clr-breadcrumb"),i.Pb(),i.Pb(),i.Pb(),i.Lb(69,"clr-code-snippet",19),i.Qb(70,"p"),i.Bc(71," To display the breadcrumbs simply place the angular component anywhere needed. "),i.Pb(),i.Lb(72,"clr-code-snippet",20),i.Pb(),i.Pb(),i.Pb()),2&e&&(i.hc("title",r.title),i.zb(69),i.hc("clrCode",r.angularExample)("clrLanguage","typescript"),i.zb(3),i.hc("clrCode",r.htmlExample))},directives:[o.a,t.d,d.a],styles:[".breadcrumb-demo[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { display: block; margin-top: -12px; }",".breadcrumb-demo-long[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { margin-top: -12px; }",".clrweb-DoxMedia-block[_ngcontent-%COMP%] { min-height: 60px; }"]}),e})();var s=b("JsA7"),u=b("tyNb"),m=b("XPsC");let h=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({imports:[[c.c,m.a,s.a,u.g.forChild([{path:"",component:l}]),a.a,t.b]]}),e})()}}]);