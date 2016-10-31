import { Animation } from '../../animations/animation';
import { Transition } from '../../transitions/transition';


/**
 * Animations for loading
 */
export class LoadingPopIn extends Transition {
  init() {
    let ele = this.enteringView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    backdrop.fromTo('opacity', 0.01, 0.3);

    this
      .easing('ease-in-out')
      .duration(200)
      .add(backdrop)
      .add(wrapper);
  }
}


export class LoadingPopOut extends Transition {
  init() {
    let ele = this.leavingView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    backdrop.fromTo('opacity', 0.3, 0);

    this
      .easing('ease-in-out')
      .duration(200)
      .add(backdrop)
      .add(wrapper);
  }
}


export class LoadingMdPopIn extends Transition {
  init() {
    let ele = this.enteringView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.1, 1);
    backdrop.fromTo('opacity', 0.01, 0.5);

    this
      .easing('ease-in-out')
      .duration(200)
      .add(backdrop)
      .add(wrapper);
  }
}


export class LoadingMdPopOut extends Transition {
  init() {
    let ele = this.leavingView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 0.9);
    backdrop.fromTo('opacity', 0.5, 0);

    this
      .easing('ease-in-out')
      .duration(200)
      .add(backdrop)
      .add(wrapper);
  }
}


export class LoadingWpPopIn extends Transition {
  init() {
    let ele = this.enteringView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.01, 1).fromTo('scale', 1.3, 1);
    backdrop.fromTo('opacity', 0.01, 0.16);

    this
      .easing('cubic-bezier(0,0 0.05,1)')
      .duration(200)
      .add(backdrop)
      .add(wrapper);
  }
}


export class LoadingWpPopOut extends Transition {
  init() {
    let ele = this.leavingView.pageRef().nativeElement;
    let backdrop = new Animation(ele.querySelector('ion-backdrop'));
    let wrapper = new Animation(ele.querySelector('.loading-wrapper'));

    wrapper.fromTo('opacity', 0.99, 0).fromTo('scale', 1, 1.3);
    backdrop.fromTo('opacity', 0.16, 0);

    this
      .easing('ease-out')
      .duration(150)
      .add(backdrop)
      .add(wrapper);
  }
}
