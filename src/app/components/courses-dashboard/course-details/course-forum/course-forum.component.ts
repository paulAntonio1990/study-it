import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CourseDto} from "../../../../domain/courseDto";
import {Router} from "@angular/router";
import {CourseService} from "../../../../services/course.service";
import {AddPostDialogComponent} from "./add-post-dialog/add-post-dialog.component";

@Component({
  selector: 'app-course-forum',
  templateUrl: './course-forum.component.html',
  styleUrls: ['./course-forum.component.scss']
})
export class CourseForumComponent implements OnInit {

  course: CourseDto = {} as CourseDto;

  constructor(private router: Router,
              private courseService: CourseService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const courseId = this.getCourseIdFromUrl();
    this.courseService.findCourseById(+courseId)
      .subscribe(course => {
        this.course = course
      });
  }

  addPost() {
    let matDialogRef = this.dialog.open(AddPostDialogComponent,{
      width: '400px',
      height: '400px',
      data: {
        course: this.course
      }
    });

    matDialogRef.afterClosed().subscribe( createdPost => {
      if (createdPost) {
        window.location.reload();
      }
    })
  }

  private getCourseIdFromUrl() {
    return this.router.url.split("/")[2];
  }
}
