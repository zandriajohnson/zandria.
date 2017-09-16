import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlackExcellencePage } from '../blackExcellence/blackExcellence';
import { NaturalHairPage } from '../naturalHair/naturalHair';
import { ExperiencePage } from '../experiences/experience';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }


  goToHair(){
    this.navCtrl.push(NaturalHairPage);
  }

  goToExcellence(){
    this.navCtrl.push(BlackExcellencePage);
  }

  goToExp(){
    this.navCtrl.push(ExperiencePage);
  }

}
