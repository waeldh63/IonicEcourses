"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8131],{8131:(L,g,n)=>{n.r(g),n.d(g,{WishListPageModule:()=>x});var l=n(6814),d=n(95),s=n(451),f=n(1147),e=n(9212),h=n(6199),_=n(7371);function p(i,r){if(1&i&&(e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-text"),e._uU(3),e.qZA()()()),2&i){const t=e.oxw().$implicit,o=e.oxw(2);e.xp6(3),e.hij(" Discounted: \u20b9",+o.arrayOfCourses[t].actualPrice.replace("\u20b9","")-+o.arrayOfCourses[t].actualPrice.replace("\u20b9","")*(+o.arrayOfCourses[t].discountPercentage.replace("%","")/100)," ")}}function P(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-grid")(3,"ion-row")(4,"ion-col",4)(5,"ion-card-title"),e._uU(6),e.qZA()()()(),e.TgZ(7,"ion-card-subtitle"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-card-content")(10,"ion-grid")(11,"ion-row")(12,"ion-col")(13,"ion-text"),e._uU(14),e.qZA()()(),e.YNc(15,p,4,1,"ion-row",5),e.qZA(),e.TgZ(16,"ion-button",6),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.addCourseToCart(u.arrayOfCourses[a].id))}),e._uU(17," Add to cart "),e.qZA(),e.TgZ(18,"ion-button",7),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.removeCourseFromWishList(u.arrayOfCourses[a].id))}),e._uU(19," Delete the course "),e.qZA()()()}if(2&i){const t=r.$implicit,o=e.oxw(2);e.xp6(6),e.hij(" ",o.arrayOfCourses[t].courseName,""),e.xp6(2),e.Oqu(o.arrayOfCourses[t].author),e.xp6(6),e.hij(" Price: ",o.arrayOfCourses[t].actualPrice," "),e.xp6(),e.Q6J("ngIf","0"!==o.arrayOfCourses[t].discountPercentage)}}function m(i,r){if(1&i&&(e.ynx(0),e.YNc(1,P,20,4,"ion-card",3),e.BQk()),2&i){const t=e.oxw();e.xp6(),e.Q6J("ngForOf",t.userProfile.Wishlist)}}function C(i,r){1&i&&(e.TgZ(0,"div"),e._uU(1," No courses available. "),e.qZA())}const W=[{path:"",component:(()=>{var i;class r{constructor(o,c){this.CoursesService=o,this.ProfileService=c,this.arrayOfCourses=[],this.userProfile={}}ngOnInit(){this.userProfile=this.ProfileService.getProfile(),this.arrayOfCourses=this.CoursesService.getCourses()}removeCourseFromWishList(o){this.ProfileService.removeCourseFromWishList(o)}addCourseToCart(o){this.ProfileService.addToCart(o),this.ProfileService.removeCourseFromWishList(o)}}return(i=r).\u0275fac=function(o){return new(o||i)(e.Y36(h.N),e.Y36(_.H))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-wish-list"]],decls:8,vars:2,consts:[["size","large"],[4,"ngIf","ngIfElse"],["noCoursesInWishList",""],[4,"ngFor","ngForOf"],["size","11"],[4,"ngIf"],["color","primary",3,"click"],["size","default","fill","outline","color","danger",3,"click"]],template:function(o,c){if(1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3,"WishList"),e.qZA()()(),e.TgZ(4,"ion-content"),e.YNc(5,m,2,1,"ng-container",1)(6,C,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&o){const a=e.MAs(7);e.xp6(5),e.Q6J("ngIf",c.userProfile&&c.userProfile.Wishlist.length>0)("ngIfElse",a)}},dependencies:[l.sg,l.O5,s.YG,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.wI,s.W2,s.jY,s.Gu,s.Nd,s.yW,s.wd,s.sr]}),r})()}];let v=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(W),f.Bz]}),r})(),x=(()=>{var i;class r{}return(i=r).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,d.u5,s.Pc,v]}),r})()}}]);