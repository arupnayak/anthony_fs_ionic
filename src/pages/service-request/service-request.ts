import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
//import * as _ from 'lodash';
import { AnthonyApi } from '../../shared/shared';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the ServiceRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-service-request',
  templateUrl: 'service-request.html',
})
export class ServiceRequestPage {
	//items : any;
	item : any;
	msg:any;
	//itemData : any;
	editVar:boolean;

  constructor(public navCtrl: NavController,
  				 public navParams: NavParams, 
  				 private anthonyApi: AnthonyApi,
  				 private barcodeScanner: BarcodeScanner,
  				 private toastController: ToastController,
  				 private loadingController: LoadingController) {
  	this.item = this.navParams.data;
    console.log(this.item);
    this.editVar = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceRequestPage');
  }

  editRequest($event, item){
  	//this.navCtrl.push(ServiceRequestEditPage,item);
  	this.editVar = true;
  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
	 	this.item.wo_no = barcodeData.text;
	}, (err) => {
	    alert(`Error scanning: ${err}`);
	});
  }

  saveRequest($event,item){
  	if(item.id){
  		this.postRequest(item);
  	}
  	else{
  		this.putRequest(item);
  	}
  }

  putRequest(item){
  	console.log('Post Request');
  	console.log(item);
  	let loader = this.loadingController.create({
      content: 'Saving...'
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.anthonyApi.putServiceRequest(item).then(data => {
        this.msg = data;
        loader.dismiss();

        let toast = this.toastController.create({
                message: this.msg.message,
                duration: 2000,
                position: 'bottom'
              });
              toast.present(); 
        this.navCtrl.popToRoot();
        console.log(this.msg);
      });
    });
  }

  postRequest(item){

  	console.log('Post Request');
  	console.log(item);
  	let loader = this.loadingController.create({
      content: 'Saving...'
      //spinner: 'dots'
    });

    loader.present().then(() => {
      this.anthonyApi.postServiceRequest(item).then(data => {
        this.msg = data;
        loader.dismiss();

        let toast = this.toastController.create({
                message: this.msg.message,
                duration: 2000,
                position: 'bottom'
              });
              toast.present(); 
        this.navCtrl.popToRoot();
        console.log(this.msg);
      });
    });
	}
}
