/*import { Component, ViewChild, ElementRef } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
 
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewWillEnter(){
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(parseFloat(window.localStorage.getItem("latitude")), parseFloat(window.localStorage.getItem("longitude")));
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
 
 

 
  }
}*/