import { Component, OnInit } from '@angular/core';
import {CourseDto} from "../../domain/courseDto";
import {CourseService} from "../../services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCourseDialogComponent} from "./add-course-dialog/add-course-dialog.component";

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent implements OnInit {

  courses: CourseDto[] = [];

  constructor(private readonly courseService: CourseService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  addCourse() {
    let dialogRef = this.dialog.open(AddCourseDialogComponent,
      {
        width: '600px',
        height: '600px',
        data: {
          course: null
        }
      });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    })
  }
}
