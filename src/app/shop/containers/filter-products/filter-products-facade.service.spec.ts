import { TestBed } from '@angular/core/testing';

import { FilterProductsFacadeService } from './filter-products-facade.service';

describe('FilterProductsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterProductsFacadeService = TestBed.get(FilterProductsFacadeService);
    expect(service).toBeTruthy();
  });
});
