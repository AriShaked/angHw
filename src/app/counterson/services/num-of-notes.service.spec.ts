import { TestBed } from '@angular/core/testing';

import { NumOfNotesService } from './num-of-notes.service';

describe('NumOfNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumOfNotesService = TestBed.get(NumOfNotesService);
    expect(service).toBeTruthy();
  });
});
