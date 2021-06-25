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
    return this.httpClient.get<CourseDto[]>(this.serverUrl + '/courses/find-all');
  }

  createCourse(courseDto: CourseDto): Observable<CourseDto> {
    return this.httpClient.post<CourseDto>(this.serverUrl + '/courses', courseDto);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.serverUrl}/courses/${courseId}`);
  }

  findCourseById(courseId: number): Observable<CourseDto> {
    return this.httpClient.get<CourseDto>(`${this.serverUrl}/courses/${courseId}`);
  }
}
