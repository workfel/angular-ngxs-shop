import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../containers/filter-products/filter-products.service';

@Component({
  selector: 'app-filter-product-item',
  templateUrl: './filter-product-item.component.html',
  styleUrls: ['./filter-product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterProductItemComponent implements OnInit {
  @Input() item: ICategory;

  constructor() {
  }

  ngOnInit() {
  }

}
