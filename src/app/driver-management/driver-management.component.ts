import { Component, OnInit } from '@angular/core';
import { DriverManagementState } from './driver-management.module';
import { loadDrivers, searchDriver, previousPage, nextPage } from './driver-management.actions';
import { select, Store } from '@ngrx/store';
import { selectDriversData } from './driver-manegement.selector';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
})
export class DriverManagementComponent implements OnInit {
  constructor(private driverManagementStore: Store<DriverManagementState>) {}
  driversData$ = this.driverManagementStore.pipe(select(selectDriversData));

  ngOnInit(): void {
    this.driverManagementStore.dispatch(loadDrivers());
  }

  onQueryChange(query: string) {
    this.driverManagementStore.dispatch(searchDriver({ query }));
  }

  previous() {
    this.driverManagementStore.dispatch(previousPage())
  }

  next() {
    this.driverManagementStore.dispatch(nextPage())
  }
}
