import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringSessionCardComponent } from './tutoring-session-card.component';

describe('TutoringSessionCardComponent', () => {
  let component: TutoringSessionCardComponent;
  let fixture: ComponentFixture<TutoringSessionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoringSessionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringSessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
