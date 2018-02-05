import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
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
      console.log(this.listItems);
    });

  }

  filterItems(event){

    if (event.keyCode == 13) {
        this.ionViewWillEnter();
    }
  }

  selectItem (event_id, type,event_img,category_img){

       window.localStorage.setItem('selectedId', event_id);
       alert(localStorage.getItem('selectedId'));
       window.localStorage.setItem('type', type);
       window.localStorage.setItem('event_img', event_img);
       window.localStorage.setItem('category_img', category_img);
       console.log('Selected_item:', event_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ListPage');
    alert(window.localStorage.getItem("userId"));
      this.getItems();

  }

}
