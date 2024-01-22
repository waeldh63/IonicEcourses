import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {

  constructor(private CoursesService: CoursesService, private ProfileService: ProfileService) { }
  public arrayOfCourses: any = [];
  public userProfile: any = {}

  ngOnInit() {

    this.userProfile = this.ProfileService.getProfile()   
     this.arrayOfCourses = this.CoursesService.getCourses()


  }
  checkWishListExistCourse(idOfCourse: any) {
    return this.ProfileService.checkWishListExistCourse(idOfCourse)
  }

  addCourseToWishList(idOfCourse: any) {
    this.ProfileService.addToWishList(idOfCourse)
  }
  removeCourseFromWishList(idOfCourse: any) {
    this.ProfileService.removeCourseFromWishList(idOfCourse)
  }
  
  addCourseToCart(idOfCourse: any) {
    this.ProfileService.addToCart(idOfCourse)
    this.ProfileService.removeCourseFromWishList(idOfCourse)

  }
  removeCourseFromCart(idOfCourse: any) {
    this.ProfileService.removeCourseFromCart(idOfCourse)
  }
  checkCartExistCourse(idOfCourse: any) {
    return this.ProfileService.checkCartExistCourse(idOfCourse)
  }

}
