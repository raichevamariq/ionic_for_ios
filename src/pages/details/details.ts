import { Component } from '@angular/core';
import { DetailsProvider } from '../../providers/details/details';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Network } from '@ionic-native/network';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 item : any ;
 selectedItem : string =  window.localStorage.getItem('selectedId');

 connected: Subscription;
  disconnected: Subscription;

  constructor(public navCtrl: NavController,
    private network: Network, private toast: ToastController,
   public detailsProvider: DetailsProvider) {

  			this.getDetails();

  }
 displayNetworkUpdate (connectionState: string) {
    let networkType = this.network.type;

    this.toast.create({
      message: `You are now ${connectionState} `,
      duration: 6000,
      position: 'center'
    }).present();
  }
  	getUndefined(val) {
  			return typeof val; ;
  	}

 
    getDetails() {
    
   

    this.detailsProvider.getDetails()
    .subscribe(data => {
      this.item = data;
      console.log("Response",this.item);
      this.item.event_img = window.localStorage.getItem('event_img');
      this.item.category_img = window.localStorage.getItem('category_img');
      this.item.type = window.localStorage.getItem('type');
  
    });
     console.log('Page component is ready : ', window.localStorage.getItem('person'));
  }
  

  ionViewWillEnter() {
    
       console.log(`ionViewDidEnter ListPage`);
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

      this.getDetails();
  }
  }



 