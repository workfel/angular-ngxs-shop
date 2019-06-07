import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCartsComponent } from './list-carts.component';
import { ProductPreviewModule } from '../../components/product-preview/product-preview.module';
import { ListCartsRoutingModule } from './list-carts.routing.module';

@NgModule({
  declarations: [ListCartsComponent],
  imports: [
    CommonModule,
    ListCartsRoutingModule,
    ProductPreviewModule
  ]
})
export class ListCartsModule {
}
