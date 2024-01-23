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
    this.userProfile = this.ProfileService.getProfile();
    this.route.params.subscribe((params) => {
      this.courseId = params['id'];
    });
    this.course = this.CoursesService.getCourses()[this.courseId];
  }

  addCourseToWishList(idOfCourse: any) {
    if (!this.checkWishListExistCourse(idOfCourse)) {
      if (this.checkCartExistCourse(idOfCourse)) {
        this.removeCourseFromCart(idOfCourse);
      }
      this.ProfileService.addToWishList(idOfCourse);
      this.presentAlert('Course Added', 'Course Added To Wish List !!');
    } else if (this.checkWishListExistCourse(idOfCourse)) {
      this.presentAlert(
        'Existing Course',
        'Course ALready Exist in Wish List.'
      );
    }
  }

  addCourseToCart(idOfCourse: any) {
    if (!this.checkCartExistCourse(idOfCourse)) {
      if (this.checkWishListExistCourse(idOfCourse)) {
        this.removeCourseFromWishList(idOfCourse);
      }
      this.ProfileService.addToCart(idOfCourse);
      this.presentAlert('Course Added', 'Course Added To Cart !!');
    } else if (this.checkCartExistCourse(idOfCourse)) {
      this.presentAlert('Existing Course', 'Course ALready Exist in  Cart .');
    }
  }
  checkWishListExistCourse(idOfCourse: any) {
    return this.ProfileService.checkWishListExistCourse(idOfCourse);
  }
  checkCartExistCourse(idOfCourse: any) {
    return this.ProfileService.checkCartExistCourse(idOfCourse);
  }
  removeCourseFromCart(idOfCourse: any) {
    this.ProfileService.removeCourseFromCart(idOfCourse);
  }

  removeCourseFromWishList(idOfCourse: any) {
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }

  checkIfDiscountIsActive(discountPercentage: string, discountEndDate: string) {
    const discountEnd = new Date(discountEndDate);

    return discountPercentage !== '0' && this.nowDate < discountEnd;
  }
  checkDiscountRemainingTime(discountEndDate: string) {
    const discountEnd = new Date(discountEndDate);

    const timeDifference = (discountEnd as any) - (this.nowDate as any);
    this.discountHoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
    return this.discountHoursLeft;
  }

  async presentAlert(header: string, message: string) {
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
