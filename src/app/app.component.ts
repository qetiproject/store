import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [CartService]
})
export class AppComponent {
  cart: Cart = {items: []};

  constructor(
    // private cartService: CartService
  ){}

  ngOnInit() {
    // this.cartService.cart.subscribe((_cart) => {
    //   this.cart = _cart;
    // })
  }
}
