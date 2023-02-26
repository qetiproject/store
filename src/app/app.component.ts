import { Component, inject } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  cart: Cart = {items: []};

  private cartService = inject(CartService);
  
  ngOnInit() {
    this.getCart();
    const user = localStorage.getItem('AUTH_DATA');
  }
  
  getCart() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }
  
}
