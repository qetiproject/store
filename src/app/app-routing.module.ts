import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartService } from './services/cart.service';
import { StoreService } from './services/store.service';
// import { CartComponent } from './pages/cart/cart.component';
// import { HomeComponent } from './pages/home/home.component';

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
        // {
        //     provide: BASE_URL,
        //     useValue: environment.baseUrl,
        // },
    ]
},

];

