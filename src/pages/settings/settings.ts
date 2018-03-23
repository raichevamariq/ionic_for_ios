import { Component,ViewChild, } from '@angular/core';
import { IonicPage, NavController, NavParams,Tabs } from 'ionic-angular';
import { ListProvider } from '../../providers/list/list';
import { ListPage } from '../list/list';
import { TabsPage } from '../tabs/tabs';
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
    window.localStorage.
    setItem(window.localStorage.getItem("userId"),JSON.stringify(filter));

 
 
 // this.tabs.select(1);
 this.navCtrl.parent.select(0);

}
ionViewWillEnter() {
  console.log('ionViewWillEnter SettingsPage');
  let vehicle = JSON.parse(localStorage.getItem(localStorage.getItem("userId"))).vehicle;
  let person = JSON.parse(localStorage.getItem(localStorage.getItem("userId"))).person;
  let object = JSON.parse(localStorage.getItem(localStorage.getItem("userId"))).object;


  if (vehicle == 0 )
  this.checkedVehicle = false ;
  else if (vehicle ==1) 
  this.checkedVehicle = true ;
  if (person == 0 )
  this.checkedPerson = false ;
  else if (person ==1) 
  this.checkedPerson = true ;
if (object == 0 )
  this.checkedObject = false ;
  else if (object ==1) 
  this.checkedObject = true ;

} 
}
