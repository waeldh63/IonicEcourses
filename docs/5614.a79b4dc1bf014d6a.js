"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5614],{5614:(O,d,s)=>{s.r(d),s.d(d,{CardDetailsPageModule:()=>v});var u=s(6814),g=s(95),i=s(451),_=s(1147),e=s(9212),f=s(6199),C=s(7371);function p(t,a){if(1&t&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-text"),e._uU(3),e.qZA()()()),2&t){const r=e.oxw().$implicit,o=e.oxw(2);e.xp6(3),e.hij(" Discounted: \u20b9",+o.arrayOfCourses[r].actualPrice.replace("\u20b9","")-+o.arrayOfCourses[r].actualPrice.replace("\u20b9","")*(+o.arrayOfCourses[r].discountPercentage.replace("%","")/100)," ")}}function h(t,a){if(1&t){const r=e.EpF();e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e.qZA()(),e.TgZ(4,"ion-card-content")(5,"ion-grid")(6,"ion-row")(7,"ion-col")(8,"ion-text"),e._uU(9),e.qZA()()(),e.YNc(10,p,4,1,"ion-row",7),e.qZA(),e.TgZ(11,"ion-button",8),e.NdJ("click",function(){const c=e.CHM(r).$implicit,l=e.oxw(2);return e.KtG(l.addCourseToWishList(l.arrayOfCourses[c].id))}),e._uU(12," Move to wishlist "),e.qZA(),e.TgZ(13,"ion-button",9),e.NdJ("click",function(){const c=e.CHM(r).$implicit,l=e.oxw(2);return e.KtG(l.removeCourseFromCart(l.arrayOfCourses[c].id))}),e._uU(14," Delete the course "),e.qZA()()()}if(2&t){const r=a.$implicit,o=e.oxw(2);e.xp6(3),e.hij(" ",o.arrayOfCourses[r].courseName,""),e.xp6(6),e.hij(" Price: ",o.arrayOfCourses[r].actualPrice," "),e.xp6(),e.Q6J("ngIf","0"!==o.arrayOfCourses[r].discountPercentage)}}function P(t,a){if(1&t&&(e.ynx(0),e.YNc(1,h,15,3,"ion-card",6),e.BQk()),2&t){const r=e.oxw();e.xp6(),e.Q6J("ngForOf",r.userProfile.Cart)}}function m(t,a){1&t&&(e.TgZ(0,"div"),e._uU(1,"No courses available."),e.qZA())}function x(t,a){if(1&t){const r=e.EpF();e.TgZ(0,"ion-content",10),e._uU(1),e.TgZ(2,"ion-button",11),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.setOpen(!1))}),e._uU(3,"No"),e.qZA(),e.TgZ(4,"ion-button",11),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.completeCheckOut())}),e._uU(5,"yes complete"),e.qZA()()}if(2&t){const r=e.oxw();e.xp6(),e.hij(" Are U sure do u want to complete check out with total price : \u20b9",r.totalPrice," ")}}const T=[{path:"",component:(()=>{var t;class a{constructor(o,n){this.CoursesService=o,this.ProfileService=n,this.arrayOfCourses=[],this.userProfile=[],this.totalPrice=0,this.isModalOpen=!1}ngOnInit(){this.userProfile=this.ProfileService.getProfile(),this.arrayOfCourses=this.CoursesService.getCourses(),this.checkTotalPrice()}ionViewDidEnter(){this.checkTotalPrice()}addCourseToWishList(o){this.ProfileService.addToWishList(o),this.removeCourseFromCart(o),this.checkTotalPrice()}removeCourseFromCart(o){this.ProfileService.removeCourseFromCart(o),this.checkTotalPrice()}checkTotalPrice(){this.totalPrice=0,this.userProfile.Cart.forEach(o=>{this.totalPrice=this.totalPrice+this.arrayOfCourses[o].discountedPrice})}setOpen(o){this.isModalOpen=o}completeCheckOut(){this.arrayOfCourses.forEach(o=>{this.removeCourseFromCart(o.id)}),this.setOpen(!1)}}return(t=a).\u0275fac=function(o){return new(o||t)(e.Y36(f.N),e.Y36(C.H))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card-details"]],decls:16,vars:4,consts:[["size","large"],[4,"ngIf","ngIfElse"],["noCoursesInWishList",""],["slot","fixed","vertical","bottom","horizontal","end"],["expand","block",3,"click"],[3,"isOpen"],[4,"ngFor","ngForOf"],[4,"ngIf"],["color","primary",3,"click"],["size","default","fill","outline","color","danger",3,"click"],[1,"ion-padding"],[3,"click"]],template:function(o,n){if(1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3,"Cart"),e.qZA()()(),e.TgZ(4,"ion-content")(5,"ion-content"),e.YNc(6,P,2,1,"ng-container",1),e.qZA(),e.YNc(7,m,2,0,"ng-template",null,2,e.W1O),e.TgZ(9,"ion-fab",3)(10,"ion-text"),e._uU(11),e.qZA(),e.TgZ(12,"ion-button",4),e.NdJ("click",function(){return n.setOpen(!0)}),e._uU(13," Checkout "),e.qZA()(),e.TgZ(14,"ion-modal",5),e.YNc(15,x,6,1,"ng-template"),e.qZA()()),2&o){const c=e.MAs(8);e.xp6(6),e.Q6J("ngIf",n.userProfile&&n.userProfile.Cart.length>0)("ngIfElse",c),e.xp6(5),e.hij(" Total Price: ",n.totalPrice," "),e.xp6(3),e.Q6J("isOpen",n.isModalOpen)}},dependencies:[u.sg,u.O5,i.YG,i.PM,i.FN,i.Zi,i.Dq,i.wI,i.W2,i.IJ,i.jY,i.Gu,i.Nd,i.yW,i.wd,i.sr,i.ki]}),a})()}];let Z=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.Bz.forChild(T),_.Bz]}),a})(),v=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,g.u5,i.Pc,Z]}),a})()}}]);