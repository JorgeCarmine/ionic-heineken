import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersPage } from '../orders/orders';
import { ProvidersPage } from '../providers/providers';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabOrders;
  tabProviders;
  tabSearchPage;

  constructor(public navCtrl: NavController) {
    this.tabOrders = OrdersPage;
    this.tabProviders = ProvidersPage;
    this.tabSearchPage = SearchPage;
  }

}
