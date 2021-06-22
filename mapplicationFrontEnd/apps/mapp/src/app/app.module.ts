import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@mapp/material';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { mapReducer } from './map/state/map.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects } from './map/state/map.effects';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({map: mapReducer}),
    EffectsModule.forRoot([MapEffects])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
