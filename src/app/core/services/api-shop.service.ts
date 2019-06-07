import { Injectable } from '@angular/core';
import { MOCK_PRODUCTS } from '../mocks/mock-products';
import { Observable, of } from 'rxjs';
import { Product } from '../../shop/models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiShopService {

  constructor() {
  }

  list(): Observable<Product[]> {
    console.log('CALL API FOR LIST PRODUCTS');
    return of(MOCK_PRODUCTS);
  }

  search(query: string): Observable<Product[]> {
    return of(MOCK_PRODUCTS.filter(p => p.title.toLowerCase().includes(query.toLowerCase())));
  }

  getProductsCategory(name: string): Observable<Product[]> {
    return of(MOCK_PRODUCTS.filter(p => p.category === name));
  }
}
