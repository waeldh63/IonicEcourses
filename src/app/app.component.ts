import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private CoursesService: CoursesService) {}
  ngOnInit() {
    this.CoursesService.fetchCourses();
    // fetch all courses to use the data in the tabs
    // we fetch once the data
  }
}
