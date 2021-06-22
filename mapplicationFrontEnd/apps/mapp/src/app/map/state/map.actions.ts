import { createAction, props } from '@ngrx/store';
import { LocationModel } from '../location.model';

export const retrieveLocation = createAction(
  '[Map] Retrieve Location'
);

export const retrieveLocationSuccess = createAction(
  '[Map] Retrieve Location Success',
  props<{ LocationModel: LocationModel }>()
);

export const retrieveLocationFailure = createAction(
  '[Map] Retrieve Location Failure'
);

