import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { StorageFavorites } from '../../lib/storage/storage-favorites';
import { Product } from '../../models/product';

/**
 * Generated class for the ProductModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-modal',
  templateUrl: 'product-modal.html',
})
export class ProductModalPage {

  product;
  favorites: Product[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageFavorites: StorageFavorites
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductModalPage');
    this.product = this.navParams.get('product');
    console.log(this.product)
  }

  addFavorites() {
    this.favorites = this.storageFavorites.getFavorites();
    
    if(this.favorites.map(p => p.name).includes(this.product.name)) {
      this.presentToast("Ya has agregado este producto a favoritos");
      return;
    }

    this.favorites.push(this.product);
    this.storageFavorites.setFavorites(this.favorites);
    this.presentToast("Producto agregado a favoritos");
  }

  presentToast(text) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 4000,
    });
    toast.present();
  }

  back() {
    this.navCtrl.pop();
  }

}
