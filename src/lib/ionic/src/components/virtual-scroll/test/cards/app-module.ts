import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { IonicApp, IonicModule } from '../../../..';


@Component({
  templateUrl: 'main.html',
  encapsulation: ViewEncapsulation.None
})
export class E2EPage {
  items: any[] = [];

  constructor() {
    for (var i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[rotateImg],
        imgSrc: getImgSrc(),
        avatarSrc: getImgSrc(),
        imgHeight: Math.floor((Math.random() * 50) + 150),
        content: lorem.substring(0, (Math.random() * (lorem.length - 100)) + 100)
      });

      rotateImg++;
      if (rotateImg === images.length) rotateImg = 0;
    }
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

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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

function getImgSrc() {
  let src = `../../img/img/${images[rotateImg]}.jpg?${Math.round(Math.random() * 10000000)}`;
  rotateImg++;
  if (rotateImg === images.length) rotateImg = 0;
  return src;
}

let rotateImg = 0;
