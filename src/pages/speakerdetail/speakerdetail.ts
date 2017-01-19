import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeakerModel } from '../../models/speaker';

/*
  Generated class for the Speakerdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speakerdetail',
  templateUrl: 'speakerdetail.html'
})
export class SpeakerdetailPage {
  private selectedSpeaker : SpeakerModel
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.selectedSpeaker = navParams.get('speaker');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakerdetailPage');
  }

}
