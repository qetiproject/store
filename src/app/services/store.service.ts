// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Product } from '../models/product.model';

// const STORE_BASE='https://fakestoreapi.com';

// @Injectable({
//   providedIn: 'root'
// })
// export class StoreService {

//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   getProducts(
//     limit: string,
//     sort: string,
//     category?: string
//   ): Observable<Array<Product>> {
//     return this.httpClient.get<Array<Product>>(
//       `${STORE_BASE}/products${
//         category ? '/category/' + category : ''
//       }?sort=${sort}&limit=${limit}`
//     );
//   }

//   getCategories(): Observable<Array<String>> {
//    return this.httpClient.get<Array<String>>(
//     `${STORE_BASE}/products/categories`
//    )
//   }

// }
