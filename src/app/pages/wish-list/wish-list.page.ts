import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {
  constructor(
    private CoursesService: CoursesService,
    private ProfileService: ProfileService
  ) {}
  public arrayOfCourses: any = [];
  public userProfile: any = {};

  ngOnInit() {
    this.userProfile = this.ProfileService.getProfile(); // get user profile
    this.arrayOfCourses = this.CoursesService.getCourses(); //get array of courses
  }

  removeCourseFromWishList(idOfCourse: any) {
    // here we remove the course from wihlist
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }

  addCourseToCart(idOfCourse: any) {
    // here we add the course to the cart
    this.ProfileService.addToCart(idOfCourse);
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }
}
