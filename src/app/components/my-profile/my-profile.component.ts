import { Component, OnInit } from '@angular/core';
import {TokenHandlingService} from "../../services/token-handling.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  loggedUser: any;

  constructor(private tokenHandler: TokenHandlingService) { }

  ngOnInit(): void {

    this.loggedUser = this.tokenHandler.getUser();
    console.log("aici = ", this.loggedUser);
  }

}
