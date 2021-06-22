import { Component } from '@angular/core';
import { MapService } from './map.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mapp-map',
  template: `
    <button mat-raised-button (click)="getLocation()">Get Location</button>
    <span>{{location$ | async | json}}</span>
  `,
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  location$!: Observable<any>;

  constructor(private _mapService: MapService) { }

  getLocation() {
    this.location$ = this._mapService.getLocation();
  }

}
