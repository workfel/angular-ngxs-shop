import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailComponent } from './shop-detail.component';
import { ProductDetailModule } from '../../components/product-detail/product-detail.module';
import { SelectedProductDetailModule } from '../selected-product-detail/selected-product-detail.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShopDetailComponent
  ],
  imports: [
    CommonModule,
    SelectedProductDetailModule,
    RouterModule
  ],
  exports: [
    ShopDetailComponent
  ]
})
export class ShopDetailModule {
}
