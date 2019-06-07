import { Product } from '../../models/product';

export class Load {
  static readonly type = '[Product] Load';

  constructor(public payload: Product) {
  }
}

export class SelectProduct {
  static readonly type = '[Product] SelectProduct';

  constructor(public payload: string) {
  }
}


export class GoToProductDetail {
  static readonly type = '[Product] GoToProductDetail ';

  constructor() {
  }
}
