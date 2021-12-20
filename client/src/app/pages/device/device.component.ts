import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: []
})
export class DeviceComponent implements OnInit {
  devices: Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getAll().subscribe((devices) => this.devices = devices);
  }

  create(device: Device): void {
    this.deviceService.create(device).subscribe((device) => this.devices.push(device));
  }

  remove(device: Device): void {
    this.deviceService.remove(device).subscribe(() => this.devices = this.devices.filter((d) => d.id !== device.id));
  }
}
