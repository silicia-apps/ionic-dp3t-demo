(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{TA8p:function(t,i,n){"use strict";n.r(i),n.d(i,"TutorialPageModule",(function(){return L}));var c=n("TEn/"),e=n("tyNb"),o=n("ofXK"),b=n("3Pt+"),s=n("mrSG"),r=n("AcyG"),a=n("1tJR"),l=n("r8KD"),T=n("HDdC"),h=n("TkeJ"),d=n("fXoL"),I=n("rj8D"),p=n("sYmb");function _(t,i){if(1&t){const t=d.Vb();d.Ub(0,"ion-buttons",10),d.Ub(1,"ion-button",11),d.cc("click",(function(){return d.xc(t),d.gc().onSkip()})),d.Hc(2),d.hc(3,"translate"),d.Tb(),d.Tb()}2&t&&(d.Bb(2),d.Ic(d.ic(3,1,"SKIP_BUTTON")))}function O(t,i){if(1&t){const t=d.Vb();d.Ub(0,"ion-buttons",10),d.Ub(1,"button",12),d.cc("click",(function(){return d.xc(t),d.gc().onSkip()})),d.Hc(2),d.hc(3,"translate"),d.Tb(),d.Tb()}2&t&&(d.Bb(2),d.Jc(" ",d.ic(3,1,"SKIP_BUTTON")," "))}function U(t,i){if(1&t){const t=d.Vb();d.Ub(0,"ion-card"),d.Ub(1,"ion-card-header"),d.Ub(2,"p"),d.Hc(3),d.hc(4,"translate"),d.Tb(),d.Tb(),d.Ub(5,"ion-card-content"),d.Ub(6,"ion-button",13),d.cc("click",(function(){return d.xc(t),d.gc().start()})),d.Hc(7),d.hc(8,"translate"),d.Tb(),d.Tb(),d.Tb()}2&t&&(d.Bb(3),d.Ic(d.ic(4,2,"TUTORIAL_START_HANDSHAKE_DESCRIPTION")),d.Bb(4),d.Ic(d.ic(8,4,"TUTORIAL_START_HANDSHAKE_BUTTON")))}function g(t,i){if(1&t){const t=d.Vb();d.Ub(0,"ion-fab",14),d.Ub(1,"ion-fab-button",15),d.cc("click",(function(){return d.xc(t),d.gc().slides.slideNext()})),d.Pb(2,"ion-icon",16),d.Tb(),d.Tb()}}let u=(()=>{class t{constructor(t){this.store=t,this.showSkip=!0,this.dir="ltr"}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){}))}ionViewWillEnter(){this.dati$.subscribe(t=>{!0===t.isActive&&this.store.dispatch(new h.a(["tabs"]))})}onSlideChangeStart(){return Object(s.a)(this,void 0,void 0,(function*(){this.showSkip=!(yield this.slides.isEnd())}))}onSkip(){return Object(s.a)(this,void 0,void 0,(function*(){this.slides.slideTo(yield this.slides.length())}))}next(){this.slides.slideNext()}start(){this.store.dispatch(a.e).subscribe(()=>{this.store.dispatch(new h.a(["tabs"]))})}askForDisableBatteryOptimizer(){this.store.dispatch(a.b).subscribe(()=>{this.store.dispatch(a.d)})}AskForGeolocationPermission(){this.store.dispatch(a.c).subscribe(()=>{this.store.dispatch(a.d)})}AskForActivateBluetooth(){this.store.dispatch(a.a).subscribe(()=>{this.store.dispatch(a.d)})}}return t.\u0275fac=function(i){return new(i||t)(d.Ob(r.i))},t.\u0275cmp=d.Ib({type:t,selectors:[["app-tutorial"]],viewQuery:function(t,i){var n;1&t&&d.Nc(c.F,!0),2&t&&d.uc(n=d.dc())&&(i.slides=n.first)},decls:82,vars:67,consts:[[1,"ion-no-border",3,"translucent"],["slot","end",4,"ngIf"],[3,"fullscreen"],["collapse","condense"],["size","large"],["pager","true",3,"dir","ionSlideWillChange"],[1,"slide"],[1,"slide-image",3,"src"],[4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],["slot","end"],["color","primary",3,"click"],["ion-button","","color","primary",3,"click"],["size","block",3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],[3,"click"],["name","arrow-forward-outline"]],template:function(t,i){1&t&&(d.Ub(0,"ion-header",0),d.Ub(1,"ion-toolbar"),d.Ub(2,"ion-title"),d.Hc(3),d.hc(4,"translate"),d.Tb(),d.Fc(5,_,4,3,"ion-buttons",1),d.Tb(),d.Tb(),d.Ub(6,"ion-content",2),d.Ub(7,"ion-header",3),d.Ub(8,"ion-toolbar"),d.Ub(9,"ion-title",4),d.Hc(10),d.hc(11,"translate"),d.Tb(),d.Fc(12,O,4,3,"ion-buttons",1),d.Tb(),d.Tb(),d.Ub(13,"ion-slides",5),d.cc("ionSlideWillChange",(function(){return i.onSlideChangeStart()})),d.Ub(14,"ion-slide"),d.Ub(15,"div",6),d.Ub(16,"p"),d.Ub(17,"b"),d.Hc(18),d.hc(19,"translate"),d.Tb(),d.Tb(),d.Ub(20,"p"),d.Pb(21,"ion-img",7),d.hc(22,"translate"),d.Tb(),d.Ub(23,"h2"),d.Hc(24),d.hc(25,"translate"),d.Tb(),d.Ub(26,"p"),d.Hc(27),d.hc(28,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Ub(29,"ion-slide"),d.Ub(30,"div",6),d.Ub(31,"p"),d.Ub(32,"b"),d.Hc(33),d.hc(34,"translate"),d.Tb(),d.Tb(),d.Ub(35,"p"),d.Pb(36,"ion-img",7),d.hc(37,"translate"),d.Tb(),d.Ub(38,"h2"),d.Hc(39),d.hc(40,"translate"),d.Tb(),d.Ub(41,"p"),d.Hc(42),d.hc(43,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Ub(44,"ion-slide"),d.Ub(45,"div",6),d.Ub(46,"p"),d.Ub(47,"b"),d.Hc(48),d.hc(49,"translate"),d.Tb(),d.Tb(),d.Ub(50,"p"),d.Pb(51,"ion-img",7),d.hc(52,"translate"),d.Tb(),d.Ub(53,"h2"),d.Hc(54),d.hc(55,"translate"),d.Tb(),d.Ub(56,"p"),d.Hc(57),d.hc(58,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Ub(59,"ion-slide"),d.Ub(60,"div",6),d.Ub(61,"p"),d.Ub(62,"b"),d.Hc(63),d.hc(64,"translate"),d.Tb(),d.Tb(),d.Ub(65,"p"),d.Pb(66,"ion-img",7),d.hc(67,"translate"),d.Tb(),d.Ub(68,"h2"),d.Hc(69),d.hc(70,"translate"),d.Tb(),d.Ub(71,"p"),d.Hc(72),d.hc(73,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Ub(74,"ion-slide"),d.Ub(75,"div",6),d.Pb(76,"check-device"),d.Fc(77,U,9,6,"ion-card",8),d.hc(78,"async"),d.hc(79,"async"),d.hc(80,"async"),d.Tb(),d.Tb(),d.Tb(),d.Fc(81,g,3,0,"ion-fab",9),d.Tb()),2&t&&(d.mc("translucent",!0),d.Bb(3),d.Jc(" ",d.ic(4,25,"APP_NAME")," "),d.Bb(2),d.mc("ngIf",i.showSkip),d.Bb(1),d.mc("fullscreen",!0),d.Bb(4),d.Ic(d.ic(11,27,"APP_NAME")),d.Bb(2),d.mc("ngIf",i.showSkip),d.Bb(1),d.nc("dir",i.dir),d.Bb(5),d.Ic(d.ic(19,29,"TUTORIAL_TOP_LABEL_HOW")),d.Bb(3),d.nc("src",d.ic(22,31,"TUTORIAL_IMAGE_SLIDE_1")),d.Bb(3),d.Ic(d.ic(25,33,"TUTORIAL_TITLE_SLIDE_1")),d.Bb(3),d.Ic(d.ic(28,35,"TUTORIAL_DESCRIPTION_SLIDE_1")),d.Bb(6),d.Ic(d.ic(34,37,"TUTORIAL_TOP_LABEL_HOW")),d.Bb(3),d.nc("src",d.ic(37,39,"TUTORIAL_IMAGE_SLIDE_2")),d.Bb(3),d.Ic(d.ic(40,41,"TUTORIAL_TITLE_SLIDE_2")),d.Bb(3),d.Ic(d.ic(43,43,"TUTORIAL_DESCRIPTION_SLIDE_2")),d.Bb(6),d.Ic(d.ic(49,45,"TUTORIAL_TOP_LABEL_HOW")),d.Bb(3),d.nc("src",d.ic(52,47,"TUTORIAL_IMAGE_SLIDE_3")),d.Bb(3),d.Ic(d.ic(55,49,"TUTORIAL_TITLE_SLIDE_3")),d.Bb(3),d.Ic(d.ic(58,51,"TUTORIAL_DESCRIPTION_SLIDE_3")),d.Bb(6),d.Ic(d.ic(64,53,"TUTORIAL_TOP_LABEL_HOW")),d.Bb(3),d.nc("src",d.ic(67,55,"TUTORIAL_IMAGE_SLIDE_4")),d.Bb(3),d.Ic(d.ic(70,57,"TUTORIAL_TITLE_SLIDE_4")),d.Bb(3),d.Ic(d.ic(73,59,"TUTORIAL_DESCRIPTION_SLIDE_4")),d.Bb(5),d.mc("ngIf",d.ic(78,61,i.bluetoothIsActive$)&&!d.ic(79,63,i.batteryOptimizerIsEnabled$)&&d.ic(80,65,i.geolocationIsGranted$)),d.Bb(4),d.mc("ngIf",i.showSkip))},directives:[c.s,c.N,c.L,o.m,c.n,c.F,c.E,c.u,I.a,c.f,c.e,c.g,c.i,c.h,c.p,c.q,c.t],pipes:[p.c,o.b],styles:["[_nghost-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   ion-img[_ngcontent-%COMP%]{height:220px}[_nghost-%COMP%]   ion-img.little[_ngcontent-%COMP%]{height:64px}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:2.8rem}[_nghost-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50%;max-width:80%;margin:60px 0 40px;pointer-events:none}[_nghost-%COMP%]   b[_ngcontent-%COMP%]{font-weight:500}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{padding:0 40px;font-size:14px;line-height:1.5;color:var(--ion-color-step-600,#60646b)}[_nghost-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}"]}),Object(s.b)([Object(r.e)(l.a.getData),Object(s.e)("design:type",T.a)],t.prototype,"dati$",void 0),Object(s.b)([Object(r.e)(l.a.BatteryOptimizerIsEnabled),Object(s.e)("design:type",T.a)],t.prototype,"batteryOptimizerIsEnabled$",void 0),Object(s.b)([Object(r.e)(l.a.geolocationIsGranted),Object(s.e)("design:type",T.a)],t.prototype,"geolocationIsGranted$",void 0),Object(s.b)([Object(r.e)(l.a.BluetoothIsActive),Object(s.e)("design:type",T.a)],t.prototype,"bluetoothIsActive$",void 0),t})();var f=n("Kxyh"),A=n("IA6j");let L=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(i){return new(i||t)},imports:[[c.O,o.c,b.b,f.f,A.a,e.n.forChild([{path:"",component:u}])]]}),t})()}}]);