import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

login (username:string,password:string) {

var url = "http://prodmobile.traxxeo.com/servlet/loginServlet?username="+username+"&password="+password;
 //var response = this.http.get(url);
//return response;

  return new Promise(resolve => {
    this.http.get(url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log("Error",err.error.text);
      alert("Invalid credentials");
    });
  });
}

}
