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

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Body');
  }

  openHeadPage(){
    this.navCtrl.push(HeadPage);
  }

  openFacePage() {
    this.navCtrl.push(FacePage);
  }

  openThoraxPage() {
    this.navCtrl.push(ThoraxPage);
  }

}
