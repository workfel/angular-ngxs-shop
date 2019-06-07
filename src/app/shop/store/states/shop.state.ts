import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CartsState } from './carts.state';
import { LoadAllProducts } from '../actions/products-list.action';
import { Product } from '../../models/product';
import { ProductsListState } from './products-list.state';
import { defaultShopModel, ShopStateModel } from '../models/shop.state-model';
import { ApiShopService } from '../../../core/services/api-shop.service';
import { FilterState } from './filter.state';
import { GoToProductDetail, SelectProduct } from '../actions/product.action';
import { Router } from '@angular/router';
import { CartStateModel } from '../models/cart.state-model';
import { FilterStateModel } from '../models/filter.state-model';

export const arrayToObject = entities => {
  return entities.reduce((obj, product: Product) => {
    return { ...obj, [product.id]: product };
  }, {});
};

@State<ShopStateModel>({
  name: 'shops',
  defaults: defaultShopModel,
  children: [CartsState, ProductsListState, FilterState],
})
export class ShopState {

  constructor(private readonly _apiShopService: ApiShopService,
              private readonly _router: Router) {

  }


  @Selector()
  static getEntities(state: ShopStateModel) {
    return state.entities;
  }

  @Selector()
  static getSelectedId(state: ShopStateModel) {
    return state.selectedProductId;
  }

  @Selector()
  static getSelectedProduct(state: ShopStateModel) {
    return state.selectedProductId && state.entities[state.selectedProductId];
  }

  @Selector([FilterState])
  static getProductCollection(
    state: ShopStateModel,
    filterStateModel: FilterStateModel
  ): Product[] {
    if (filterStateModel.cateogry === '') {
      return state.items;
    }
    return state.items.filter(i => i.category === filterStateModel.cateogry);
  }

  @Selector([CartsState])
  static getCartsList(
    state: ShopStateModel,
    cartStateModel: CartStateModel
  ): Product[] {
    const entities = state.entities;
    const ids = [...cartStateModel.ids];
    return ids.map(id => entities[id]);
    return state.items;
  }

  @Selector([CartsState])
  static getCartsCount(
    state: ShopStateModel,
    cartStateModel: CartStateModel
  ): number {
    return cartStateModel.ids.length;
  }

  @Selector([CartsState])
  static getCartsTotalPrice(
    state: ShopStateModel,
    cartStateModel: CartStateModel
  ): number {
    const entities = state.entities;
    const ids = [...cartStateModel.ids];
    return ids.map(id => entities[id])
      .reduce((acc, curr) => acc + curr.price, 0);
  }

  @Action(LoadAllProducts)
  addBook({ getState, patchState }: StateContext<ShopStateModel>, {}: LoadAllProducts) {
    const state = getState();

    this._apiShopService.list().subscribe((res) => {
      const ids = res.map<string>(book => book.id);
      const entities = arrayToObject(res);

      patchState({
        ids: [...state.ids, ...ids],
        entities: { ...state.entities, ...entities },
        items: res
      });
    });
  }

  @Action(SelectProduct)
  selectProduct(ctx: StateContext<ShopStateModel>, { payload }: SelectProduct) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      selectedProductId: payload
    });
  }

  @Action(GoToProductDetail)
  goToProductDetail(ctx: StateContext<ShopStateModel>, {}: GoToProductDetail) {
    const state = ctx.getState();

    this._router.navigate(['shops', 'product', state.selectedProductId]);
  }

  // @Action(RemoveBook)
  // removeBook(
  //   { getState, patchState }: StateContext<CollectionStateModel>,
  //   action: RemoveBook
  // ) {
  //   const state = getState();
  //   const bookId = action.payload.id;
  //
  //   patchState({ ids: state.ids.filter(id => id !== bookId) });
  // }
}
