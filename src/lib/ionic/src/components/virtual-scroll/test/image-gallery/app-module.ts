import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html',
  encapsulation: ViewEncapsulation.None
})
export class E2EPage {
  lastMonth: number;
  items = [];

  constructor() {
    var utcSeconds = 787523438; // Dec 15, 1994
    var d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    for (var i = 0; i < 1000; i++) {
      this.items.push({
        index: i,
        date: d,
        imgSrc: `../../img/img/${images[rotateImg]}.jpg?${Math.random()}`,
      });

      rotateImg++;
      if (rotateImg === images.length) rotateImg = 0;

      if (i < 100) {
        utcSeconds += 237600; // 2.75 days
      } else {
        utcSeconds += (Math.random() * 237600) + 86400;
      }

      d = new Date(0);
      d.setUTCSeconds(utcSeconds);
    }
  }

  headerFn(record: any, recordIndex: number, records: any[]) {
    if (this.lastMonth !== record.date.getMonth()) {
      this.lastMonth = record.date.getMonth();

      return {
        date: monthNames[this.lastMonth] + ' ' + record.date.getFullYear()
      };
    }

    return null;
  }

  footerFn(record: any, recordIndex: number, records: any[]) {

    if (recordIndex === records.length - 1) {
      return true;

    } else {
      if (records[recordIndex + 1].date.getMonth() !== this.lastMonth) {
        return true;
      }
    }

    return null;
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  reload() {
    window.location.reload(true);
  }

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>',
})
export class E2EApp {
  root = E2EPage;
}


@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EApp,
    E2EPage
  ]
})
export class AppModule {}

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile',
];

let rotateImg = 0;
