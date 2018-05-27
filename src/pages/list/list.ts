import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SeverityPage} from "../severity/severity";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  list: any;
  title: string;
  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List');
    this.list = this.navParams.get('sub');
    this.title = this.navParams.get('title');
    console.log(this.list);
  }

  openListPage(sub, title) {
    console.log(sub, sub[0].sub);
    if(sub[0].sub.length > 0) {
      this.list = sub;
      this.title = title;
    } else {
      this.navCtrl.push(SeverityPage, {
        sub: sub,
        title: title
      });
    }
  }
}
