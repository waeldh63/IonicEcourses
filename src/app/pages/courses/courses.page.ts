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
  public shoppingCartTotalItem: number = 0;
  public cartPrice: number = 0;
  searchTerm = '';
  sortOption: string = 'lowest';
  nowDate = new Date();
  constructor(
    private CoursesService: CoursesService,
    private ProfileService: ProfileService,
    private router: Router
  ) {}
  ngOnInit() {
    this.arrayOfCourses = this.CoursesService.getCourses(); // get user profile
    this.Profile = this.ProfileService.getProfile(); // get courses array
    this.shoppingCartTotalItem = this.Profile.Cart.length; //  here we get the shopping cart total item number
  }
  ionViewDidEnter() {
    this.shoppingCartTotalItem = this.Profile.Cart.length; //  every time we visit this page we should update the total item in shopping cart
    this.cartPrice = 0; // update cart price
    this.Profile.Cart.forEach((course: any) => {
      this.cartPrice =
        this.cartPrice + this.arrayOfCourses[course].discountedPrice; // here we loop al courses price that is found in the cart of the user
    });
  }

  checkIfDiscountIsActive(discountPercentage: string, discountEndDate: string) {
    const discountEnd = new Date(discountEndDate); // check if discount is active
    // the discount is active if there is an discount percentage and the end date of the discount should not passed now date
    // so we have to make sure of these 2 condition
    //first that we have a percentage number in discount
    //second the end date is not passed
    return discountPercentage !== '0' && this.nowDate < discountEnd;
  }

  addCourseToWishList(idOfCourse: any) {
    this.ProfileService.addToWishList(idOfCourse);
    // to add course to wishlist we have to remove it from cart if it already exist in the cart
    if (this.ProfileService.checkCartExistCourse(idOfCourse)) {
      this.cartPrice =
        this.cartPrice - this.arrayOfCourses[idOfCourse].discountedPrice;
      this.removeCourseFromCart(idOfCourse);
    }
  }
  removeCourseFromWishList(idOfCourse: any) {
    // removing course from wishlist
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }
  checkWishListExistCourse(idOfCourse: any) {
    //checking if course exist in wishlist
    return this.ProfileService.checkWishListExistCourse(idOfCourse);
  }

  addCourseToCart(idOfCourse: any) {
    // add course to cart
    this.shoppingCartTotalItem++;
    this.cartPrice =
      this.arrayOfCourses[idOfCourse].discountedPrice + this.cartPrice; // update cart price
    this.ProfileService.addToCart(idOfCourse);
    //here we remove it from wishlist if it exist in wishlist
    this.ProfileService.removeCourseFromWishList(idOfCourse);
  }
  removeCourseFromCart(idOfCourse: any) {
    //  remove course from cart
    this.shoppingCartTotalItem--; // the item should be minus 1 item cause we just remove 1 item from cart
    this.ProfileService.removeCourseFromCart(idOfCourse);
  }
  checkCartExistCourse(idOfCourse: any) {
    return this.ProfileService.checkCartExistCourse(idOfCourse); // check if cours exist in cart
  }

  searchCourses() {
    // search for course by title tags and author
    const term = this.searchTerm.toLowerCase(); //filter the array of course on the 3 element
    this.arrayOfCourses = this.CoursesService.getCourses().filter(
      (course: { courseName: string; author: string; tags: any[] }) =>
        course.courseName.toLowerCase().includes(term) ||
        course.author.toLowerCase().includes(term) ||
        course.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  }

  sortCourses() {
    if (this.sortOption === 'lowest') {
      //sorting course by price if we need it from lowest
      this.arrayOfCourses = this.arrayOfCourses.sort(
        (a: any, b: any) =>
          // actual price we have it as a string and it contains an symbol
          //so we need to replace that symbol by '' and then we take the numbers and we convert it as a number so we can make a comparition for sorting
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
  navigateToCourseDetailsPage(courseId: number) {
    this.router.navigate(['/course-details', courseId]);
  }
  navigateToCartPage() {
    this.router.navigate(['/cardDetails']);
  }
}
