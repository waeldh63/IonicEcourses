import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  courseId: number = 0;
  course: any = [];
  public userProfile: any = [];
  nowDate = new Date();
  showAlert: boolean = false;
  discountHoursLeft: number = 0;
  constructor(
    private CoursesService: CoursesService,
    private route: ActivatedRoute,
    private ProfileService: ProfileService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.userProfile = this.ProfileService.getProfile(); // get user profile data
    this.route.params.subscribe((params) => {
      this.courseId = params['id']; // here we get the id of the course from params
    });
    this.course = this.CoursesService.getCourses()[this.courseId]; // here we get the course details from the array of courses
  }

  addCourseToWishList(idOfCourse: any) {
    // to add course to the wishlist
    // we make sure it does not exsit in the wishlist
    if (!this.checkWishListExistCourse(idOfCourse)) {
      // we make sure if it exist in cart to remove it from cart
      if (this.checkCartExistCourse(idOfCourse)) {
        this.removeCourseFromCart(idOfCourse);
      }
      // now we add it to the wishlist
      this.ProfileService.addToWishList(idOfCourse);
      // trigger alert
      this.presentAlert('Course Added', 'Course Added To Wish List !!');
    } else if (this.checkWishListExistCourse(idOfCourse)) {
      // if already course exist in wishlist we trigger error alert
      this.presentAlert(
        'Existing Course',
        'Course ALready Exist in Wish List.'
      );
    }
  }

  addCourseToCart(idOfCourse: any) {
    // same as wishlist
    //first we make sure that course dont exist in cart
    if (!this.checkCartExistCourse(idOfCourse)) {
      //and if it exist in wish list we remove
      if (this.checkWishListExistCourse(idOfCourse)) {
        this.removeCourseFromWishList(idOfCourse);
      }
      // now we can add it to cart and trigger the alert
      this.ProfileService.addToCart(idOfCourse);
      this.presentAlert('Course Added', 'Course Added To Cart !!');
    } else if (this.checkCartExistCourse(idOfCourse)) {
      // if it is already exist in cart we trigger an error
      this.presentAlert('Existing Course', 'Course ALready Exist in  Cart .');
    }
  }
  checkWishListExistCourse(idOfCourse: any) {
    // check if course exist in wishlist
    return this.ProfileService.checkWishListExistCourse(idOfCourse);
  }
  checkCartExistCourse(idOfCourse: any) {
    // check if course exist in cart
    return this.ProfileService.checkCartExistCourse(idOfCourse);
  }
  removeCourseFromCart(idOfCourse: any) {
    //remove course from cart
    this.ProfileService.removeCourseFromCart(idOfCourse);
  }

  removeCourseFromWishList(idOfCourse: any) {
    //remove course from wishlist
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }

  checkIfDiscountIsActive(discountPercentage: string, discountEndDate: string) {
    // the discount is active if there is an discount percentage and the end date of the discount should not passed now date
    // so we have to make sure of these 2 condition
    //first that we have a percentage number in discount
    //second the end date is not passed
    const discountEnd = new Date(discountEndDate);
    //and we retun true or false
    
    return (discountPercentage !== '0' && this.nowDate < discountEnd);
  }
  checkDiscountRemainingTime(discountEndDate: string) {
    // here we check how many hour left for the discount to be ended
    const discountEnd = new Date(discountEndDate);
    const timeDifference = (discountEnd as any) - (this.nowDate as any);
    this.discountHoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
    console.log( this.discountHoursLeft)
    //and we return the number of hour left
    return this.discountHoursLeft;
  }

  async presentAlert(header: string, message: string) {
    //this is a common alert for all usage
    // we just change the title and message and we trigger the alert with our own title and message
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: this.alertButtons(),
    });

    await alert.present();
  }
  alertButtons() {
    return [
      {
        text: 'OK',
        handler: () => {
          this.showAlert = false;
        },
      },
    ];
  }
}
