import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationModel } from './location.model';
import { Store } from '@ngrx/store';
import { retrieveLocation } from './state/map.actions';

@Component({
  selector: 'mapp-map',
  template: `
    <button mat-raised-button (click)="getLocation()">Get Location</button>
    <span>{{location$ | async | json}}</span>
  `,
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  location$: Observable<LocationModel>;

  constructor(private _store: Store<{ map: LocationModel }>) {
    this.location$ = _store.select(state => state.map);
  }

  getLocation() {
    this._store.dispatch(retrieveLocation());
  }

}
