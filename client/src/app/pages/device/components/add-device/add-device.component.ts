import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Device } from 'src/app/models/device';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: []
})
export class AddDeviceComponent implements OnInit {
  @Output() addDevice: EventEmitter<Device> = new EventEmitter();
  device: Device = {
    color: "",
    partNumber: null,
    categoryId: 0
  };
  errors: any = {};
  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

  onSubmit(): void {
    if (!this.isFormValid()) {
      return;
    }
    this.device.category = this.categories.find(category => Number(category.id) === Number(this.device.categoryId));
    this.addDevice.emit(this.device)

    this.resetForm();
  }

  private resetForm(): void {
    this.device = {
      color: "",
      partNumber: 0,
      categoryId: 0
    };
    this.errors = {};
  }

  private isFormValid(): boolean {
    this.errors = {};
    let status = true;
    if (!this.device.color.trim()) {
      this.errors.color = 'Color must not be empty!';
      status = false;
    }

    if (!this.device.color.match(/^[a-zA-Z]*$/g)) {
      this.errors.color = 'Color must have only letters!';
      status = false;
    }

    if (!this.device.partNumber || this.device.partNumber < 0) {
      this.errors.partNumber = 'Part Number must be above 0!';
      status = false;
    }

    if (!this.device.categoryId || this.device.categoryId === 0) {
      this.errors.categoryId = 'Category must no be empty!';
      status = false;
    }

    return status;
  }
}
