import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  data: any =[
    {
      "courseName": "Advanced Machine Learning",
      "author": "Alex Johnson",
      "actualPrice": "₹1199",
      "discountPercentage": "15%",
      "discountEndDate": "2024-01-23T12:00:00",
      "tags": ["Machine Learning", "Python"]
    },
    {
      "courseName": "JavaScript Frameworks Masterclass",
      "author": "Emily White",
      "actualPrice": "₹899",
      "discountPercentage": "20%",
      "discountEndDate": "2024-01-24T12:00:00",
      "tags": ["JavaScript", "React", "Vue"]
    },
    {
      "courseName": "Full Stack Development with Django",
      "author": "Chris Turner",
      "actualPrice": "₹1499",
      "discountPercentage": "10%",
      "discountEndDate": "2024-01-25T12:00:00",
      "tags": ["Python", "Django", "JavaScript"]
    },
    {
      "courseName": "Cybersecurity Essentials",
      "author": "Sophia Davis",
      "actualPrice": "₹1299",
      "discountPercentage": "25%",
      "discountEndDate": "2024-01-27T12:00:00",
      "tags": ["Cybersecurity", "Network Security"]
    },
    {
      "courseName": "Mobile App UX Design",
      "author": "Daniel Smith",
      "actualPrice": "₹999",
      "discountPercentage": "18%",
      "discountEndDate": "2024-01-28T12:00:00",
      "tags": ["UX Design", "Mobile App Development"]
    },
    {
      "courseName": "Node.js for Beginners",
      "author": "Ava Williams",
      "actualPrice": "₹699",
      "discountPercentage": "22%",
      "discountEndDate": "2024-01-29T12:00:00",
      "tags": ["Node.js", "JavaScript"]
    },
    {
      "courseName": "Artificial Intelligence in Business",
      "author": "Noah Turner",
      "actualPrice": "₹1599",
      "discountPercentage": "12%",
      "discountEndDate": "2024-01-26T12:00:00",
      "tags": ["Artificial Intelligence", "Business"]
    },
    {
      "courseName": "Swift Programming for iOS",
      "author": "Emma Johnson",
      "actualPrice": "₹1099",
      "discountPercentage": "17%",
      "discountEndDate": "2024-02-25T12:00:00",
      "tags": ["iOS", "Swift"]
    },
    {
      "courseName": "Responsive Web Design Principles",
      "author": "Liam White",
      "actualPrice": "₹799",
      "discountPercentage": "21%",
      "discountEndDate": "2024-01-27T12:00:00",
      "tags": ["Web Design", "HTML", "CSS"]
    },
    {
      "courseName": "Java Fundamentals",
      "author": "Olivia Turner",
      "actualPrice": "₹899",
      "discountPercentage": "0",
      "discountEndDate": "0",
      "tags": ["Java"]
    },
    {
      "courseName": "Game Development with Unity",
      "author": "Lucas Davis",
      "actualPrice": "₹1399",
      "discountPercentage": "14%",
      "discountEndDate": "2024-01-26T12:00:00",
      "tags": ["Game Development", "Unity"]
    },
    {
      "courseName": "Python for Data Science",
      "author": "Aria Smith",
      "actualPrice": "₹1199",
      "discountPercentage": "0",
      "discountEndDate": "0",
      "tags": ["Python", "Data Science"]
    },
    {
      "courseName": "Frontend Development Bootcamp",
      "author": "Mia Johnson",
      "actualPrice": "₹999",
      "discountPercentage": "18%",
      "discountEndDate": "2024-01-27T12:00:00",
      "tags": ["HTML", "CSS", "JavaScript"]
    },
    {
      "courseName": "C# Programming Mastery",
      "author": "Jackson White",
      "actualPrice": "₹1099",
      "discountPercentage": "0",
      "discountEndDate": "0",
      "tags": ["C#"]
    },
    {
      "courseName": "Angular Framework Deep Dive",
      "author": "Ava Turner",
      "actualPrice": "₹1299",
      "discountPercentage": "15%",
      "discountEndDate": "2024-01-25T12:00:00",
      "tags": ["Angular"]
    },
    {
      "courseName": "Data Visualization with D3.js",
      "author": "Ethan Davis",
      "actualPrice": "₹899",
      "discountPercentage": "0",
      "discountEndDate": "0",
      "tags": ["Data Visualization", "D3.js"]
    },
    {
      "courseName": "Android App Development Basics",
      "author": "Isabella Smith",
      "actualPrice": "₹799",
      "discountPercentage": "0",
      "discountEndDate": "0",
      "tags": ["Android", "Mobile App Development"]
    },
    {
      "courseName": "Vue.js for Frontend Development",
      "author": "Logan Johnson",
      "actualPrice": "₹999",
      "discountPercentage": "18%",
      "discountEndDate": "2024-01-25T12:00:00",
      "tags": ["Vue.js", "JavaScript"]
    },
    {
      "courseName": "Cloud Computing Fundamentals",
      "author": "Sophie Turner",
      "actualPrice": "₹1199",
      "discountPercentage": "16%",
      "discountEndDate": "2024-01-25T12:00:00",
      "tags": ["Cloud Computing"]
    }
  ]
  
  courses: any = [];
  targetDateTime: Date | undefined;

  constructor(private http: HttpClient) {}

  fetchCourses() {
    // i put the data like this because on dedploy it show error when locating the json file 

    this.courses = this.data; // save it into the object
    this.addIdsToCourses();

  



    // this function should be calling a function in function folder that call the api and return the data
    // but now we have the data locally
    // this.http.get('../../../docs/assets/data/data.json').subscribe(
    //   //fetching the data in the json file
    //   (dataArray: any) => {
    //     this.courses = dataArray; // save it into the object
    //     this.addIdsToCourses();
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error); //error handle
    //   }
    // );
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
