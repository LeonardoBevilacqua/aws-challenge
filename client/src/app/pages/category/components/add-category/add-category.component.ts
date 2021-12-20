import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: []
})
export class AddCategoryComponent {
  @Output() addCategory: EventEmitter<Category> = new EventEmitter();
  category: Category = {
    name: ""
  };

  onSubmit(): void {
    this.addCategory.emit(this.category)

    this.resetCategory();
  }

  private resetCategory(): void {
    this.category = {
      name: ""
    };
  }
}
