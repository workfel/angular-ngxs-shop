import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthStates } from './store';
import { LoginPageModule } from './containers/login-page/login-page.module';

export const COMPONENTS = [];

@NgModule({
  imports: [
    CommonModule,
    LoginPageModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}

@NgModule({
  imports: [AuthModule, AuthRoutingModule, NgxsModule.forFeature(AuthStates)],
})
export class RootAuthModule {
}
