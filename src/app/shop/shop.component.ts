import { Component, OnInit } from '@angular/core';
import { ShopFacadeService } from './shop-facade.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  countCarts$ = this._facade.countCarts$;
  amountCarts$ = this._facade.amountCarts$;

  constructor(private readonly _facade: ShopFacadeService) {
  }

  ngOnInit() {
    this._facade.loadProducts();
  }

}
