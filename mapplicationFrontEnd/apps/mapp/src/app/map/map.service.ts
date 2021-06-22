import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationModel } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<LocationModel>("http://localhost:8080/");
  }

}
