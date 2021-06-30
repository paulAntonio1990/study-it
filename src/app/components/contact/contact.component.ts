import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FieldValidationServiceService} from "../../services/field-validation-service.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  addContactRequestFormGroup!: FormGroup;
  isFormSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private fieldValidationService: FieldValidationServiceService) { }

  ngOnInit(): void {
    this.addContactRequestFormGroup = this.formBuilder.group({
      emailControl: ['', Validators.required],
      bodyControl: ['', Validators.required]
    })
  }

  onCreate() {
    console.log('contact request sent!');
  }

  isControlValid(name: string, formGroup: FormGroup): boolean {
    return this.fieldValidationService.isValid(name, formGroup);
  }

}
