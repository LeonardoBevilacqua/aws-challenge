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
  errors: any = {};

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.addCategory.emit(this.category)

    this.resetForm();
  }

  private resetForm(): void {
    this.category = {
      name: ""
    };
    this.errors = {};
  }

  private isFormValid(): boolean {
    this.errors = {};
    if (!this.category.name.trim()) {
      this.errors.name = "Name must not be empty!";
      return false;
    }

    return true;
  }
}
