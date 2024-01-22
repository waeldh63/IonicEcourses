import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {


  constructor(private CoursesService: CoursesService, private ProfileService: ProfileService) { }
  public arrayOfCourses: any = [];
  public userProfile: any = []
  public totalPrice:number = 0
  isModalOpen = false;
  ngOnInit() {
    this.userProfile = this.ProfileService.getProfile()   
     this.arrayOfCourses = this.CoursesService.getCourses()
     this.checkTotalPrice()
  }

  ionViewDidEnter() {
    this.checkTotalPrice()
  }
  
  addCourseToWishList(idOfCourse: any) {
    this.ProfileService.addToWishList(idOfCourse)
    this.removeCourseFromCart( idOfCourse)
    this.checkTotalPrice()  
  }

  checkWishListExistCourse(idOfCourse: any){
 return   this.ProfileService.checkWishListExistCourse(idOfCourse)
  }


  removeCourseFromCart(idOfCourse: any) {
    this.ProfileService.removeCourseFromCart(idOfCourse)
    this.checkTotalPrice()
  }
  checkCartExistCourse(idOfCourse: any) {
    return this.ProfileService.checkCartExistCourse(idOfCourse)
  }

checkTotalPrice(){
  this.totalPrice=0
      this.userProfile.Cart.forEach((course: any) => {
      this.totalPrice=this.totalPrice+this.arrayOfCourses[course].discountedPrice
  });

}




setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}

completeCheckOut(){
  this.arrayOfCourses.forEach((course: {id: any; 
}) => {
  this.removeCourseFromCart(course.id)
  });
  this.setOpen(false)
}

}
