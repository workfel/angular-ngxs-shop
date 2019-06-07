import { TestBed } from '@angular/core/testing';

import { ListProductsFacadeService } from './list-products-facade.service';

describe('ListProductsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProductsFacadeService = TestBed.get(ListProductsFacadeService);
    expect(service).toBeTruthy();
  });
});
