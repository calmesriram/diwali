import { TestBed } from '@angular/core/testing';

import { MCQService } from './mcq.service';

describe('MCQService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MCQService = TestBed.get(MCQService);
    expect(service).toBeTruthy();
  });
});
