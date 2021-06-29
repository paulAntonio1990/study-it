import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../../../services/course.service";
import {Router} from "@angular/router";
import {CourseDto} from "../../../../domain/courseDto";

@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrls: ['./course-description.component.scss']
})
export class CourseDescriptionComponent implements OnInit {

  course!: CourseDto;

  constructor(private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
    const courseId = this.getCourseIdFromUrl();
    this.courseService.findCourseById(+courseId)
      .subscribe(course => {
        this.course = course
      });
  }

  private getCourseIdFromUrl() {
    return this.router.url.split("/")[2];
  }

}
