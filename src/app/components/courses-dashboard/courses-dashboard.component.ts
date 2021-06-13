import { Component, OnInit } from '@angular/core';
import {CourseDto} from "../../domain/courseDto";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent implements OnInit {

  courses: CourseDto[] = [];

  constructor(private readonly courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

}
