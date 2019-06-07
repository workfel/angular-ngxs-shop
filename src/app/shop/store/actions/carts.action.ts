export class AddToCart {
  static readonly type = '[Cart] AddToCart';

  constructor(public payload: string) {
  }
}

export class RemoveToCart {
  static readonly type = '[Cart] RemoveToCart';

  constructor(public payload: string) {
  }
}

export class ClearCart {
  static readonly type = '[Cart] ClearCart';

  constructor() {
  }
}

export class CartClearedSuccess {
  static readonly type = '[Cart] CartClearedSuccess';

  constructor(public payload: string) {
  }
}

export class CartClearedError {
  static readonly type = '[Cart] CartClearedError';

  constructor(public payload: string) {
  }
}

