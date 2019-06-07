import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductPreviewModule } from '../product-preview/product-preview.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductPreviewModule
  ],
  exports: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule {
}
