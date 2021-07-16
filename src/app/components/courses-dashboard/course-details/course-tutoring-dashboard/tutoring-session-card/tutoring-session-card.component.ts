import {Component, Input, OnInit} from '@angular/core';
import {TutoringSessionDto} from "../../../../../domain/tutoringSessionDto";
import {TutoringSessionService} from "../../../../../services/tutoring-session.service";
import {CourseDto} from "../../../../../domain/courseDto";

@Component({
  selector: 'tutoring-session-card',
  templateUrl: './tutoring-session-card.component.html',
  styleUrls: ['./tutoring-session-card.component.scss']
})
export class TutoringSessionCardComponent implements OnInit {

  @Input() course!: CourseDto;
  @Input() tutoringSession!: TutoringSessionDto;
  @Input() isLoggedIn!: boolean;
  @Input() isAdmin!: boolean;
  @Input() isProfesor!: boolean;

  constructor(private tutoringService: TutoringSessionService) {
  }

  ngOnInit(): void {
  }

  openSession() {
    console.log('openSessionCard');
  }

  onDelete(tutoringSession: TutoringSessionDto) {
    this.tutoringService.deleteById(tutoringSession.id)
      .subscribe(() =>{
        this.reloadPage();
      })
  }

  reloadPage() {
    window.location.reload();
  }
}
