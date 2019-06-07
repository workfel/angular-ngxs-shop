import { Component, OnInit } from '@angular/core';

import { Authenticate } from '../../models/user';
import { LoginPageFacadeService } from './login-page-facade.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  pending$ = this._facade.pending$;
  error$ = this._facade.error$;

  constructor(private readonly _facade: LoginPageFacadeService) {
  }

  ngOnInit() {
  }

  onSubmit($event: Authenticate) {
    this._facade.login($event);
  }
}
