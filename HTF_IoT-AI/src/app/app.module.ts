import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import {FaceDetectionService} from './services/faceDetection.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "dashboard", component: DashboardComponent},
      { path: "feed", component: FeedComponent},
      { path: "", redirectTo:"dashboard", pathMatch: 'full'}
      
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    FaceDetectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
