import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { LoadAllProducts } from './store/actions/products-list.action';
import { Select } from '@ngxs/store';
import { ShopState } from './store/states/shop.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopFacadeService {

  @Select(ShopState.getCartsCount)
  countCarts$: Observable<number>;

  @Select(ShopState.getCartsTotalPrice)
  amountCarts$: Observable<number>;

  constructor() {
  }

  @Dispatch()
  loadProducts() {
    return new LoadAllProducts();
  }
}
