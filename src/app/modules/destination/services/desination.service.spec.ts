import { TestBed } from '@angular/core/testing';

import { DesinationService } from './desination.service';

describe('DesinationService', () => {
  let service: DesinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
