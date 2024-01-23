import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: any = [];
  targetDateTime: Date | undefined;
 
  constructor(private http: HttpClient) {}

  fetchCourses() {
    // this function should be calling a function in function folder that call the api and return the data
    // but now we have the data locally
    this.http.get('../../assets/data/data.json').subscribe(
      //fetchung the data in the json file
      (dataArray: any) => {
        this.courses = dataArray; // save it into the object
        this.addIdsToCourses();
      },
      (error) => {
        console.error('Error fetching data:', error); //error handle
      }
    );
  }

  getCourses() {
    return this.courses;
  }

  addIdsToCourses() {
    const nowDate = new Date();
    this.courses.forEach(
      (
        course: {
          discountEndDate: Date;
          discountPercentage: any;
          actualPrice: any;
          discountedPrice: number;
          id: any;
        },
        index: any
      ) => {
        course.id = index;
        this.targetDateTime = new Date(course.discountEndDate)
        if((nowDate < this.targetDateTime) ==  true){
        course.discountedPrice = parseFloat(
          (
            parseFloat(course.actualPrice.replace('₹', '')) -
            (parseFloat(course.actualPrice.replace('₹', '')) *
              parseFloat(course.discountPercentage.replace('%', ''))) /
              100
          ).toFixed(2)
        );
      } else{
        course.discountedPrice =  parseFloat(course.actualPrice.replace('₹', ''))
      }







      }
    );

    console.log(this.courses);
  }
}
