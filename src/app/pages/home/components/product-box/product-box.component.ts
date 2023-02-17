import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'boot',
    price: 3,
    category: 'shoes',
    description: 'test',
    image: 'image',
  }

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
