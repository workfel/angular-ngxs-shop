import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/shops', pathMatch: 'full' },
  {
    path: 'shops',
    loadChildren: './shop/shop.module#ShopModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    // FIXME : https://github.com/angular/angular/issues/30114
    // loadChildren: () => import('@digikare-ng/dkg-account').then(m => m.DkgAccountModule),
    loadChildren: './account/account.module#AccountModule',
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
