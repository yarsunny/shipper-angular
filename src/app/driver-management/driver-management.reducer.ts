import { createReducer, on } from '@ngrx/store';
import * as DriverManagementActions from './driver-management.actions';

export interface State {
  currentPage: any;
  drivers: any;
  query: string | undefined;
  status: any;
  error: any;
}

export const initialState: State = {
  currentPage: 0,
  drivers: [],
  query: undefined,
  status: 'init',
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(DriverManagementActions.searchDriver, (state, action) => ({
    ...state,
    currentPage: 0,
    query: action.query,
  })),
  on(DriverManagementActions.nextPage, (state, action) => ({
    ...state,
    currentPage: state.currentPage + 1,
  })),
  on(DriverManagementActions.previousPage, (state, action) => ({
    ...state,
    currentPage: state.currentPage - 1,
  })),
  on(DriverManagementActions.loadDrivers, (state, action) => ({
    ...state,
    status: 'loading',
    error: undefined,
    currentPage: 0,
  })),
  on(DriverManagementActions.loadDriversSuccess, (state, action) => ({
    ...state,
    status: 'idle',
    drivers: action.res.results
  })),
  on(DriverManagementActions.loadDriversFailure, (state, action) => ({
    ...state,
    status: 'idle',
    error: action.error
  }))
);
