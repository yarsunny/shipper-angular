import { createSelector } from '@ngrx/store';
import { State as DriversState } from './driver-management.reducer';
import { DriverManagementState } from './driver-management.module';

export const selectDrivers = (state: DriverManagementState) =>
  state.driverManagement.drivers;

export const selectDriversData = createSelector(
  selectDrivers,
  (state: DriversState) => {
    const driversPerPage = 5;
    const { status, currentPage, drivers, query } = state;
    let filteredDrivers = [...drivers];
    if (query?.trim()) {
      filteredDrivers = filteredDrivers.filter((driver) =>
        driver.name.first.toLowerCase().includes(query?.trim())
      );
    }
    const totalPages: any = Math.ceil(filteredDrivers.length / driversPerPage);
    const startingDriverIndex = currentPage * driversPerPage;
    const endingDriverIndex =
      currentPage === totalPages - 1 &&
      startingDriverIndex + driversPerPage < filteredDrivers.length
        ? filteredDrivers.length
        : startingDriverIndex + driversPerPage;

    const pageDrivers = filteredDrivers.slice(
      startingDriverIndex,
      endingDriverIndex
    );

    return {
      status,
      currentPage,
      pageDrivers,
      totalPages,
      query,
    };
  }
);
