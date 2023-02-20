import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { FiltersComponent, HomeComponent, ProductBoxComponent, ProductsHeaderComponent } from './index';
import { HomeMaterial } from './home-material.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterial
  ]
})
export class HomeModule { }
