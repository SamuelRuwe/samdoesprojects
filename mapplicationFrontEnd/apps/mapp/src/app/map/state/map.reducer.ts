import { Action, createReducer, on } from '@ngrx/store';
import { retrieveLocation, retrieveLocationFailure, retrieveLocationSuccess } from './map.actions';
import { LocationModel } from '../location.model';

export const initialState = {
  ip: '',
  loc: ''
}

const _mapReducer = createReducer(
  initialState,
  on(retrieveLocation, state => state),
  on(retrieveLocationSuccess, (state, {LocationModel}) => LocationModel),
  on(retrieveLocationFailure, (state) => initialState)
);

export function mapReducer(state: LocationModel | undefined, action: Action) {
  return _mapReducer(state, action);
}
