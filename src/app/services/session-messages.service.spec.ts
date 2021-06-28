import { TestBed } from '@angular/core/testing';

import { SessionMessagesService } from './session-messages.service';

describe('SessionMessagesService', () => {
  let service: SessionMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
