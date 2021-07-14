import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {FieldValidationServiceService} from "../../services/field-validation-service.service";
import {ContactRequestDto} from "../../domain/contactRequestDto";
import {ContactRequestService} from "../../services/contact-request.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  addContactRequestFormGroup!: FormGroup;
  isFormSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private fieldValidationService: FieldValidationServiceService,
              private contactRequestService: ContactRequestService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.addContactRequestFormGroup = this.formBuilder.group({
      emailControl: ['', Validators.required],
      bodyControl: ['', Validators.required]
    })
  }

  onCreate() {
    this.isFormSubmitted = true;

    if (this.addContactRequestFormGroup.valid) {
      const contactRequestDto = this.createDtoFromForm();

      this.contactRequestService.createContactRequest(contactRequestDto).subscribe(
        (contactRequestDto) => {
          setTimeout(() => {
              this.addContactRequestFormGroup.markAsUntouched();
              this.isFormSubmitted = false;
              Object.keys(this.addContactRequestFormGroup.controls).forEach((name) => {
                const control = this.addContactRequestFormGroup.controls[name];
                control.reset();
                control.markAsUntouched();
                control.setErrors(null);
              });
            }
            , 0);

          this.snackBar.open('Cerere de contact înregistrată', 'Închide', {
            duration: 3000
          })
        }
      );
    } else {
      this.fieldValidationService.validateControls(this.addContactRequestFormGroup);
    }
  }

  isControlValid(name: string, formGroup: FormGroup): boolean {
    return this.fieldValidationService.isValid(name, formGroup);
  }

  private createDtoFromForm() {
    return {
      email: this.addContactRequestFormGroup.get('emailControl')?.value,
      content: this.addContactRequestFormGroup.get('bodyControl')?.value
    } as ContactRequestDto;
  }
}
