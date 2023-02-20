import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartComponent } from './pages/cart/cart.component';
import { StoreService } from './services';

export const STORE_BASE_URL = new InjectionToken<string>('base api token');

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule),
    providers: [
      StoreService,
      {
        provide: STORE_BASE_URL,
        useValue: environment.storeBaseUrl,
      },
    ]
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
