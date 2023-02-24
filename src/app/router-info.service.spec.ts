import { TestBed } from '@angular/core/testing';

import { RouterInfoService } from './router-info.service';

describe('RouterInfoService', () => {
  let service: RouterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
