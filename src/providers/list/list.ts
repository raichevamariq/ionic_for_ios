import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()
export class ListProvider {



constructor(public http: HttpClient,public storage : Storage) {
  console.log('Hello RestServiceProvider Provider');
}

getList(searchValue) {

   var filter =JSON.parse(localStorage.getItem(localStorage.getItem("userId")));
var person:any;
 var vehicle:any;
 var object:any;   
      console.log("filter " + filter);
     if (localStorage.getItem(localStorage.getItem("userId")) != null) {
    person = filter.person;
      object = filter.object;
      vehicle = filter.vehicle;
     

     }
     else {
     person = 1;
       vehicle = 1;
        object = 1;
       }
var userId = window.localStorage.getItem("userId");
var url = "http://prodmobile.traxxeo.com/servlet/searchVehicle?userId="+userId+"&searchValue="+searchValue+"&person="+person+"&vehicle="+vehicle+"&object="+object
 console.log ("URL list",url);
  return new Promise(resolve => {

    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

}
