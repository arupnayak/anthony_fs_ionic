import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AnthonyApi } from '../../shared/shared';
import {ServiceRequestPage} from '../pages';
/**
 * Generated class for the ServiceRequestListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-request-list',
  templateUrl: 'service-request-list.html',
})
export class ServiceRequestListPage {

  items : any;
  
  constructor(public navCtrl: NavController,
  				 public navParams: NavParams, 
  				 private anthonyApi: AnthonyApi,
  				 private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceRequestListPage');
    let loader = this.loadingController.create({
      content: 'Getting Service Requests...'
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.anthonyApi.getServiceRequests().then(data => {
        this.items = data;
        loader.dismiss();
      });
    });

    console.log(this.items);
  }

  itemTapped($event, item){
    console.log(item);
  	this.navCtrl.push(ServiceRequestPage,item);
  }

  createNewRequest(){
    this.navCtrl.push(ServiceRequestPage);
  }

}
