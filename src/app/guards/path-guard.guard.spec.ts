import { TestBed, async, inject } from '@angular/core/testing';

import { PathGuardGuard } from './path-guard.guard';

describe('PathGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PathGuardGuard]
    });
  });

  it('should ...', inject([PathGuardGuard], (guard: PathGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
