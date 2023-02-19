import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/pages/material.module';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>;
  @Output() itemsCountChange = new EventEmitter<number>;
  @Output() sortChange = new EventEmitter<string>;

  sort = 'desc';
  itemsShowCount = 12;


  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number):void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }

}
