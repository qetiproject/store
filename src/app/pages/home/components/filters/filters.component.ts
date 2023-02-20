import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/index'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
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
