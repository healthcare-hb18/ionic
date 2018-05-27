import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SeverityPage } from '../pages/severity/severity';
import { CartPage } from '../pages/cart/cart';
import { BodyPage } from '../pages/body/body';
import { HeadPage } from '../pages/head/head';
import { FacePage } from '../pages/face/face';
import { ThoraxPage } from '../pages/thorax/thorax';
import { OrgansPage } from '../pages/organs/organs';
import {ListPage} from "../pages/list/list";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BodyPage,
    SeverityPage,
    CartPage,
    HeadPage,
    FacePage,
    ThoraxPage,
    OrgansPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SeverityPage,
    CartPage,
    BodyPage,
    HeadPage,
    FacePage,
    ThoraxPage,
    OrgansPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
