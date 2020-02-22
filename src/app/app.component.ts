import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PaymentInformationPage } from '../pages/payment-information/payment-information';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ConfigurationPage } from '../pages/configuration/configuration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: any, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', icon: 'custom-home', component: HomePage },
      { title: 'Historial de pedidos', icon: 'custom-history', component: HistoryPage },
      { title: 'Favoritos', icon: 'custom-favorites', component: FavoritesPage },
      { title: 'Tipo de pago', icon: 'custom-payment', component: PaymentInformationPage },
      { title: 'Perfil', icon: 'custom-profile', component: UserProfilePage },
      { title: 'Configuración', icon: 'custom-configurations', component: ConfigurationPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
