import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { ShopState } from '../../store/states/shop.state';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { RemoveToCart } from '../../store/actions/carts.action';

@Injectable({
  providedIn: 'root'
})
export class ListCartsFacadeService {

  @Select(ShopState.getCartsList)
  $carts: Observable<Product[]>;

  constructor() {
  }

  @Dispatch()
  removeToCart(id: string) {
    return new RemoveToCart(id);
  }
}
