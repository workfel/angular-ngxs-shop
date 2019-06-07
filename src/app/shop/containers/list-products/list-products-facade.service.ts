import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { ShopState } from '../../store/states/shop.state';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { GoToProductDetail, SelectProduct } from '../../store/actions/product.action';
import { AddToCart } from '../../store/actions/carts.action';

@Injectable({
  providedIn: 'root'
})
export class ListProductsFacadeService {

  @Select(ShopState.getProductCollection)
  products$: Observable<Product[]>;

  constructor() {
  }

  @Dispatch()
  selectProduct(productId: string) {
    return [
      new SelectProduct(productId),
      new GoToProductDetail()
    ];
  }

  @Dispatch()
  addToCart(productId: string) {
    return [
      new AddToCart(productId),
    ];
  }
}
