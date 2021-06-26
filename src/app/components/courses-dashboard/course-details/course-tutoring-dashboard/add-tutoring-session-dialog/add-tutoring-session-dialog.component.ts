import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseDto} from "../../../../../domain/courseDto";
import {FieldValidationServiceService} from "../../../../../services/field-validation-service.service";
import {TutoringSessionDto} from "../../../../../domain/tutoringSessionDto";
import {TutoringSessionService} from "../../../../../services/tutoring-session.service";

@Component({
  selector: 'app-add-tutoring-session-dialog',
  templateUrl: './add-tutoring-session-dialog.component.html',
  styleUrls: ['./add-tutoring-session-dialog.component.scss']
})
export class AddTutoringSessionDialogComponent implements OnInit {

  addTutoringSessionFormGroup! : FormGroup;
  isFormSubmitted = false;
  course!: CourseDto;

  constructor(public dialogRef: MatDialogRef<AddTutoringSessionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private fieldValidationService: FieldValidationServiceService,
              private tutoringSessionService: TutoringSessionService) {
    this.initForm();
    if (this.data?.course) {
        this.course = this.data.course;
    }
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.addTutoringSessionFormGroup = this.formBuilder.group({
      sessionNameControl: ['', Validators.required]
    })
  }

  onClose() {
    this.dialogRef.close();
  }

  isControlValid(name: string): boolean {
    return this.fieldValidationService.isValid(name, this.addTutoringSessionFormGroup);
  }

  onCreate() {
    this.isFormSubmitted = true;
    if (this.addTutoringSessionFormGroup.valid) {
      const sessionDto = this.createDtoFromForm();

      this.tutoringSessionService.createTutoringSession(this.course.id, sessionDto)
        .subscribe(createdSession => {
        if (createdSession) {
          this.dialogRef.close();
        }
      });
    } else {
      this.fieldValidationService.validateControls(this.addTutoringSessionFormGroup);
    }
  }

  private createDtoFromForm() {
    return {
      name: this.addTutoringSessionFormGroup.get('sessionNameControl')?.value
    } as TutoringSessionDto;
  }
}
