import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/pages/material.module';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {

  @Output() showCategory = new EventEmitter<string>;
  categories: Array<String> | undefined;
  categoriesSubscription: Subscription | undefined;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getCategories()
      .subscribe((_categories) => {
        this.categories = _categories
      });
  }

  onShowCategory(category: any) : void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe()
    }
  }

}
