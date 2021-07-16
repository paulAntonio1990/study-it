import {Component, OnInit} from '@angular/core';
import {CourseDto} from "../../domain/courseDto";
import {CourseService} from "../../services/course.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCourseDialogComponent} from "./add-course-dialog/add-course-dialog.component";
import {OrderingType} from "../../domain/orderingType";
import {MatSelectChange} from "@angular/material/select";
import {CourseDomain} from "../../domain/courseDomain";
import {StudyType} from "../../domain/studyType";
import {StudyYear} from "../../domain/studyYear";
import {TokenHandlingService} from "../../services/token-handling.service";

@Component({
  selector: 'app-courses-dashboard',
  templateUrl: './courses-dashboard.component.html',
  styleUrls: ['./courses-dashboard.component.scss']
})
export class CoursesDashboardComponent implements OnInit {

  courses: CourseDto[] = [];
  tmpCourses: CourseDto[] = [];
  courseNameFilter!: string;
  orderingTypes = [OrderingType.A_Z, OrderingType.Z_A];
  courseDomains = [CourseDomain.INFORMATICA, CourseDomain.STATISTICA, CourseDomain.ECONOMIE];
  studyPrograms = [StudyType.LICENTA, StudyType.MASTERAT, StudyType.DOCTORAT];
  studyYears = [StudyYear.I, StudyYear.II, StudyYear.III];
  filters: any[] = [];
  isLoggedIn = false;
  private userRole = '';

  constructor(private readonly courseService: CourseService,
              public dialog: MatDialog,
              private tokenHandler: TokenHandlingService) {
  }

  ngOnInit(): void {
    this.getCourses();

    this.isLoggedIn = !!this.tokenHandler.getToken();

    if (this.isLoggedIn) {
      const loggedUser = this.tokenHandler.getUser();
      this.userRole = loggedUser.role;
    }
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.tmpCourses = courses;
        this.courses = this.tmpCourses;
      });
  }

  isAdmin() {
    return this.userRole === 'ROLE_ADMIN';
  }

  isProfesor() {
    return this.userRole === 'ROLE_PROFESOR';
  }

  addCourse() {
    let dialogRef = this.dialog.open(AddCourseDialogComponent,
      {
        width: '600px',
        height: '800px',
        data: {
          course: null
        }
      });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    })
  }

  onOrderingFilterChange($event: MatSelectChange) {
    this.orderByFilter($event.value);
  }

  private orderByFilter(value: any) {
    switch (value) {
      case OrderingType.A_Z:
        this.courses = this.courses.sort((first, second) => this.orderAscending(first.name, second.name));
        break;
      case OrderingType.Z_A:
        this.courses = this.courses.sort((first, second) => (-1) * this.orderAscending(first.name, second.name));
        break;
    }
  }

  private orderAscending(first: string, second: string) {
    if (first.toLowerCase() <= second.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  }

  onFilterChange($event: MatSelectChange) {
    this.generateFilter($event);

    this.courses = this.tmpCourses.filter((c: any) => this.filters.every(filter => c[filter.type] === filter.name));
  }

  private generateFilter($event: MatSelectChange) {
    if ($event.value) {
      const foundIndex = this.filters.findIndex(filter => filter.type === $event.value.type);
      if (foundIndex === -1) {
        this.filters.push($event.value);
      } else {
          this.filters[foundIndex] = $event.value;
      }
    } else {
      const foundIndex = this.filters.findIndex(filter => filter.type === $event.source.options.last.value.type);
      if (foundIndex !== -1) {
        this.filters.splice(foundIndex, 1)
      }
    }
  }
}
