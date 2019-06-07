export interface ProductsListStateModel {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const defaultProductsListModel: ProductsListStateModel = {
  loaded: false,
  loading: false,
  ids: []
};
