import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';
import { ListPage } from '../list/list';
// import { Storage } from '@ionic/storage';
//

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  [x: string]: any;


  checkedPerson : boolean = true;
  checkedObject : boolean = true;
  checkedVehicle : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams ) {

  }

  ionViewDidLoad(){

console.log('ionViewDidLoad SettingsPage');

  }

  gotoListPage(): void {
    
   
var person : number; var vehicle:number; var object:number;

      if(this.checkedPerson === true){person = 1;} else {person = 0;}
      if(this.checkedObject === true){object = 1;} else {object = 0;}
      if(this.checkedVehicle === true){vehicle = 1;} else {vehicle = 0;}


      var filter = {
        "person": person,
        "vehicle": vehicle,
        "object": object
      };

      console.log("Filter Person " + filter.person);
      console.log("Filter Object " + filter.object);
      console.log("Filter Vehicle " + filter.vehicle);

console.log("json",JSON.stringify(filter));
    window.localStorage.setItem(window.localStorage.getItem("userId"),JSON.stringify(filter));


   this.navCtrl.push(ListPage);
}
ionViewWillEnter() {
  console.log('ionViewWillEnter SettingsPage');


} 
}
