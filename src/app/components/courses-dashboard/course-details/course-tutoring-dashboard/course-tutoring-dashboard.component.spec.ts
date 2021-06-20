import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTutoringDashboardComponent } from './course-tutoring-dashboard.component';

describe('CourseTutoringDashboardComponent', () => {
  let component: CourseTutoringDashboardComponent;
  let fixture: ComponentFixture<CourseTutoringDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTutoringDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTutoringDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
