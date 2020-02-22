import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import date from '../../data';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orders = date.history;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  back() {
    this.navCtrl.setRoot(HomePage);
  }

}
