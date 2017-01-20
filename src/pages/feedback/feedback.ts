import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Feedback page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  isInterested : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isInterested = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
