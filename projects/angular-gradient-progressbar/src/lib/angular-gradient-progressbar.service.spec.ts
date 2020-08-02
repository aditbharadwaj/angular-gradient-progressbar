import { TestBed } from '@angular/core/testing';

import { AngularGradientProgressbarService } from './angular-gradient-progressbar.service';

describe('AngularGradientProgressbarService', () => {
  let service: AngularGradientProgressbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularGradientProgressbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
