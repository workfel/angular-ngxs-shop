import { TestBed } from '@angular/core/testing';

import { ApiShopService } from './api-shop.service';

describe('ApiShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiShopService = TestBed.get(ApiShopService);
    expect(service).toBeTruthy();
  });
});
