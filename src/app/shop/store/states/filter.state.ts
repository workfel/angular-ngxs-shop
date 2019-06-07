import { Action, State, StateContext } from '@ngxs/store';
import { SelectCategory, ShowAllProduct } from '../actions/filter.action';
import { defaultFilterModel, FilterStateModel } from '../models/filter.state-model';

@State<FilterStateModel>({
  name: 'filter',
  defaults: defaultFilterModel,
})
export class FilterState {

  @Action(SelectCategory)
  select({ dispatch, patchState }: StateContext<FilterStateModel>, { payload }: SelectCategory) {
    patchState({
      loading: true,
      error: '',
      cateogry: payload
    });
  }

  @Action(ShowAllProduct)
  all({ dispatch, patchState }: StateContext<FilterStateModel>, {}: ShowAllProduct) {
    patchState({
      loading: true,
      error: '',
      cateogry: ''
    });
  }

}
