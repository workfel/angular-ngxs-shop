import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products.component';
import { ListProductsRoutingModule } from './list-products.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductPreviewModule } from '../../components/product-preview/product-preview.module';
import { FilterProductsModule } from '../filter-products/filter-products.module';

@NgModule({
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    FlexLayoutModule,
    ProductPreviewModule,
    FilterProductsModule
  ],
  declarations: [
    ListProductsComponent
  ],
  exports: [
    ListProductsComponent
  ]
})
export class ListProductsModule {
}
