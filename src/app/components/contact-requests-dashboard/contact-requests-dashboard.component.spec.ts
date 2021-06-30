import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRequestsDashboardComponent } from './contact-requests-dashboard.component';

describe('ContactRequestsDashboardComponent', () => {
  let component: ContactRequestsDashboardComponent;
  let fixture: ComponentFixture<ContactRequestsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRequestsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRequestsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
