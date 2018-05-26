import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeverityPage } from '../severity/severity';

@Component({
  selector: 'page-organs',
  templateUrl: 'organs.html'
})
export class OrgansPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Organs');
  }

  openSeverity() {
    this.navCtrl.push(SeverityPage);
  }


}