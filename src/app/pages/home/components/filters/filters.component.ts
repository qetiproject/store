import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/index'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>;
  categories$!: Observable<Array<String>>;

  private storeService = inject(StoreService);

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categories$ = this.storeService.getCategories();
  }

  onShowCategory(category: any) : void {
    this.showCategory.emit(category);
  }

}
