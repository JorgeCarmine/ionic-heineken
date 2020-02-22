import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentInformationPage } from './payment-information';

@NgModule({
  declarations: [
    PaymentInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentInformationPage),
  ],
})
export class PaymentInformationPageModule {}
