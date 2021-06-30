import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  isLinear = false;
  chapters = [
    {
      name:'Capitolul 1',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 2',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 3',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 4',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 5',
      content: 'Conținut capitol'
    },
    {
      name:'Capitolul 6',
      content: 'Conținut capitol'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
