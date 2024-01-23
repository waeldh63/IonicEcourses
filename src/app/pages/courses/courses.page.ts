import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public arrayOfCourses: any = [];
  public Profile: any = [];
  public shoppingCart: number = 0;
  public cartPrice: number = 0;
  searchTerm = '';
  sortOption: string = 'lowest';
  nowDate = new Date();
  constructor(
    private CoursesService: CoursesService,
    private ProfileService: ProfileService,private router: Router
  ) {}
  ngOnInit() {
    this.arrayOfCourses = this.CoursesService.getCourses();
    this.Profile = this.ProfileService.getProfile();
    this.shoppingCart = this.Profile.Cart.length;
  }
  ionViewDidEnter() {
    this.shoppingCart = this.Profile.Cart.length;
    this.cartPrice = 0;
    this.Profile.Cart.forEach((course: any) => {
      this.cartPrice =
        this.cartPrice + this.arrayOfCourses[course].discountedPrice;
    });
  }


checkIfDiscountIsActive(discountPercentage:string,discountEndDate:string){

  const discountEnd = new Date(discountEndDate);

return(discountPercentage !== '0' && this.nowDate<discountEnd)

}



  addCourseToWishList(idOfCourse: any) {
    this.ProfileService.addToWishList(idOfCourse);
    if (this.ProfileService.checkCartExistCourse(idOfCourse)) {
      this.cartPrice =
        this.cartPrice - this.arrayOfCourses[idOfCourse].discountedPrice;
      this.removeCourseFromCart(idOfCourse);
    }
  }
  removeCourseFromWishList(idOfCourse: any) {
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }
  checkWishListExistCourse(idOfCourse: any) {
    return this.ProfileService.checkWishListExistCourse(idOfCourse);
  }

  addCourseToCart(idOfCourse: any) {
    this.shoppingCart++;
    this.cartPrice =
      this.arrayOfCourses[idOfCourse].discountedPrice + this.cartPrice;
    this.ProfileService.addToCart(idOfCourse);
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }
  removeCourseFromCart(idOfCourse: any) {
    this.shoppingCart--;
    this.ProfileService.removeCourseFromCart(idOfCourse);
  }
  checkCartExistCourse(idOfCourse: any) {
    return this.ProfileService.checkCartExistCourse(idOfCourse);
  }

  searchCourses() {
    const term = this.searchTerm.toLowerCase();
    this.arrayOfCourses = this.CoursesService.getCourses().filter(
      (course: { courseName: string; author: string; tags: any[] }) =>
        course.courseName.toLowerCase().includes(term) ||
        course.author.toLowerCase().includes(term) ||
        course.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  }

  sortCourses() {
    if (this.sortOption === 'lowest') {
      this.arrayOfCourses = this.arrayOfCourses.sort(
        (a: any, b: any) =>
          parseFloat(a.actualPrice.replace('₹', '')) -
          parseFloat(b.actualPrice.replace('₹', ''))
      );
    } else if (this.sortOption === 'highest') {
      this.arrayOfCourses = this.arrayOfCourses.sort(
        (a: any, b: any) =>
          parseFloat(b.actualPrice.replace('₹', '')) -
          parseFloat(a.actualPrice.replace('₹', ''))
      );
    }
  }
  navigateToOtherPage(courseId: number) {
    // Replace 'other-page' with the route or path you want to navigate to
    this.router.navigate(['/course-details', courseId]);
  }
  navigateToCartPage() {
    // Replace 'other-page' with the route or path you want to navigate to
    this.router.navigate(['/cardDetails']);
  }
}
