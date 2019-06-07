import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListCartsFacadeService } from './list-carts-facade.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list-carts',
  templateUrl: './list-carts.component.html',
  styleUrls: ['./list-carts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCartsComponent implements OnInit {

  items$ = this._facade.$carts;

  constructor(private readonly _facade: ListCartsFacadeService) {
  }

  ngOnInit() {
  }

  removeToCart($event: string) {
    this._facade.removeToCart($event);
  }

  trackById(index: number, item: Product) {
    return item.id;
  }

}
