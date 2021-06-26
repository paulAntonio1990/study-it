import {Component, Input, OnInit} from '@angular/core';
import {TutoringSessionDto} from "../../../../../domain/tutoringSessionDto";
import {TutoringSessionService} from "../../../../../services/tutoring-session.service";

@Component({
  selector: 'tutoring-session-card',
  templateUrl: './tutoring-session-card.component.html',
  styleUrls: ['./tutoring-session-card.component.scss']
})
export class TutoringSessionCardComponent implements OnInit {

  @Input() tutoringSession!: TutoringSessionDto;

  constructor() {
  }

  ngOnInit(): void {
  }

  openSession() {
    console.log('openSessionCard');
  }

  onDelete(tutoringSession: TutoringSessionDto) {
    console.log('delete session!');
  }
}
