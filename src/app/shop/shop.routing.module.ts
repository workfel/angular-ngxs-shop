import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductExistsGuard } from './guards/product-exists.guard';
import { ShopDetailComponent } from './containers/shop-detail/shop-detail.component';
import { CartNotEmptyGuard } from './guards/cart-not-empty.guard';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        // component : ListProductsComponent,
        loadChildren: './containers/list-products/list-products.module#ListProductsModule'
      },
      {
        path: 'product/:id',
        component: ShopDetailComponent,
        canActivate: [ProductExistsGuard]
      },
      {
        path: 'carts',
        loadChildren: './containers/list-carts/list-carts.module#ListCartsModule',
        canActivate: [CartNotEmptyGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
