import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
