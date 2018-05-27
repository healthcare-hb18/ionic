import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BodyPage } from '../body/body';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

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

  calcISS(){
    if (warenkorb.length!=0) {

      let issScore = 0;
      var list = {};
      var allSquares = [];

      for (let i = 0; i < warenkorb.length; i++) {
        let region = warenkorb[i].toString()[0]; //1-6
        let degOfInjury = Math.pow(parseInt(warenkorb[i].toString().split('.')[1]),2)

        if (list[region] == undefined) {
          list[region] = degOfInjury
        } else if (list[region] < degOfInjury) {
          list[region] = degOfInjury
        }
        // issScore += Math.pow(parseInt(warenkorb[i].toString().split('.')[1]),2)
      }

      for(let region in list){
        allSquares.push(list[region])
      }

      allSquares.sort(function(a,b){return b-a});
      console.log(allSquares.length);

      if (allSquares.length > 2) {
        for (let i = 0; i < 3; i++) {
          issScore += allSquares[i]
        }
        console.log(issScore);
        isscontainer.innerHTML = "Der aktuelle ISS Score ist "+issScore;
      }

    }
  }

}
