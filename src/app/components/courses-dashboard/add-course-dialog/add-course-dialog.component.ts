import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CourseDomain} from "../../../domain/courseDomain";
import {StudyType} from "../../../domain/studyType";
import {StudyYear} from "../../../domain/studyYear";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  chaptersFGs: FormGroup[] = [];

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
      courseYearControl: ['', Validators.required],
      courseShortDescriptionControl: ['', Validators.required],
      courseLongDescriptionControl: ['', Validators.required],
      chapters: this.formBuilder.array(this.chaptersFGs)
    });
  }

  get chapters() {
    return this.addCourseFormGroup.controls['chapters'] as FormArray;
  }

  addChapter() {
    const chapterForm = this.formBuilder.group({
      chapterNameControl: ['', Validators.required]
    });

    this.chapters.push(chapterForm);
  }

  deleteChapter(chapterIndex: number) {
    this.chapters.removeAt(chapterIndex);
  }

  onClose() {
    this.dialogRef.close(false);
  }

  onCreate() {
    this.isFormSubmitted = true;

    if (this.addCourseFormGroup.valid) {
      const courseDto = this.createDtoFromForm();

      this.courseService.createCourse(courseDto).subscribe(createdCourse => {
        if (createdCourse) {
          this.dialogRef.close(true);
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
    const chapters = [];
    for(let value of this.chapters.getRawValue()) {
      console.log('value = ', value);
      const chapter = {
        name: value.chapterNameControl
      }
      chapters.push(chapter)
    }

    const chaptersV = this.chapters.getRawValue();

    return {
      id: this.addCourseFormGroup.get('courseIdControl')?.value,
      name: this.addCourseFormGroup.get('courseNameControl')?.value,
      domain: this.addCourseFormGroup.get('courseDomainControl')?.value,
      studyProgram: this.addCourseFormGroup.get('courseStudyProgramControl')?.value,
      year: this.addCourseFormGroup.get('courseYearControl')?.value,
      creator: {
        id: this.tokenHandlingService.getUser().id
      },
      content: {
        shortDescription: this.addCourseFormGroup.get('courseShortDescriptionControl')?.value,
        longDescription: this.addCourseFormGroup.get('courseLongDescriptionControl')?.value,
        chapters: chapters
      }
    } as CourseDto;
  }

  isControlValid(name: string, formGroup: FormGroup): boolean {
    return this.fieldValidationService.isValid(name, formGroup);
  }

  private rebuildForm() {
    const formValue = {
      courseIdControl: this.course.id,
      courseNameControl: this.course.name,
      courseDomainControl: this.course.domain,
      courseStudyProgramControl: this.course.studyProgram,
      courseYearControl: this.course.year,
      courseShortDescriptionControl: this.course.content?.shortDescription,
      courseLongDescriptionControl: this.course.content?.longDescription
    };
    this.addCourseFormGroup.reset(formValue);
  }

  onEdit() {
    this.isFormSubmitted = true;
    if (this.addCourseFormGroup.valid) {
      const courseDto = this.createDtoFromForm();

      this.courseService.createCourse(courseDto).subscribe(createdCourse => {
        if (createdCourse) {
          this.dialogRef.close(true);
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
