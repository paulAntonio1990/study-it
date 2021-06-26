import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTutoringSessionDialogComponent } from './add-tutoring-session-dialog.component';

describe('AddTutoringSessionDialogComponent', () => {
  let component: AddTutoringSessionDialogComponent;
  let fixture: ComponentFixture<AddTutoringSessionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTutoringSessionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTutoringSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
