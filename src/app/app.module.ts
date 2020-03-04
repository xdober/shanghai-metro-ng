import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './tools/list/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import {MatListModule} from '@angular/material/list';
import { MetroComponent } from './metro/metro.component';
import { HttpClientModule } from "@angular/common/http";
import { MatGridListModule} from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MetroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, MatIconModule, MatListModule,MatGridListModule,MatButtonToggleModule,MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
