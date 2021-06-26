import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TutoringSessionDto} from "../domain/tutoringSessionDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TutoringSessionService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  createTutoringSession(courseId: number, tutoringSession: TutoringSessionDto): Observable<TutoringSessionDto> {
    return this.httpClient.post<TutoringSessionDto>(`${this.serverUrl}/tutoring-sessions/${courseId}/create`, tutoringSession);
  }

  findAllByCourseId(courseId: number): Observable<TutoringSessionDto[]> {
    return this.httpClient.get<TutoringSessionDto[]>(`${this.serverUrl}/all-by-course/${courseId}`);
  }
}
