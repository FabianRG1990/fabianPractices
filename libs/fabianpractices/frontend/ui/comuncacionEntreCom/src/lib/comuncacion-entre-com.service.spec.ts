import { TestBed } from '@angular/core/testing';

import { ComuncacionEntreComService } from './comuncacion-entre-com.service';

describe('ComuncacionEntreComService', () => {
  let service: ComuncacionEntreComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComuncacionEntreComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
