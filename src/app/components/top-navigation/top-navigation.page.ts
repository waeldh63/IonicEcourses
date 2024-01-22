import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.page.html',
  styleUrls: ['./top-navigation.page.scss'],
})
export class TopNavigationPage implements OnInit {
  constructor(private http: HttpClient,) { }
  //  public arrayOfCourses: any[] = []  ; // object to fetch inside it the data
  ngOnInit() {     
  
  }
  // fetchCourses() {
  //   // this function should be calling a function in function folder that call the api and return the data 
  //   // but now we have the data locally
  //   this.http.get("../../assets/data/data.json").subscribe( //fetchung the data in the json file
  //     (dataArray: any) => {
  //       this.arrayOfCourses = dataArray; // save it into the object 
  //     },
  //     error => {
  //       console.error('Error fetching data:', error); //error handle
  //     }
  //   );
  // }
  // navigateToCourses() { // here we navigate to courses tab and we send the data in param so we can recieve the data in the courses tab 
  //   if (this.arrayOfCourses.length > 0 ) { // making sure that the data exist otherwise in somecases will show error ,like connection error from api calling
  //     this.router.navigate(['/courses'], { queryParams: { data: JSON.stringify(this.arrayOfCourses) } });
  //   } else {
  //     console.error('Array of courses is empty or not loaded yet.'); //error handle
  //   }
  // }
  
}
