import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCartsComponent } from './list-carts.component';

const routes: Routes = [
  {
    path: '',
    component: ListCartsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCartsRoutingModule {
}
