import { Subscription } from 'rxjs/Subscription';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ListProvider } from '../../providers/list/list';
import { NavController, IonicPage, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
   loading :boolean = true ; 
  listItems: any ;
  searchValue: string ="";

  connected: Subscription;
  disconnected: Subscription;

  constructor(public navCtrl: NavController, public listProvider: ListProvider,
    //private storage : Storage,
    private network: Network, private toast: ToastController) {
      this.getItems();
  }

  displayNetworkUpdate (connectionState: string) {
    let networkType = this.network.type;

    this.toast.create({
      message: `You are now ${connectionState} `,
      duration: 6000,
      position: 'center'
    }).present();
  }

  ionViewDidEnter(){

    console.log(`ionViewDidEnter ListPage`);
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }

  getItems() {
    var searchString;

    if (this.searchValue != ""){
      searchString = this.searchValue.toUpperCase();
    }
    else
     searchString = "";
    this.listProvider.getList(searchString)
      .then(data => {

        this.listItems = data;
         this.loading= false;
      console.log(this.listItems);
      console.log(this.listItems[0]);
    window.localStorage.setItem('selectedId', this.listItems[0].event_id);
    
         window.localStorage.setItem('selectedType', this.listItems[0].type);
       window.localStorage.setItem('latitude', this.listItems[0].latitude);
       window.localStorage.setItem('longitude', this.listItems[0].longitude);
       window.localStorage.setItem('map_address', this.listItems[0].map_address);
       window.localStorage.setItem('event_img', this.listItems[0].event_img);
       window.localStorage.setItem('category_img', this.listItems[0].category_img);
    });

  }

  filterItems(event){

    if (event.keyCode == 13) {
        this.ionViewWillEnter();
    }
  }

  selectItem (event_id, type,event_img,category_img,ltd,lng,address){
        
       window.localStorage.setItem('selectedId', event_id);
         window.localStorage.setItem('selectedType', type);
       window.localStorage.setItem('latitude', ltd);
       window.localStorage.setItem('longitude', lng);
       window.localStorage.setItem('map_address', address);
       window.localStorage.setItem('event_img', event_img);
       window.localStorage.setItem('category_img', category_img);
       console.log('Selected_item:', event_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewWillEnter() {
   this.loading = true;
    console.log('ionViewWillEnter ListPage');

  
      this.getItems();

  }

}
