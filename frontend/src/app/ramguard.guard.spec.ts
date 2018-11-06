import { TestBed, async, inject } from '@angular/core/testing';

import { RamguardGuard } from './ramguard.guard';

describe('RamguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RamguardGuard]
    });
  });

  it('should ...', inject([RamguardGuard], (guard: RamguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
