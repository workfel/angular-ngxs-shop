import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectProduct } from '../../store/actions/product.action';

@Injectable({
  providedIn: 'root'
})
export class ShopDetailFacadeService {

  constructor() {
  }

  @Dispatch()
  selectProduct(productId: string) {
    return new SelectProduct(productId);
  }
}
