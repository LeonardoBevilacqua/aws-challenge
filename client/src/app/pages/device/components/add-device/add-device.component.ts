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
    partNumber: 0,
    categoryId: 0
  };
  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories);
  }

  onSubmit(): void {
    this.device.category = this.categories.find(category => Number(category.id) === Number(this.device.categoryId));
    this.addDevice.emit(this.device)

    this.resetDevice();
  }

  private resetDevice(): void {
    this.device = {
      color: "",
      partNumber: 0,
      categoryId: 0
    };
  }
}
