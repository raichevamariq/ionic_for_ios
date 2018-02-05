import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../../pages/tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginProvider : LoginProvider) {
  }

  login (){
  console.log(this.username);
   console.log(this.password);
 this.loginProvider.login(this.username,this.password)
    .then(data => {
      
      console.log("Response",data.toString());
     
      window.localStorage.setItem("userId",data.toString());
      this.navCtrl.push(TabsPage);

     
      
  
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
