import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService, StoreService } from 'src/app/services/index';

const ROWS_HEIGHT:  { [id: number]: number} ={1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '12';
  products$!: Observable<Array<Product>>

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  getProducts(): void{
    this.products$ = this.storeService.getProducts(this.count,this.sort, this.category)
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }
  
}
