import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mercurius_Inc';
  currentTab = 'basic-watch-schedule'

  onChangeTab(_tab: string) {
    this.currentTab = _tab;
    console.log(this.currentTab);
  }

  isActive(_tab: string) {
    return (this.currentTab == _tab);
  }
}
