import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  orders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orders = data.orders;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
