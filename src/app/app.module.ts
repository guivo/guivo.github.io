import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Covid19DashboardComponent } from './covid19-dashboard/covid19-dashboard.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    Covid19DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
