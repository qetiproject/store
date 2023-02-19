import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { MaterialModule } from 'src/app/pages/material.module';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class HeaderComponent implements OnInit {

  private _cart: Cart = { items: []};
  itemsQuantity = 0;

  @Input()

  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

}
