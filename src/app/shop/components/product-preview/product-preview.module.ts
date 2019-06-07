import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPreviewComponent } from './product-preview.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ProductPreviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductPreviewComponent
  ]
})
export class ProductPreviewModule {
}
