import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'contactList.html'
})
export class ContactListPage {
  card: any;
  //test: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //this.navParams.get('test');
      console.log(this.navParams.get(this.card));

      //this.navParams.get('card');
      //console.log(card);
  }



  
}
