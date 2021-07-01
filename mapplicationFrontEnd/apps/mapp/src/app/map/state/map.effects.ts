import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveLocation, retrieveLocationSuccess } from './map.actions';
import { MapService } from '../map.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class MapEffects {

  constructor(private _actions$: Actions, private _mapService: MapService) {}

  loadLocation: Observable<Action> = createEffect(() => this._actions$.pipe(
    ofType(retrieveLocation),
    switchMap(() => this._mapService.getLocation()
      .pipe(
        map(location => {
          console.log(location);
          return retrieveLocationSuccess({LocationModel: location})
        })
      )
    )
  ));
}
