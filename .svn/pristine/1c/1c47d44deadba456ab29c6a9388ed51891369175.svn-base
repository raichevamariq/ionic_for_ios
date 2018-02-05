import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the MyHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html'
})
export class MyHeaderComponent {

  text: string;
  myDate: String = new Date().toString();

  constructor(public navCtrl:NavController) {
    console.log('Hello MyHeaderComponent Component');
    this.text = 'Hello World';
  }
  logout(){
    window.localStorage.setItem("userId","");
    this.navCtrl.push(LoginPage);
  }

}
