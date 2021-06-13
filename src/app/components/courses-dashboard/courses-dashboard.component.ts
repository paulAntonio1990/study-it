import { Component, OnInit } from '@angular/core';
import {CourseDto} from "../../domain/courseDto";

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent implements OnInit {

  courses: CourseDto[] = [
    {
      id: 1,
      name: "First Course",
      domain: "First Domain",
      studyProgram: "Licenta",
      year: 1
    } as CourseDto,
    {
      id: 2,
      name: "Second Course",
      domain: "Second Domain",
      studyProgram: "Licenta",
      year: 1
    } as CourseDto,
    {
      id: 3,
      name: "Third Course",
      domain: "First Domain",
      studyProgram: "Licenta",
      year: 2
    } as CourseDto,
    {
      id: 4,
      name: "Fourth Course",
      domain: "Third Domain",
      studyProgram: "Licenta",
      year: 1
    } as CourseDto
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
