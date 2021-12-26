import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import {
  loadDrivers,
  loadDriversFailure,
  loadDriversSuccess,
} from './driver-management.actions';
import { DriverManagementService } from './driver-management.service';

@Injectable()
export class DriverManagementEffects {
  constructor(
    private actions$: Actions,
    private driverManagementService: DriverManagementService
  ) {}

  loadDrivers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDrivers),
      switchMap(() => {
        return this.driverManagementService.fetchDrivers().pipe(
          mergeMap((res) => of(loadDriversSuccess({ res }))),
          catchError((error: any) => {
            return of(loadDriversFailure({ error }));
          })
        );
      })
    )
  );
}
