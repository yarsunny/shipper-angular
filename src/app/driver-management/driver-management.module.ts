import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DriverCardComponent } from './driver-card/driver-card.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverManagementLoaderComponent } from './driver-management-loader.component';
import { DriverManagementComponent } from './driver-management.component';
import { DriverManagementEffects } from './driver-management.effects';
import {
  reducer as driversReducer,
  State as DriversState,
} from './driver-management.reducer';
import { DriverManagementRoutingModule } from './driver-management.routing.module';
import { DriverManagementService } from './driver-management.service';
import { DriverSearchComponent } from './driver-search/driver-search.component';

@NgModule({
  declarations: [
    DriverManagementComponent,
    DriverListComponent,
    DriverSearchComponent,
    DriverCardComponent,
    DriverManagementLoaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    StoreModule.forFeature('driverManagement', { drivers: driversReducer }),
    EffectsModule.forFeature([DriverManagementEffects]),
    DriverManagementRoutingModule,
  ],
  providers: [DriverManagementService],
})
export class DriverManagementModule {}

export interface DriverManagementState {
  driverManagement: {
    drivers: DriversState;
  };
}
