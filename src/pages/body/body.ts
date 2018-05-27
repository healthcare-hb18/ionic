import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeadPage } from '../head/head';
import { FacePage } from '../face/face';
import { ThoraxPage } from '../thorax/thorax';

@Component({
  selector: 'page-body',
  templateUrl: 'body.html'
})
export class BodyPage {

  scan: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.scan = navParams.get("results");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Body');
  }

  openHeadPage(){
    this.navCtrl.push(HeadPage, {
      scan: this.scan
    });
  }

  openFacePage() {
    this.navCtrl.push(FacePage, {
      scan: this.scan
    });
  }

  openThoraxPage() {
    this.navCtrl.push(ThoraxPage, {
      scan: this.scan
    });
  }

}
