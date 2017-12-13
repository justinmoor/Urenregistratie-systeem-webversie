import { TestBed, inject } from '@angular/core/testing';

import { UrenService } from './uren.service';

describe('UrenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrenService]
    });
  });

  it('should be created', inject([UrenService], (service: UrenService) => {
    expect(service).toBeTruthy();
  }));
});
