import { Component } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  cart: Cart = {items: []};

  constructor(
    private cartService: CartService
  ){}

  ngOnInit() {
    this.getCart();
  }
  
  getCart() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
  
}
