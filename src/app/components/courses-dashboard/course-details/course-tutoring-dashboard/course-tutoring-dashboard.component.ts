import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CourseDto} from "../../../../domain/courseDto";
import {CourseService} from "../../../../services/course.service";
import {TutoringSessionService} from "../../../../services/tutoring-session.service";
import {MatDialog} from "@angular/material/dialog";
import {AddTutoringSessionDialogComponent} from "./add-tutoring-session-dialog/add-tutoring-session-dialog.component";

@Component({
  selector: 'app-course-tutoring-dashboard',
  templateUrl: './course-tutoring-dashboard.component.html',
  styleUrls: ['./course-tutoring-dashboard.component.scss']
})
export class CourseTutoringDashboardComponent implements OnInit {

  course: CourseDto = {} as CourseDto;

  constructor(private router: Router,
              private courseService: CourseService,
              private tutoringSessionService: TutoringSessionService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    const courseId = this.getCourseIdFromUrl();
    this.courseService.findCourseById(+courseId)
      .subscribe(course => {
        this.course = course
      });
  }

  addTutoringSession() {
    let matDialogRef = this.dialog.open(AddTutoringSessionDialogComponent,{
      width: '400px',
      height: '400px',
      data: {
        course: this.course
      }
    });

    matDialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    })
  }

  private getCourseIdFromUrl() {
    return this.router.url.split("/")[2];
  }
}
