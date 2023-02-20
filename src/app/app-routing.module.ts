import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
