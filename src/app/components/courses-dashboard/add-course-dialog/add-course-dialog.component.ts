import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseDomain} from "../../../domain/courseDomain";
import {StudyType} from "../../../domain/studyType";
import {StudyYear} from "../../../domain/studyYear";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../services/course.service";
import {CourseDto} from "../../../domain/courseDto";

@Component({
  selector: 'add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.scss']
})
export class AddCourseDialogComponent implements OnInit{

  courseDomains = [CourseDomain.INFORMATICA, CourseDomain.STATISTICA, CourseDomain.ECONOMIE];
  studyTypes = [StudyType.LICENTA, StudyType.MASTERAT, StudyType.DOCTORAT];
  studyYears = [StudyYear.I, StudyYear.II, StudyYear.III];

  addCourseFormGroup : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private courseService: CourseService) {
    this.addCourseFormGroup = this.formBuilder.group({
      courseIdControl: [{value: null, disabled: true}],
      courseNameControl: ['', Validators.required],
      courseDomainControl: ['', Validators.required],
      courseStudyProgramControl: ['', Validators.required],
      courseYearControl: ['', Validators.required]
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onCreate() {
    if (this.addCourseFormGroup.valid) {
      const courseDto = this.createDtoFromForm();

      this.courseService.createCourse(courseDto).subscribe(createdCourse => {
        if (createdCourse) {
          this.dialogRef.close()
        }
      });
    } else {
      console.log('form not valid!');
    }
  }

  ngOnInit(): void {
    this.addCourseFormGroup = this.formBuilder.group({
      courseIdControl: [''],
      courseNameControl: ['', Validators.required],
      courseDomainControl: ['', Validators.required],
      courseStudyProgramControl: ['', Validators.required],
      courseYearControl: ['', Validators.required]
    });

  }

  private createDtoFromForm() {
    return {
      id: this.addCourseFormGroup.get('courseIdControl')?.value,
      name: this.addCourseFormGroup.get('courseNameControl')?.value,
      domain: this.addCourseFormGroup.get('courseDomainControl')?.value,
      studyProgram: this.addCourseFormGroup.get('courseStudyProgramControl')?.value,
      year: this.addCourseFormGroup.get('courseYearControl')?.value
    } as CourseDto;
  }
}
