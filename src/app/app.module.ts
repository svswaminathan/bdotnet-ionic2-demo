import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SessionsPage } from '../pages/sessions/sessions';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { SpeakerdetailPage } from '../pages/speakerdetail/speakerdetail';
import { TabsPage } from '../pages/tabs/tabs';
import { SpeakersPage } from '../pages/speakers/speakers';

@NgModule({
  declarations: [
    MyApp,
    SessionsPage,
    ContactPage,
    HomePage,
    SpeakersPage,
    SpeakerdetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SessionsPage,
    ContactPage,
    HomePage,
    SpeakersPage,
    SpeakerdetailPage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
