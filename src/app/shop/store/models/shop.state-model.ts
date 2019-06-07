import { Product } from '../../models/product';

export interface ShopStateModel {
  ids: string[];
  entities: {
    [id: string]: Product;
  };
  selectedProductId: string | null;
  items: Product[];
}

export const defaultShopModel: ShopStateModel = {
  ids: [],
  entities: {},
  selectedProductId: null,
  items: []
};
