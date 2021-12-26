import { createAction, props } from '@ngrx/store';

export const searchDriver = createAction(
  '[Driver Management] Search Driver',
  props<{ query: string }>()
);
export const nextPage = createAction('[Driver Management] Next Page');
export const previousPage = createAction('[Driver Management] Previous Page');
export const loadDrivers = createAction('[Driver Management] Load Drivers');
export const loadDriversSuccess = createAction(
  '[Driver Management] Load Drivers Success',
  props<{ res: any }>()
);
export const loadDriversFailure = createAction(
  '[Driver Management] Load Drivers Failure',
  props<{ error: any }>()
);
