import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StorageFavorites } from '../../lib/storage/storage-favorites';
import { Product } from '../../models/product';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites: Product[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageFavorites: StorageFavorites
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.favorites = this.storageFavorites.getFavorites();
  }

  back() {
    this.navCtrl.setRoot(HomePage);
  }

}
