import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FeedComponent } from './feed/feed.component';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

import { StreamService } from './services/stream.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "dashboard", component: DashboardComponent},
      { path: "feed", component: FeedComponent},
      { path: "", redirectTo:"dashboard", pathMatch: 'full'}
      
    ], {useHash: true} )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
