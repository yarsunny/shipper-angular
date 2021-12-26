import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupComponent } from './pickup/pickup.component';
import { PickupRoutingModule } from './pickup.routing.module';

@NgModule({
  declarations: [PickupComponent],
  imports: [CommonModule, PickupRoutingModule],
})
export class PickupModule {}
