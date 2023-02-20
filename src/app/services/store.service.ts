import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { STORE_BASE_URL } from '../app-routing.module';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

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
    );
  }

  getCategories(): Observable<Array<String>> {
   return this.httpClient.get<Array<String>>(
    `${this.storeBaseUrl}/products/categories`
   )
  }

}
