import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ICategory {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor() {
  }


  categories(): Observable<ICategory[]> {
    return of([
      {
        title: 'All',
        key: ''
      },
      {
        title: 'Ski',
        key: 'ski'
      },
      {
        title: 'Snow',
        key: 'snow'
      },
    ]);
  }
}
