import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseDto} from "../../../domain/courseDto";

@Component({
  selector: 'app-course-preview-dialog',
  templateUrl: './course-preview-dialog.component.html',
  styleUrls: ['./course-preview-dialog.component.scss']
})
export class CoursePreviewDialogComponent implements OnInit {

  course!: CourseDto;

  constructor( public dialogRef: MatDialogRef<CoursePreviewDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data?.course) {
      this.course = this.data.course;
    }
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  onSubscribe() {
    //todo
  //  create course subscription functionality;
    this.dialogRef.close();
  }
}
