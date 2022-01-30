import { TestBed } from '@angular/core/testing';

import { VinhosService } from './vinhos.service';

describe('VinhosService', () => {
  let service: VinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
