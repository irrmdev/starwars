import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetItemComponent } from './planet-item/planet-item.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetDetailComponent,
    PlanetListComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
