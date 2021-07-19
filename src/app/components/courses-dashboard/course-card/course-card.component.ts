import {Component, Input, OnInit} from '@angular/core';
import {CourseDto} from "../../../domain/courseDto";
import {CourseService} from "../../../services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCourseDialogComponent} from "../add-course-dialog/add-course-dialog.component";
import {CoursePreviewDialogComponent} from "../course-preview-dialog/course-preview-dialog.component";
import {ConfirmationDialogComponent} from "../../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course!: CourseDto;
  @Input() isLoggedIn!: boolean;
  @Input() isAdmin!: boolean;
  @Input() isProfesor!: boolean;


  constructor(private courseService: CourseService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(course: CourseDto) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: {
        message: 'Sunteți sigur de ștergerea cursului?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.courseService.deleteCourse(course.id).subscribe(data => {
          this.reloadPage();
        })
      }
    });
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

    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult) {
        this.reloadPage();
      }
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
