import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { ShopState } from '../../store/states/shop.state';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { AddToCart } from '../../store/actions/carts.action';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductDetailFacadeService {

  @Select(ShopState.getSelectedProduct)
  product$: Observable<Product>;

  constructor() {
  }

  @Dispatch()
  addToCart(productId: string) {
    return new AddToCart(productId);
  }
}
