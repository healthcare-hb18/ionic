import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BodyPage } from '../pages/body/body';
import { HeadPage } from '../pages/head/head';
import { FacePage } from '../pages/face/face';
import { ThoraxPage } from '../pages/thorax/thorax';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BodyPage,
    HeadPage,
    FacePage,
    ThoraxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BodyPage,
    HeadPage,
    FacePage,
    ThoraxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
