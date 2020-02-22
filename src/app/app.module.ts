import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PaymentInformationPage } from '../pages/payment-information/payment-information';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { OrdersPage } from '../pages/orders/orders';
import { ProvidersPage } from '../pages/providers/providers';
import { SearchPage } from '../pages/search/search';
import { ProductModalPage } from '../pages/product-modal/product-modal';

import { StorageFavorites } from '../lib/storage/storage-favorites';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    FavoritesPage,
    PaymentInformationPage,
    UserProfilePage,
    ConfigurationPage,
    ShoppingCartPage,
    OrdersPage,
    ProvidersPage,
    SearchPage,
    ProductModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    FavoritesPage,
    PaymentInformationPage,
    UserProfilePage,
    ConfigurationPage,
    ShoppingCartPage,
    OrdersPage,
    ProvidersPage,
    SearchPage,
    ProductModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StorageFavorites,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
