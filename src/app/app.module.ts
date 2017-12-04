import { ClosedRequestsPage } from './../pages/closed-requests/closed-requests';
import { InProgressRequestsPage } from './../pages/in-progress-requests/in-progress-requests';
import { OpenRequestsPage } from './../pages/open-requests/open-requests';
import { RequestListTabsPage } from './../pages/request-list-tabs/request-list-tabs';
import { NotificationsPage } from './../pages/notifications/notifications';
import { FlaggedPage } from './../pages/flagged/flagged';
import { HomeTabsPage } from './../pages/home-tabs/home-tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AnthonyFS } from './app.component';
import {
        HomePage,
        ServiceRequestListPage,
        ServiceRequestPage
      } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';
import {
  GoogleMaps,
  // GoogleMap,
  // GoogleMapsEvent,
  // GoogleMapOptions,
  // CameraPosition,
  // MarkerOptions,
  // Marker
 } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    AnthonyFS,
    HomePage,
    HomeTabsPage,
    NotificationsPage,
    FlaggedPage,
    RequestListTabsPage,
    OpenRequestsPage,
    InProgressRequestsPage,
    ClosedRequestsPage,
    ServiceRequestListPage,
    ServiceRequestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AnthonyFS),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AnthonyFS,
    HomePage,
    ServiceRequestListPage,
    RequestListTabsPage,
    OpenRequestsPage,
    InProgressRequestsPage,
    ClosedRequestsPage,
    NotificationsPage,
    FlaggedPage,
    HomeTabsPage,
    ServiceRequestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
