import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SessionsPage } from '../sessions/sessions';
import { ContactPage } from '../contact/contact';
import { SpeakersPage } from '../speakers/speakers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SessionsPage;
  tab3Root: any = ContactPage;
  tab4Root: any = SpeakersPage;
  constructor() {

  }
}
