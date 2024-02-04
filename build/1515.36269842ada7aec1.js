"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1515],{1515:(Z,c,r)=>{r.r(c),r.d(c,{ProfilePageModule:()=>_});var p=r(6814),d=r(95),n=r(451),f=r(1147),g=r(5861),e=r(9212),P=r(7371);function m(o,a){if(1&o){const l=e.EpF();e.TgZ(0,"ion-col")(1,"ion-col")(2,"ion-label"),e._uU(3,"Experience"),e.qZA()(),e.TgZ(4,"ion-radio-group",15),e.NdJ("ionChange",function(i){e.CHM(l);const s=e.oxw();return e.KtG(s.setExperience(i))}),e.TgZ(5,"ion-radio",16),e._uU(6,"0-5"),e.qZA(),e.TgZ(7,"ion-radio",17),e._uU(8,"5-10"),e.qZA(),e.TgZ(9,"ion-radio",18),e._uU(10,"10 & above"),e.qZA()(),e.TgZ(11,"ion-col")(12,"ion-label"),e._uU(13,"Expertise"),e.qZA()(),e.TgZ(14,"ion-radio-group",15),e.NdJ("ionChange",function(i){e.CHM(l);const s=e.oxw();return e.KtG(s.setExpertise(i))}),e.TgZ(15,"ion-radio",19),e._uU(16,"Frontend"),e.qZA(),e.TgZ(17,"ion-radio",20),e._uU(18,"BackEnd"),e.qZA()()()}if(2&o){const l=e.oxw();e.xp6(4),e.Q6J("value",l.userProfile.Experience),e.xp6(10),e.Q6J("value",l.userProfile.Expertise)}}const h=[{path:"",component:(()=>{var o;class a{constructor(t,i){this.ProfileService=t,this.alertController=i,this.userProfile=[],this.showAlert=!1}ngOnInit(){this.userProfile=this.ProfileService.getProfile(),this.FirstName=this.userProfile.FirstName,this.LastName=this.userProfile.LastName,this.AboutYourself=this.userProfile.AboutYourself,this.YourRole=this.userProfile.YourRole,this.IsStudent=this.userProfile.IsStudent,this.Experience=this.userProfile.Experience,this.Expertise=this.userProfile.Expertise}setIsStudent(t){this.IsStudent=t.detail.value,this.ProfileService.isStudentChanged(this.IsStudent)}setExperience(t){this.Experience=t.detail.value}setExpertise(t){this.Expertise=t.detail.value}setFirstName(t){this.FirstName=t.detail.value}setLastName(t){this.LastName=t.detail.value}setAboutYourself(t){this.AboutYourself=t.detail.value}setYourRole(t){this.YourRole=t.detail.value}setProfileDetails(){this.ProfileService.setProfileDetails(this.FirstName,this.LastName,this.AboutYourself,this.YourRole,this.IsStudent,this.Experience,this.Expertise)}presentAlert(){var t=this;return(0,g.Z)(function*(){yield(yield t.alertController.create({header:"Mandatory Field",message:"Fisrt Name Field Cannot be null.",buttons:t.alertButtons()})).present()})()}alertButtons(){return[{text:"OK",handler:()=>{this.showAlert=!1}}]}}return(o=a).\u0275fac=function(t){return new(t||o)(e.Y36(P.H),e.Y36(n.Br))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:35,vars:11,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","start",2,"align-self","flex-start","margin-top","0"],["alt","Silhouette of a person's head","src","https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg"],["label","First name","placeholder","First Name",3,"value","ionInput"],["label","Last name","placeholder","Last Name",3,"value","ionInput"],["label","About yourself","placeholder","About yourself","maxlength","100",3,"counter","value","ionInput"],[2,"display","flex","background-color","beige",3,"allowEmptySelection","value","ionChange"],["value","student","labelPlacement","stacked","alignment","center",2,"display","inline-block","margin-right","10px"],["value","professional","labelPlacement","stacked","alignment","center",2,"display","inline-block"],[4,"ngIf"],["label","Mention your role","placeholder","Mention your role","maxlength","200",3,"counter","value","ionInput"],[2,"display","flex","justify-content","center","align-items","center"],[3,"click"],[2,"display","flex","background-color","beige",3,"value","ionChange"],["value","0-5","labelPlacement","stacked","alignment","center",2,"display","inline-block","margin-right","10px"],["value","5-10","labelPlacement","stacked","alignment","center",2,"display","inline-block"],["value","10-above","labelPlacement","stacked","alignment","center",2,"display","inline-block","margin-right","10px"],["value","Frontend","labelPlacement","stacked","alignment","center",2,"display","inline-block","margin-right","10px"],["value","BackEnd","labelPlacement","stacked","alignment","center",2,"display","inline-block"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-content",0)(1,"ion-header",1)(2,"ion-toolbar")(3,"ion-title",2),e._uU(4,"Profile"),e.qZA()()(),e.TgZ(5,"ion-item")(6,"ion-avatar",3),e._UZ(7,"img",4),e.qZA(),e.TgZ(8,"ion-grid")(9,"ion-row")(10,"ion-col")(11,"ion-label"),e._uU(12),e.qZA()()(),e.TgZ(13,"ion-row")(14,"ion-col")(15,"ion-input",5),e.NdJ("ionInput",function(u){return i.setFirstName(u)}),e.qZA()()(),e.TgZ(16,"ion-row")(17,"ion-col")(18,"ion-input",6),e.NdJ("ionInput",function(u){return i.setLastName(u)}),e.qZA()()(),e.TgZ(19,"ion-row")(20,"ion-col")(21,"ion-textarea",7),e.NdJ("ionInput",function(u){return i.setAboutYourself(u)}),e.qZA()()(),e.TgZ(22,"ion-radio-group",8),e.NdJ("ionChange",function(u){return i.setIsStudent(u)}),e.TgZ(23,"ion-radio",9),e._uU(24,"Student"),e.qZA(),e.TgZ(25,"ion-radio",10),e._uU(26,"Professional"),e.qZA()(),e.YNc(27,m,19,2,"ion-col",11),e.TgZ(28,"ion-row")(29,"ion-col")(30,"ion-textarea",12),e.NdJ("ionInput",function(u){return i.setYourRole(u)}),e.qZA()()()()(),e.TgZ(31,"div",13)(32,"ion-button",14),e.NdJ("click",function(){return i.FirstName?i.setProfileDetails():i.presentAlert()}),e._uU(33,"Save"),e.qZA()(),e._UZ(34,"ion-alert"),e.qZA()),2&t&&(e.Q6J("fullscreen",!0),e.xp6(12),e.Oqu(i.userProfile.FirstName+" "+i.userProfile.LastName),e.xp6(3),e.Q6J("value",i.userProfile.FirstName),e.xp6(3),e.Q6J("value",i.userProfile.LastName),e.xp6(3),e.Q6J("counter",!0)("value",i.userProfile.AboutYourself),e.xp6(),e.Q6J("allowEmptySelection",!1)("value","student"==i.userProfile.IsStudent?"student":"professional"),e.xp6(5),e.Q6J("ngIf","professional"==i.userProfile.IsStudent),e.xp6(3),e.Q6J("counter",!0)("value",i.userProfile.YourRole))},dependencies:[p.O5,n.Ge,n.BJ,n.YG,n.wI,n.W2,n.jY,n.Gu,n.pK,n.Ie,n.Q$,n.B7,n.se,n.Nd,n.g2,n.wd,n.sr,n.U5,n.QI,n.j9]}),a})()}];let v=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.Bz.forChild(h),f.Bz]}),a})(),_=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,d.u5,n.Pc,v]}),a})()}}]);