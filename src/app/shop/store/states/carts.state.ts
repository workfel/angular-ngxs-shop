import { Action, State, StateContext } from '@ngxs/store';
import { AddToCart, CartClearedSuccess, ClearCart, RemoveToCart } from '../actions/carts.action';
import { produce } from '@ngxs-labs/immer-adapter';
import { CartStateModel, defaultCartModel } from '../models/cart.state-model';

@State<CartStateModel>({
  name: 'carts',
  defaults: defaultCartModel,
})
export class CartsState {

  @Action(AddToCart)
  addBook(
    ctx: StateContext<CartStateModel>,
    { payload }: AddToCart
  ) {
    const state = ctx.getState();
    const productId: string = payload;

    if (state.ids.indexOf(productId) === -1) {

      // https://www.npmjs.com/package/immer#inline-shortcuts-using-void
      produce(ctx, (draft: CartStateModel) => void draft.ids.push(productId));
    }
  }

  @Action(RemoveToCart)
  removeBook(
    { getState, patchState }: StateContext<CartStateModel>,
    { payload }: RemoveToCart
  ) {
    const state = getState();
    const productId = payload;

    patchState({ ids: state.ids.filter(id => id !== productId) });
  }

  @Action(ClearCart)
  clear(
    ctx: StateContext<CartStateModel>,
    {}: ClearCart
  ) {
    ctx.setState({
      ids: []
    });

    // TODO: can manage error and success and dispatch the good action
    ctx.dispatch(new CartClearedSuccess('sucess'));
  }
}
