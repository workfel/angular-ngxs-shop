import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectCategory } from '../../store/actions/filter.action';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsFacadeService {

  constructor() {
  }

  @Dispatch()
  filterProduct(category: string) {
    return new SelectCategory(category);
  }
}
