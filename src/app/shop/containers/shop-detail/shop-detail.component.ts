import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ShopDetailFacadeService } from './shop-detail-facade.service';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopDetailComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;

  constructor(private readonly _facade: ShopDetailFacadeService,
              private readonly _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.actionsSubscription = this._route.params
      .pipe(
        map(params => params.id),
        tap((id) => this._facade.selectProduct(id))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
