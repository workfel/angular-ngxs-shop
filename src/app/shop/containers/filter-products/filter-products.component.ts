import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FilterProductsFacadeService } from './filter-products-facade.service';
import { FilterProductsService, ICategory } from './filter-products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterProductsComponent implements OnInit {

  categories$: Observable<ICategory[]>;

  constructor(private readonly _facade: FilterProductsFacadeService,
              private readonly _service: FilterProductsService) {
  }

  ngOnInit() {
    this.categories$ = this._service.categories();
  }

  filterChange(key: string) {
    this._facade.filterProduct(key);
  }

  trackByKey(index: number, item: ICategory) {
    return item.key;
  }

}
