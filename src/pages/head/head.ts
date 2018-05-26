import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FacePage } from '../face/face';

@Component({
  selector: 'page-head',
  templateUrl: 'head.html'
})
export class HeadPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Head');
  }

  openFacePage(){
    this.navCtrl.push(FacePage);
  }
}
