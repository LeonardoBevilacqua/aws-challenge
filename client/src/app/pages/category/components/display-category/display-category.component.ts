import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: []
})
export class DisplayCategoryComponent {

  @Input() categories: Category[] = [];
  @Output() deleteCategory: EventEmitter<Category> = new EventEmitter();

  remove(category: Category): void {
    this.deleteCategory.emit(category);
  }

}
