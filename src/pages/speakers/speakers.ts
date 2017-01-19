import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeakerModel } from '../../models/speaker';
import { SpeakerdetailPage } from '../speakerdetail/speakerdetail';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.speakersList = [];
    this.speakersList.push(new SpeakerModel('Amresh Kris', 'Senior Engineer @ Target', 'Senior Engineer', 'assets/images/amresh.jpg', '@amreshkris', ''));
    this.speakersList.push(new SpeakerModel('Phaniraj Purushothamarao', 'Sr.Technical Architect @ Allscripts', 'Phani is an avid Software  Programmer by profession. He holds Post Graduate degree in Computer Applications. Currently working as Sr.Technical Architect in  Allscripts, India. He has about 15 years of experience in the Software industry. He is Passionate about software technology. He loves Reading, Chess and Literature', 'assets/images/Phaniraj.jpg', '', ''));
    this.speakersList.push(new SpeakerModel('Swaminathan Vetri', 'Microsoft MVP/Sr. Engineer @ Target', 'Microsoft MVP | Senior Engineer @ Target | Blogger | Speaker | Amateur Photographer | Gadget freak | Loves Roadtrips', 'assets/images/Swami.jpg', '@svswaminathan', 'http://wannabeegeek.com'));
  }

  openDetails(tappedSpeaker: SpeakerModel) {
    this.navCtrl.push(SpeakerdetailPage, {
      speaker: tappedSpeaker
    });
  }

}
