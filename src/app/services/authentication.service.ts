import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SignupRequestDto} from "../domain/signupRequestDto";
import {Observable} from "rxjs";
import {LoginRequestDto} from "../domain/loginRequestDto";

const AUTHENTICATION_URL = 'http://localhost:8080/authentication/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  register(signupRequest: SignupRequestDto): Observable<any> {
      return this.httpClient.post<any>(AUTHENTICATION_URL + 'register', signupRequest, httpOptions);
  }

  login(loginRequest: LoginRequestDto): Observable<any> {
    return this.httpClient.post<any>(AUTHENTICATION_URL + 'login', loginRequest, httpOptions);
  }
}
