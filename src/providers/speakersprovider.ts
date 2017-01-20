import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SpeakerModel } from '../models/speaker';

/*
  Generated class for the Speakersprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Speakersprovider {
  speakersList: SpeakerModel[];
  constructor(public http: Http) {
    console.log('Hello Speakersprovider Provider');
    this.speakersList = [];
  }

  public getSpeakers(): SpeakerModel[] {
    this.speakersList.push(new SpeakerModel('Amresh Kris', 'Senior Engineer @ Target', 'Senior Engineer', 'assets/images/amresh.jpg', '@amreshkris', ''));
    this.speakersList.push(new SpeakerModel('Phaniraj Purushothamarao', 'Sr.Technical Architect @ Allscripts', 'Phani is an avid Software  Programmer by profession. He holds Post Graduate degree in Computer Applications. Currently working as Sr.Technical Architect in  Allscripts, India. He has about 15 years of experience in the Software industry. He is Passionate about software technology. He loves Reading, Chess and Literature', 'assets/images/Phaniraj.jpg', '', ''));
    this.speakersList.push(new SpeakerModel('Swaminathan Vetri', 'Microsoft MVP/Sr. Engineer @ Target', 'Microsoft MVP | Senior Engineer @ Target | Blogger | Speaker | Amateur Photographer | Gadget freak | Loves Roadtrips', 'assets/images/Swami.jpg', '@svswaminathan', 'http://wannabeegeek.com'));
    return this.speakersList;
  }

}
