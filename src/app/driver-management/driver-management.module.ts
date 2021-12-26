import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { DriverManagementRoutingModule } from './driver-management.routing.module';

@NgModule({
  declarations: [DriverManagementComponent],
  imports: [CommonModule, DriverManagementRoutingModule],
})
export class DriverManagementModule {}
