import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BodyPage } from '../body/body';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  scan: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    if (navParams.get("scan") == null) {
      this.scan ={ "text" : "PatientenNummer"};
    } else {
      this.scan = navParams.get("scan");
    }   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart');
  }

  openBodyPage(){
    this.navCtrl.push(BodyPage);
  }

  openHomePage() {
    this.navCtrl.push(HomePage);
  }

}