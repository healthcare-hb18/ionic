import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';


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
     case 2:
     currImg.setAttribute('src', 'assets/imgs/eye/auge2.jpg');
     currText.innerHTML = "Verletzung mit Retinaablösung";     
     break;
    case 3:
      currImg.setAttribute('src', 'assets/imgs/eye/auge3.jpg');
      currText.innerHTML = "Verletzung der äußeren Augenhaut";
      break;
    case 4:
      currImg.setAttribute('src', 'assets/imgs/eye/auge4.jpg');
      currText.innerHTML = "Abriss, mit Enukleation einseitig";
      break;
     case 5:
       currImg.setAttribute('src', 'assets/imgs/eye/auge5.jpg');
       currText.innerHTML = "Abriss, mit Enukleation beidseitig";
       break;
    default:
      currImg.setAttribute('src', 'assets/imgs/eye/auge.png');
      break;
 }
}

}
