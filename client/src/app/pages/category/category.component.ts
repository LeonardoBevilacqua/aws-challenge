import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: []
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

  create(category: Category): void {
    this.categoryService.create(category).subscribe((category) => this.categories.push(category));
  }

  remove(category: Category): void {
    this.categoryService.remove(category).subscribe(() => this.categories = this.categories.filter((c) => c.id !== category.id));
  }
}
