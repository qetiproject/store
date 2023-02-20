import { Routes } from '@angular/router';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';

 export const routes: Routes = [
  {
    path: '', 
    redirectTo: '', 
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing.module').then(m => m.PAGES_ROUTES),
    providers: [
      CartService,
      StoreService
        // {
        //     provide: BASE_URL,
        //     useValue: environment.baseUrl,
        // },
    ]
},

];

