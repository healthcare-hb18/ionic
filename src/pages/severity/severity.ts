import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-severity',
  templateUrl: 'severity.html'
})
export class SeverityPage {

  imgSrc: string="assets/imgs/eye/auge.png";

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  onChangeValue(obj) {
    var currImg = document.querySelector('#changeImg');
    var currText = document.querySelector('#changeText');
    console.log(currText.innerHTML);

    switch(obj.picId){
      case 1: 
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        currText.innerHTML = "Verletzung";     
        break;
      case 2:
        currImg.setAttribute('src', 'assets/imgs/eye/auge2.jpg');
        currText.innerHTML = "Verletzung mit Retinaablösung oder Verletzung der äußeren Augenhaut; Abriss, mit Enukleation einseitig";     
        break;
      case 3:
        currImg.setAttribute('src', 'assets/imgs/eye/auge3.jpg');
        currText.innerHTML = "Abriss, mit Enukleation beidseitig";
        break;
      case 4:
        currImg.setAttribute('src', 'assets/imgs/eye/auge4.jpg');
        currText.innerHTML = "";
        break;
      case 5:
        currImg.setAttribute('src', 'assets/imgs/eye/auge5.jpg');
        currText.innerHTML = "";
        break;
      default:
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        currText.innerHTML = "";
        break;
    }
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }
}
