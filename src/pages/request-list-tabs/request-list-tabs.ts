import { ClosedRequestsPage } from './../closed-requests/closed-requests';
import { InProgressRequestsPage } from './../in-progress-requests/in-progress-requests';
import { ServiceRequestListPage } from './../service-request-list/service-request-list';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestListTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-request-list-tabs',
  templateUrl: 'request-list-tabs.html',
})
export class RequestListTabsPage {
  tab1Root = ServiceRequestListPage;
  tab2Root = InProgressRequestsPage;
  tab3Root = ClosedRequestsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestListTabsPage');
  }

}
