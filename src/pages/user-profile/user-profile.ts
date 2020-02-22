import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  back() {
    this.navCtrl.setRoot(HomePage);
  }
}
