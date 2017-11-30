import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ServiceRequestListPage} from '../pages';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  itemTapped($event, item){
  	this.navCtrl.push(ServiceRequestListPage,item);
  }

  goToRequests(){
  	this.navCtrl.push(ServiceRequestListPage);
  }

}
