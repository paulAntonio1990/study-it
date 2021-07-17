import {Component, Input, OnInit} from '@angular/core';
import {TutoringSessionDto} from "../../../../../domain/tutoringSessionDto";
import {TutoringSessionService} from "../../../../../services/tutoring-session.service";
import {CourseDto} from "../../../../../domain/courseDto";
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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

  constructor(private tutoringService: TutoringSessionService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openSession() {
    console.log('openSessionCard');
  }

  onDelete(tutoringSession: TutoringSessionDto) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: {
        message: 'Sunteți sigur de ștergerea sesiunii de tutoring?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.tutoringService.deleteById(tutoringSession.id)
          .subscribe(() => {
            this.reloadPage();
          })
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
