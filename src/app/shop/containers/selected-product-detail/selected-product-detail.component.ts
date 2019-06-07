import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SelectedProductDetailFacadeService } from './selected-product-detail-facade.service';

@Component({
  selector: 'app-selected-product-detail',
  templateUrl: './selected-product-detail.component.html',
  styleUrls: ['./selected-product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedProductDetailComponent implements OnInit {

  product$ = this._facade.product$;

  constructor(private readonly _facade: SelectedProductDetailFacadeService) {
  }

  ngOnInit() {
  }

  addToCart($event: string) {
    this._facade.addToCart($event);
  }

}
