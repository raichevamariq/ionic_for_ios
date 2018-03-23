import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 


@Injectable()
export class DetailsProvider {



constructor(public http: HttpClient,public storage : Storage) {

}

getDetails () {
let type= window.localStorage.getItem("selectedType");
let event_id = window.localStorage.getItem("selectedId");
let url="";
if(type == "person"){
	url ="http://prodmobile.traxxeo.com/servlet/showPersonDetails?event_id="+event_id+"&userId="+window.localStorage.getItem("userId");
}
else {
	
	url = "http://prodmobile.traxxeo.com/servlet/showDetails?event_id="+event_id+"&userId="+window.localStorage.getItem("userId");
}

 console.log('URL:',url);
 
 var response = this.http.get(url);
return response;
}

}