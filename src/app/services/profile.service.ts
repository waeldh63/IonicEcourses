import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile: any = {
    FirstName: 'wael',
    LastName: 'Daher',
    AboutYourself: 'This is not a mendatory field and can be null ',
    YourRole: 'this field is for role with max char 200',
    IsStudent: 'professional',
    Expertise: 'Frontend',
    Experience: '0-5',
    Wishlist: [],
    Cart: [],
  };
  constructor() {}
  getProfile() {
    return this.profile;
  }

  addToWishList(idOfCourse: number) {
    this.profile.Wishlist.push(idOfCourse);
  }
  removeCourseFromWishList(idOfCourse: number) {
    this.profile.Wishlist = this.profile.Wishlist.filter(
      (item: number) => item !== idOfCourse
    );
  }

  checkWishListExistCourse(idOfCourse: any) {
    return this.profile.Wishlist.includes(idOfCourse);
  }

  addToCart(idOfCourse: number) {
    this.profile.Cart.push(idOfCourse);
  }
  removeCourseFromCart(idOfCourse: number) {
    this.profile.Cart = this.profile.Cart.filter(
      (item: number) => item !== idOfCourse
    );
  }

  checkCartExistCourse(idOfCourse: any) {
    return this.profile.Cart.includes(idOfCourse);
  }

  isStudentChanged(IsStudent: string) {
    this.profile.IsStudent = IsStudent;
  }

  setProfileDetails(
    FirstName: string,
    LastName: string,
    AboutYourself: string,
    YourRole: string,
    IsStudent: any,
    Experience: string,
    Expertise: string
  ) {
    this.profile.FirstName = FirstName;
    this.profile.LastName = LastName;
    this.profile.AboutYourself = AboutYourself;
    this.profile.YourRole = YourRole;
    this.profile.IsStudent = IsStudent;
    if (IsStudent == 'professional') {
      this.profile.Experience = Experience;
      this.profile.Expertise = Expertise;
    } else {
      this.profile.Experience = '';
      this.profile.Expertise = '';
    }
  }
}
