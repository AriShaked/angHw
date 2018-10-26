import { TestBed } from '@angular/core/testing';

import { NumOfOccurrencesService } from './num-of-occurrences.service';

describe('NumOfOccurrencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumOfOccurrencesService = TestBed.get(NumOfOccurrencesService);
    expect(service).toBeTruthy();
  });
});
