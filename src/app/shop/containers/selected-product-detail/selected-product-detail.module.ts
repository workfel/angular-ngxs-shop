import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedProductDetailComponent } from './selected-product-detail.component';
import { ProductDetailModule } from '../../components/product-detail/product-detail.module';

@NgModule({
  declarations: [SelectedProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailModule,
  ],
  exports: [
    SelectedProductDetailComponent
  ]
})
export class SelectedProductDetailModule {
}
