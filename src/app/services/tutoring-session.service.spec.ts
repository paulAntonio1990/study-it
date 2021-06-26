import { TestBed } from '@angular/core/testing';

import { TutoringSessionService } from './tutoring-session.service';

describe('TutoringSessionService', () => {
  let service: TutoringSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutoringSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
