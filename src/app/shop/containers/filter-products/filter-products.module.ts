import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductsComponent } from './filter-products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterProductItemModule } from '../../components/filter-product-item/filter-product-item.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterProductItemModule
  ],
  declarations: [FilterProductsComponent],
  exports: [
    FilterProductsComponent
  ]
})
export class FilterProductsModule {
}
