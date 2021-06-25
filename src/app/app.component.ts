import {Component, OnInit} from '@angular/core';
import {TokenHandlingService} from "./services/token-handling.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'study-it';

  private userRole: string = '';
  isLoggedIn = false;
  username?: string;

  constructor(private tokenHandler: TokenHandlingService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenHandler.getToken();

    if (this.isLoggedIn) {
      const loggedUser = this.tokenHandler.getUser();
      this.userRole = loggedUser.role;
      this.username = loggedUser.userName;
    }
  }

  logout(): void {
    this.tokenHandler.signOut();
    window.location.reload();
  }
}
