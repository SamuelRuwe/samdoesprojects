import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveLocation, retrieveLocationSuccess } from './map.actions';
import { MapService } from '../map.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class MapEffects {

  location = {ip: '1.1.1.1', loc: '1.2.3.4'};

  constructor(private _actions$: Actions, private _mapService: MapService) {}

  // need to return a type of action with the pipes here somehow
  loadLocation: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(retrieveLocation),
    mergeMap(() => of(retrieveLocationSuccess({LocationModel: this.location})))
  ));
}
