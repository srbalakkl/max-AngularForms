import {APP_INITIALIZER, NgModule, ViewChild, ViewChildren} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngformComponent } from './angform/angform.component';
import {FormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    AngformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
