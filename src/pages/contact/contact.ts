import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ContactListPage } from '../contactList/contactList';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

constructor(public navCtrl: NavController) {

}
 
card = {};

  bussCardForm(){
    
    console.log(this.card);


    this.navCtrl.push(ContactListPage, this.card);
  }

}
