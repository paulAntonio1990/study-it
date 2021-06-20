import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePreviewDialogComponent } from './course-preview-dialog.component';

describe('CoursePreviewDialogComponent', () => {
  let component: CoursePreviewDialogComponent;
  let fixture: ComponentFixture<CoursePreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePreviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
