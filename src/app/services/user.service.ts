import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "../domain/userDto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  findAllUsers(): Observable<UserDto[]> {
    return this.httpClient.get<UserDto[]>(`${this.serverUrl}/users/find-all`);
  }
}
