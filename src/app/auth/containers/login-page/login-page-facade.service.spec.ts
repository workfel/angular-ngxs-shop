import { TestBed } from '@angular/core/testing';

import { LoginPageFacadeService } from './login-page-facade.service';

describe('LoginPageFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginPageFacadeService = TestBed.get(LoginPageFacadeService);
    expect(service).toBeTruthy();
  });
});
