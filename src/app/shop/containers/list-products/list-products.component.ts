import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListProductsFacadeService } from './list-products-facade.service';
import { Product } from '../../models/product';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class ListProductsComponent implements OnInit {

  products$ = this._facade.products$;

  constructor(private readonly _facade: ListProductsFacadeService) {
  }

  ngOnInit() {
  }

  selectProduct($event: string) {
    this._facade.selectProduct($event);
  }

  addToCart($event: string) {
    this._facade.addToCart($event);
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
