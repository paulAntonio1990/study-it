import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {SignupRequestDto} from "../../domain/signupRequestDto";
import {RoleType} from "../../domain/roleType";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: any = {
    username: null,
    role: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  roles = [RoleType.STUDENT, RoleType.PROFESTOR];

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const  { username, role, email, password } = this.form;
    const registerRequest = {
      userName: username,
      role: role,
      email: email,
      password: password
    } as SignupRequestDto;

    this.authenticationService.register(registerRequest).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
