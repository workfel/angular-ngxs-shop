import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() onAddToCartClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  addToCart() {
    this.onAddToCartClicked.emit(this.product.id);
  }

}
