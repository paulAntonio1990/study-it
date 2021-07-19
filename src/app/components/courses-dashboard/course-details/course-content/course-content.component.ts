import { Component, OnInit } from '@angular/core';
import {CourseDto} from "../../../../domain/courseDto";
import {CourseService} from "../../../../services/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  isLinear = false;
  chapters = [
    {
      name:'Capitolul 1',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 2',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 3',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 4',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 5',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 6',
      content: 'Conținut capitol'
    },
  ]

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
