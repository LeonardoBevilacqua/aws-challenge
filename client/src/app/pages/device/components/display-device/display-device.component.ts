import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-display-device',
  templateUrl: './display-device.component.html',
  styleUrls: []
})
export class DisplayDeviceComponent {
  @Input() devices: Device[] = [];
  @Output() deleteDevice: EventEmitter<Device> = new EventEmitter();

  remove(device: Device): void {
    this.deleteDevice.emit(device);
  }
}
