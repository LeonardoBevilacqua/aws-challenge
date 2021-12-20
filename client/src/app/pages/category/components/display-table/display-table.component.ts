import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent {
  @Input() categories: Category[] = [];
  @Output() onDelete: EventEmitter<Category> = new EventEmitter();

  remove(category: Category): void {
    this.onDelete.emit(category);
  }
}
