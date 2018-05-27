import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-severity',
  templateUrl: 'severity.html'
})

export class SeverityPage {

  imgSrc: string="assets/imgs/eye/auge.png";
  severity_value: any;
  scan: any;
 

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.scan = navParams.get("scan");
  }

  onChangeValue(obj) {
    var currImg = document.querySelector('#changeImg');
    var currText = document.querySelector('#changeText');

    switch(obj.picId){
      case 1: 
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        currText.innerHTML = "Verletzung";     
        //severity_value = 1;
        break;
      case 2:
        currImg.setAttribute('src', 'assets/imgs/eye/auge2.jpg');
        currText.innerHTML = "Verletzung mit Retinaablösung oder Verletzung der äußeren Augenhaut; Abriss, mit Enukleation einseitig";
        //severity_value = 2;     
        break;
      case 3:
        currImg.setAttribute('src', 'assets/imgs/eye/auge3.jpg');
        currText.innerHTML = "Abriss, mit Enukleation beidseitig";
        //severity_value = 3;
        break;
      case 4:
        currImg.setAttribute('src', 'assets/imgs/eye/auge4.jpg');
        currText.innerHTML = "Schweregrad 4";
        //severity_value = 4;
        break;
      case 5:
        currImg.setAttribute('src', 'assets/imgs/eye/auge5.jpg');
        currText.innerHTML = "Schweregrad 5";
        //severity_value = 1;
        break;
      case 6:
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        currText.innerHTML = "Schweregrad 6";
        //severity_value = 1;
        break;
      default:
        currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
        currText.innerHTML = "";
        break;
    }
  }

  openCartPage() {
    this.navCtrl.push(CartPage, {
      scan: this.scan
    });
  }
}
