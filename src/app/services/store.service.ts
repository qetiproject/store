import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, take, tap } from 'rxjs';
import { STORE_BASE_URL } from '../app-routing.module';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private products = new BehaviorSubject<Array<Product>>([]);
  products$: Observable<Array<Product>> = this.products.asObservable();

  private categories = new BehaviorSubject<Array<String>>([]);
  categories$: Observable<Array<String>> = this.categories.asObservable();

  constructor(
    private httpClient: HttpClient,
    @Inject(STORE_BASE_URL) private storeBaseUrl: string
  ) { }

  getProducts(
    limit: string,
    sort: string,
    category?: string
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${this.storeBaseUrl}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    ).pipe(
      tap((_products) => this.products.next(_products)),
      take(1),
      shareReplay()
    );
  }

  getCategories(): Observable<Array<String>> {
   return this.httpClient.get<Array<String>>(
    `${this.storeBaseUrl}/products/categories`
   ).pipe(
    tap((_categories) => this.categories.next(_categories)),
    take(1),
    shareReplay()
   );
  }

}
