import {Component, Input, OnInit} from '@angular/core';
import {CourseDto} from "../../../domain/courseDto";
import {CourseService} from "../../../services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCourseDialogComponent} from "../add-course-dialog/add-course-dialog.component";
import {CoursePreviewDialogComponent} from "../course-preview-dialog/course-preview-dialog.component";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: CourseDto;

  constructor(private courseService: CourseService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(course: CourseDto) {
    this.courseService.deleteCourse(course.id).subscribe(data => {
      this.reloadPage();
    })
  }

  onEdit(course: CourseDto) {
    let dialogRef = this.dialog.open(AddCourseDialogComponent,
      {
        width: '600px',
        height: '600px',
        data: {
          course: course
        }
      });

    dialogRef.afterClosed().subscribe(() => {
      this.reloadPage();
    })
  }

  openCoursePreview(course: CourseDto) {
    let dialogRef = this.dialog.open(CoursePreviewDialogComponent, {
      width: '800px',
      height: '800px',
      data: {
        course: course
      }
    })
  }

  reloadPage() {
    window.location.reload();
  }
}
