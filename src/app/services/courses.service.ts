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
    this.http.get('../../../docs/assets/data/data.json').subscribe(
      //fetching the data in the json file
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
    return this.courses; // function to get the courses array
  }

  addIdsToCourses() {
    //  after we get the course array
    //we need to add to each object an id so we can manipulate the data correctly
    //and we add another field named discountedPrice in this field we same the calculated price after discount
    // NOTE THAT IF THE COURSE DONT HAVE DISCOUNT OR THE DISCOUNT IS ENDED WE SAVE IN THE discountedPrice FIELD THE ACTUAL PRICE
    //so in the end all course that have discount or dont have discount they have a field that contains the price after discount or without discount
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
        this.targetDateTime = new Date(course.discountEndDate);
        if (nowDate < this.targetDateTime == true) {
          // here we check if the date didn't passed today we apply the discount
          course.discountedPrice = parseFloat(
            // actual price is a string
            // parseFloat will turn string into number
            // but before parsefloat we should remove the sign in the string and just take the number
            (
              parseFloat(course.actualPrice.replace('₹', '')) -
              (parseFloat(course.actualPrice.replace('₹', '')) *
                parseFloat(course.discountPercentage.replace('%', ''))) /
                100
            ).toFixed(2)
          );
        } else {
          // if the discount day passed so we save the actual price
          course.discountedPrice = parseFloat(
            course.actualPrice.replace('₹', '')
          );
        }
      }
    );
  }
}
