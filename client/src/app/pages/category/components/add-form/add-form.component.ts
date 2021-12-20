import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  @Output() onAdd: EventEmitter<Category> = new EventEmitter();
  category: Category = {
    name: ""
  };

  onSubmit(): void {
    this.onAdd.emit(this.category)

    this.resetCategory();
  }

  private resetCategory(): void {
    this.category = {
      name: ""
    };
  }

}
