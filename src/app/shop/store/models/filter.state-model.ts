export interface FilterStateModel {
  ids: string[];
  query: string;
  cateogry: string;
  loading: boolean;
  error: string;
}

export const defaultFilterModel: FilterStateModel = {
  ids: [],
  query: '',
  loading: false,
  error: '',
  cateogry: '',
};
