export class SelectCategory {
  static readonly type = '[Shop] SelectCategory';

  constructor(public payload: string) {
  }
}

export class ShowAllProduct {
  static readonly type = '[Product] ShowAllProduct';

  constructor() {
  }
}
