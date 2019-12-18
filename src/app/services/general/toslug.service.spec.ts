import { TestBed, inject } from '@angular/core/testing';

import { ToslugService } from './toslug.service';

describe('ToslugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToslugService]
    });
  });

  it('should be created', inject([ToslugService], (service: ToslugService) => {
    expect(service).toBeTruthy();
  }));
});
