import { Component,ViewChild, } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs,Platform } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { ListPage } from '../list/list';
import { MapPage } from '../map/map';
import { DetailsPage } from '../details/details';
import { SettingsPage } from '../settings/settings';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  

  tab1Root = ListPage;
  tab2Root = DetailsPage;

  tab3Root = SettingsPage;
  tab4Root = MapPage;
  constructor() {

  }

}
