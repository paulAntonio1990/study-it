import { TestBed } from '@angular/core/testing';

import { IsLoggedIdGuard } from './is-logged-id.guard';

describe('IsLoggedIdGuard', () => {
  let guard: IsLoggedIdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
