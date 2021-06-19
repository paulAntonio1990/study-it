import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FieldValidationServiceService {

  constructor() { }

  isValid(field: string, fg: FormGroup): boolean {
    if (fg.controls[field]) {
      return fg.controls[field].valid && fg.controls[field].touched;
    }
    return false;
  }

  validateControls(fg: FormGroup) {
    Object.keys(fg.controls).forEach(field => {
      const control = fg.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateControls(control);
      }
    });
  }
}
