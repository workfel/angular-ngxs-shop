import { FilterProductItemModule } from './filter-product-item.module';

describe('FilterProductItemModule', () => {
  let filterProductItemModule: FilterProductItemModule;

  beforeEach(() => {
    filterProductItemModule = new FilterProductItemModule();
  });

  it('should create an instance', () => {
    expect(filterProductItemModule).toBeTruthy();
  });
});
