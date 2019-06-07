import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { ShopDetailModule } from './containers/shop-detail/shop-detail.module';
import { ShopState } from './store/states/shop.state';
import { FilterState } from './store/states/filter.state';
import { ProductsListState } from './store/states/products-list.state';
import { CartsState } from './store/states/carts.state';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([ShopState, FilterState, ProductsListState, CartsState]),
    SharedModule,
    FlexLayoutModule,
    ShopRoutingModule,
    // ListProductsModule,
    ShopDetailModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule {
}
