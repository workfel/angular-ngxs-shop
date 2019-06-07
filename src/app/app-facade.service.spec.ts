import { TestBed } from '@angular/core/testing';

import { AppFacadeService } from './app-facade.service';

describe('AppFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFacadeService = TestBed.get(AppFacadeService);
    expect(service).toBeTruthy();
  });
});
