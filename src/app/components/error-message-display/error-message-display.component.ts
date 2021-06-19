import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'error-message-display',
  templateUrl: './error-message-display.component.html',
  styleUrls: ['./error-message-display.component.scss']
})
export class ErrorMessageDisplayComponent {

  @Input() errorMessage: string = '';
  @Input() displayError: boolean = false;

  constructor() { }

}
