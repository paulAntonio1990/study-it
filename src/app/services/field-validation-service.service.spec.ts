import { TestBed } from '@angular/core/testing';

import { FieldValidationServiceService } from './field-validation-service.service';

describe('FieldValidationServiceService', () => {
  let service: FieldValidationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldValidationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
