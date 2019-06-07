import { Selector, State } from '@ngxs/store';
import { defaultProductsListModel, ProductsListStateModel } from '../models/products-list.state-model';

@State<ProductsListStateModel>({
  name: 'productsList',
  defaults: defaultProductsListModel,
})
export class ProductsListState {
  @Selector()
  static getLoaded(state: ProductsListStateModel) {
    return state.loaded;
  }

  @Selector()
  static getLoading(state: ProductsListStateModel) {
    return state.loading;
  }

  @Selector()
  static getIds(state: ProductsListStateModel) {
    return state.ids;
  }


}
