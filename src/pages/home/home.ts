import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BodyPage } from '../body/body';
import { BarcodeScanner} from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  results: {};

  constructor(public navCtrl: NavController,  public navParams: NavParams, private barcode: BarcodeScanner) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homePage');
  }

  async scanBarcode() {
    this.results = await this.barcode.scan();

  }

  openBodyPage(){
    this.navCtrl.push(BodyPage);
  }
}
