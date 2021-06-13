import {Component, Input, OnInit} from '@angular/core';
import {CourseDto} from "../../../domain/courseDto";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() course?: CourseDto;

  constructor() { }

  ngOnInit(): void {
  }

}
