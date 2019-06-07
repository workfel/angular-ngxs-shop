import { FilterProductsModule } from './filter-products.module';

describe('FilterProductsModule', () => {
  let filterProductsModule: FilterProductsModule;

  beforeEach(() => {
    filterProductsModule = new FilterProductsModule();
  });

  it('should create an instance', () => {
    expect(filterProductsModule).toBeTruthy();
  });
});
