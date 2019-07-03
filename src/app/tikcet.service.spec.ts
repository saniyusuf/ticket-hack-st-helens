import { TestBed } from '@angular/core/testing';

import { TikcetService } from './tikcet.service';

describe('TikcetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TikcetService = TestBed.get(TikcetService);
    expect(service).toBeTruthy();
  });
});
