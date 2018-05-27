import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

/**
 * Generated class for the ListPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-page',
  templateUrl: 'list-page.html'
})
export class ListPageComponent {

  text: string;
  sub: any;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.sub = navParams.get('sub');
    console.log(this.sub);
    this.text = 'Hello World';
  }

}
