import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductModalPage } from '../product-modal/product-modal';
import data from '../../data';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  products = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {
    this.products = data.products;
    console.log(this.products);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  presentModal(product) {
    const modal = this.modalCtrl.create(ProductModalPage, { product: product});
    modal.present();
  }

}
