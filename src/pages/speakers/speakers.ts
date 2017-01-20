import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeakerModel } from '../../models/speaker';
import { SpeakerdetailPage } from '../speakerdetail/speakerdetail';
import { Speakersprovider } from '../../providers/speakersprovider';

/*
  Generated class for the Speakers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {
  speakersList: SpeakerModel[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public speakerProvider : Speakersprovider) {
    this.speakersList = speakerProvider.getSpeakers();
  }

  openDetails(tappedSpeaker: SpeakerModel) {
    this.navCtrl.push(SpeakerdetailPage, {
      speaker: tappedSpeaker
    });
  }

}
