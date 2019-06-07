import { TestBed, inject } from '@angular/core/testing';

import { ShopFacadeService } from './shop-facade.service';

describe('ShopFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopFacadeService]
    });
  });

  it('should be created', inject([ShopFacadeService], (service: ShopFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
