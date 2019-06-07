import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductItemComponent } from './filter-product-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterProductItemComponent],
  exports: [
    FilterProductItemComponent
  ]
})
export class FilterProductItemModule {
}
