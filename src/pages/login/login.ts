import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../../pages/tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

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
   public unregisterBackButtonAction: any;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginProvider : LoginProvider,public platform : Platform,public app:App) {
  }

  login (){
  console.log(this.username);
   console.log(this.password);
 this.loginProvider.login(this.username,this.password)
    .then(data => {
      
      console.log("Response",data.toString());
     
      window.localStorage.setItem("userId",data.toString());
        if(window.localStorage.getItem(data.toString()) === null )
        {
                var filter = {"person":1,
                     "vehicle":1,
                   "object":1};
          window.localStorage.setItem(data.toString(),JSON.stringify(filter))
                                    };

      this.navCtrl.push(TabsPage);

     
      
  
    });


  }
ionViewWillLeave() {
        // Unregister the custom back button action for this page
   
    }

    public initializeBackButtonCustomHandler(): void {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
    
        }, 10);
    }

  ionViewWillEnter(){
   this.initializeBackButtonCustomHandler();
  let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
  }

}
