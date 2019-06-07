import { TestBed } from '@angular/core/testing';

import { AccountFacadeService } from './account-facade.service';

describe('AccountFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountFacadeService = TestBed.get(AccountFacadeService);
    expect(service).toBeTruthy();
  });
});
