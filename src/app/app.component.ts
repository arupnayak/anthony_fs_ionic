import { RequestListTabsPage } from './../pages/request-list-tabs/request-list-tabs';
import { HomeTabsPage } from './../pages/home-tabs/home-tabs';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AnthonyApi } from '../shared/shared';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  templateUrl: 'app.html',
  providers: [
    AnthonyApi,
    BarcodeScanner,
    HttpModule
  ]
})
export class AnthonyFS {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeTabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomeTabsPage },
      { title: 'Service Requests', component: RequestListTabsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
