import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionMessageDto} from "../domain/sessionMessageDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionMessagesService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  findAllBySessionId(sessionId: number): Observable<SessionMessageDto[]> {
    return this.httpClient.get<SessionMessageDto[]>(`${this.serverUrl}/session-message/by-session/${sessionId}`);
  }

}
