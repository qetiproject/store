import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MaterialModule } from 'src/app/pages/material.module';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ]
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  @Input() product: Product | undefined ;
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    console.log(this.product, 'product')
    this.addToCart.emit(this.product);
  }

}
