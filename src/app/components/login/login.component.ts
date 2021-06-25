import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {TokenHandlingService} from "../../services/token-handling.service";
import {LoginRequestDto} from "../../domain/loginRequestDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';

  constructor(private authenticationService: AuthenticationService,
              private tokenHandler: TokenHandlingService) { }

  ngOnInit(): void {
    if (this.tokenHandler.getToken()) {
      this.isLoggedIn = true;
      console.log('ehllo = ', this.tokenHandler.getUser());
      this.role = this.tokenHandler.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    const loginRequest = {
      userName: username,
      password: password
    } as LoginRequestDto;

    this.authenticationService.login(loginRequest).subscribe(
      data => {
        this.tokenHandler.saveToken(data.token);
        this.tokenHandler.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.tokenHandler.getUser().role;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
