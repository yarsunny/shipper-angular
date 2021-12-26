import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DriverManagementService {
  constructor(private http: HttpClient) {}

  fetchDrivers() {
    return this.http.get('https://randomuser.me/api/?results=30');
  }
}
