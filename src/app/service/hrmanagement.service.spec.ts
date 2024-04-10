import { TestBed } from '@angular/core/testing';

import { HrmanagementService } from './hrmanagement.service';

describe('HrmanagementService', () => {
  let service: HrmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
