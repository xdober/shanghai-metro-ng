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
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MetroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, MatIconModule, MatListModule,MatGridListModule,MatButtonToggleModule,MatSidenavModule,
    MatToolbarModule,MatButtonModule,
    HttpClientModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
