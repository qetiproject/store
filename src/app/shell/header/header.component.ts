import { Component, inject, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
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

    this.totalItemsQuantity();
  }

  private cartService = inject(CartService)

  ngOnInit(): void {}

  totalItemsQuantity():void {
    this.itemsQuantity = this.cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

}
