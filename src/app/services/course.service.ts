import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseDto} from "../domain/courseDto";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  getCourses(): Observable<CourseDto[]> {
    return this.httpClient.get<CourseDto[]>(this.serverUrl + '/course/find-all');
  }

  createCourse(courseDto: CourseDto): Observable<CourseDto> {
    return this.httpClient.post<CourseDto>(this.serverUrl + '/course/add-course', courseDto);
  }
}
