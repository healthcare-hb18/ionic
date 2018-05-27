import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-severity',
  templateUrl: 'severity.html'
})

export class SeverityPage {

  imgSrc: string="assets/imgs/eye/auge.png";
  list: any;
  severityDescriptions;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.list = this.navParams.get('sub');
    this.severityDescriptions = {};
    for (let i = 0; i < this.list.length; i++) {
      let code = this.list[i].code;
      let severity = code.split('.')[1];
      console.log(severity);
      let currentValue = this.severityDescriptions[severity];
      console.log(currentValue);
      this.severityDescriptions[severity] = (currentValue !== undefined) ? (this.severityDescriptions[severity] + "; " + this.list[i].name) : this.list[i].name;
    }
    console.log(this.severityDescriptions);

  }

  onChangeValue(obj) {
    var currImg = document.querySelector('#changeImg');
    var currText = document.querySelector('#changeText');
    currText.innerHTML = this.severityDescriptions[obj.picId] == undefined ? "" : this.severityDescriptions[obj.picId];
    switch(obj.picId){
      case 1:
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        break;
      case 2:
        currImg.setAttribute('src', 'assets/imgs/eye/auge2.jpg');
        break;
      case 3:
        currImg.setAttribute('src', 'assets/imgs/eye/auge3.jpg');
        break;
      case 4:
        currImg.setAttribute('src', 'assets/imgs/eye/auge4.jpg');
        break;
      case 5:
        currImg.setAttribute('src', 'assets/imgs/eye/auge5.jpg');
        break;
      default:
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        break;
    }
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }
}
