import { Component, OnInit } from '@angular/core';
import {CourseDto} from "../../../domain/courseDto";
import {Router} from "@angular/router";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  course: CourseDto = {} as CourseDto;

  constructor(private router: Router,
              private courseService: CourseService) {
    const courseId = this.getCourseIdFromUrl();
    courseService.findCourseById(+courseId)
      .subscribe(course => {
      this.course = course;
    })
  }

  private getCourseIdFromUrl() {
    return this.router.url.split("/")[2];
  }

  ngOnInit(): void {}

}
