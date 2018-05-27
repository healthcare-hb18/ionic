import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrgansPage } from '../organs/organs';

@Component({
  selector: 'page-face',
  templateUrl: 'face.html'
})
export class FacePage {

  scan: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.scan = navParams.get("scan");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Face');
  }

  openOrgansPage(){
    this.navCtrl.push(OrgansPage, {
      scan: this.scan
    });
  }
}