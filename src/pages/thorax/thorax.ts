import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-thorax',
  templateUrl: 'thorax.html'
})
export class ThoraxPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Thorax');
  }
}