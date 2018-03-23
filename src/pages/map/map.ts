import { Component, ViewChild, ElementRef } from '@angular/core';


import { DetailsProvider } from '../../providers/details/details';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Network } from '@ionic-native/network';
import * as $ from 'jquery'

declare var google;
 

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})


export class MapPage {

 @ViewChild('map') mapElement: ElementRef;
  map: any;
  item : any ;
 selectedItem : string =  window.localStorage.getItem('selectedId');

 connected: Subscription;
  disconnected: Subscription;
 
   constructor(public navCtrl: NavController,
    private network: Network, private toast: ToastController,
   public detailsProvider: DetailsProvider) {

        this.getDetails();

  }
  getDirections (){


  let latitude = window.localStorage.getItem('latitude');
  let longitude = window.localStorage.getItem('longitude');
           let address = window.localStorage.getItem("map_address");
  window.open("geo:"+latitude+","+longitude+"?q="+address+"&mode=d" , '_system');

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
      this.item.type = window.localStorage.getItem('selectedType');
  
    });
     console.log('Page component is ready : ', window.localStorage.getItem('person'));
  }
  

 
  ionViewWillEnter(){
   
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

      this.getDetails();
       this.loadMap();
  }
 
  loadMap(){
    let cat_path ="";
    let latLng = new google.maps.LatLng(parseFloat(window.localStorage.getItem("latitude")), parseFloat(window.localStorage.getItem("longitude")));
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


if(window.localStorage.getItem("selectedType") == "person"){
  cat_path = "assets/img/person_category_map/";
}

else {
  cat_path = "assets/img/veh_categories_map/";

}
  let marker = new google.maps.Marker({
    map: this.map,
    icon: cat_path+window.localStorage.getItem("category_img")+".png",
      
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  var infowindow = new google.maps.InfoWindow({
                        

                          content:'<a href=""  id="linktonav" >'+window.localStorage.getItem("map_address")+'</a>'

                        });


                        marker.addListener('click', function() {

                          infowindow.open(this.map, marker);

                            

                        });
 
 
 

 
  }
}