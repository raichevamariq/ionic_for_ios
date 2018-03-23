import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { MyHeaderComponent } from '../components/my-header/my-header';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';

import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';

import { DetailsPage } from '../pages/details/details';
import { SettingsPage } from '../pages/settings/settings';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from '@ionic-native/google-maps';
import { RestProvider } from '../providers/rest/rest';
import { ListProvider } from '../providers/list/list';
import { DetailsProvider } from '../providers/details/details';
import { LoginProvider } from '../providers/login/login';
import { Network } from '@ionic-native/network';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    MyHeaderComponent,
    TabsPage,
    ListPage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    MapPage

  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    MyHeaderComponent,
    TabsPage,
    ListPage,
    DetailsPage,
    SettingsPage,
    LoginPage,
    MapPage
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    ListProvider,
    DetailsProvider,
    LoginProvider,
    GoogleMaps,
    Network
  ]
})
export class AppModule {}
