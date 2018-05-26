import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-face',
  templateUrl: 'face.html'
})
export class FacePage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Face');
  }
}