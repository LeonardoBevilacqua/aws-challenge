import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://localhost:5000/device';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(this.apiUrl);
  }

  remove(device: Device): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${device.id}`);
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.apiUrl, device, httpOptions);
  }
}
