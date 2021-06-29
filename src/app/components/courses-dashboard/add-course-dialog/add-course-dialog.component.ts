import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseDomain} from "../../../domain/courseDomain";
import {StudyType} from "../../../domain/studyType";
import {StudyYear} from "../../../domain/studyYear";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../services/course.service";
import {CourseDto} from "../../../domain/courseDto";
import {FieldValidationServiceService} from "../../../services/field-validation-service.service";
import {tap} from "rxjs/operators";
import {TokenHandlingService} from "../../../services/token-handling.service";

@Component({
  selector: 'add-course-dialog',
  templateUrl: './add-course-dialog.component.html',
  styleUrls: ['./add-course-dialog.component.scss']
})
export class AddCourseDialogComponent implements OnInit{

  courseDomains = [CourseDomain.INFORMATICA, CourseDomain.STATISTICA, CourseDomain.ECONOMIE];
  studyTypes = [StudyType.LICENTA, StudyType.MASTERAT, StudyType.DOCTORAT];
  studyYears = [StudyYear.I, StudyYear.II, StudyYear.III];

  addCourseFormGroup! : FormGroup;
  isFormSubmitted = false;
  course!: CourseDto;

  constructor(
    public dialogRef: MatDialogRef<AddCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private fieldValidationService: FieldValidationServiceService,
    private tokenHandlingService: TokenHandlingService) {
    this.initForm();
  }

  initForm() {
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
    this.isFormSubmitted = true;
    if (this.addCourseFormGroup.valid) {
      const courseDto = this.createDtoFromForm();

      this.courseService.createCourse(courseDto).subscribe(createdCourse => {
        if (createdCourse) {
          this.dialogRef.close();
        }
      });
    } else {
      this.fieldValidationService.validateControls(this.addCourseFormGroup);
    }
  }

  ngOnInit(): void {
    if (this.data?.course) {
      this.courseService.findCourseById(this.data.course.id).pipe(
        tap(course => this.course = course)
      ).subscribe(() => this.rebuildForm())
    } else {
      this.course = {} as CourseDto;
    }
  }

  private createDtoFromForm() {
    return {
      id: this.addCourseFormGroup.get('courseIdControl')?.value,
      name: this.addCourseFormGroup.get('courseNameControl')?.value,
      domain: this.addCourseFormGroup.get('courseDomainControl')?.value,
      studyProgram: this.addCourseFormGroup.get('courseStudyProgramControl')?.value,
      year: this.addCourseFormGroup.get('courseYearControl')?.value,
      creator: {
        id: this.tokenHandlingService.getUser().id
      }
    } as CourseDto;
  }

  isControlValid(name: string): boolean {
    return this.fieldValidationService.isValid(name, this.addCourseFormGroup);
  }

  private rebuildForm() {
    const formValue = {
      courseIdControl: this.course.id,
      courseNameControl: this.course.name,
      courseDomainControl: this.course.domain,
      courseStudyProgramControl: this.course.studyProgram,
      courseYearControl: this.course.year
    };
    this.addCourseFormGroup.reset(formValue);
  }

  onEdit() {
    this.isFormSubmitted = true;
    if (this.addCourseFormGroup.valid) {
      const courseDto = this.createDtoFromForm();

      this.courseService.createCourse(courseDto).subscribe(createdCourse => {
        if (createdCourse) {
          this.dialogRef.close();
        }
      });
    } else {
      this.fieldValidationService.validateControls(this.addCourseFormGroup);
    }
  }

  existsCourse() {
    return !(this.data?.course == null);
  }
}
