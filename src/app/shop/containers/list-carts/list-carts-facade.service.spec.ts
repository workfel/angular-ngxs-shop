import { TestBed } from '@angular/core/testing';

import { ListCartsFacadeService } from './list-carts-facade.service';

describe('ListCartsFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListCartsFacadeService = TestBed.get(ListCartsFacadeService);
    expect(service).toBeTruthy();
  });
});
