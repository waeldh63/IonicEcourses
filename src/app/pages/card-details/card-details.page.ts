import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  constructor(
    private CoursesService: CoursesService,
    private ProfileService: ProfileService
  ) {}
  public arrayOfCourses: any = [];
  public userProfile: any = [];
  public totalPrice: number = 0;
  isModalOpen = false;
  ngOnInit() {
    this.userProfile = this.ProfileService.getProfile(); // get user profile
    this.arrayOfCourses = this.CoursesService.getCourses(); // get all courses
    this.checkTotalPrice(); // check the cart price
  }

  ionViewDidEnter() {
    this.checkTotalPrice(); // every time we visit this page we will updated the price
  }

  addCourseToWishList(idOfCourse: any) {
    this.ProfileService.addToWishList(idOfCourse); // here we add the course to wishlist
    this.removeCourseFromCart(idOfCourse); // we remove the course from cart
    this.checkTotalPrice(); // update the price
  }

  removeCourseFromCart(idOfCourse: any) {
    // this function is called when checkout done
    this.ProfileService.removeCourseFromCart(idOfCourse); // removing course from cart
    this.checkTotalPrice(); // update price
  }

  checkTotalPrice() {
    // calculate the price
    this.totalPrice = 0;
    this.userProfile.Cart.forEach((course: any) => {
      // loop all the courses in cart array in the user profile and calculate there total price
      this.totalPrice =
        this.totalPrice + this.arrayOfCourses[course].discountedPrice;
    });
  }

  setOpen(isOpen: boolean) {
    // open modal
    this.isModalOpen = isOpen;
  }

  completeCheckOut() {
    //complete the check out by removing all courses from cart and update the price
    this.arrayOfCourses.forEach((course: { id: any }) => {
      this.removeCourseFromCart(course.id);
    });
    this.setOpen(false);
  }
}
